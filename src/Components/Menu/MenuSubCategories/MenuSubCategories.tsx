import React, { useState, useEffect } from "react";
import {
  EditCategory,
  Icon,
  ItemAmount,
  ItemTitle,
  ItemTitleAmount,
  MenuSubcatMainDiv,
  MenuSubCategoriesDiv,
} from "./MenuSubCategories.style";
import { MenuSubCategoriesTypes } from "../../../Types/Components/MenuSubCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import { toast } from "react-toastify";
import AlertDeleteModal from "../../Modals/PopUpModal/AlertDeleteModal";
import AddNewMenuModal from "../../Modals/AddNewMenuModal/AddNewMenuModal";
import { TextField } from "../../TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSubCategoryIdStore } from "../../../Pages/states/MenuCategory.state";

const MenuSubCategories = (props: MenuSubCategoriesTypes) => {
  const {
    title,
    amount,
    deleteIcon,
    clicked,
    categoryList,
    editIcon,
    subcatId,
    subCatImage,
    active,
    onFetchSubCategory,
    subCatIdforItem,
    ...rest
  } = props;

  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<number | null | any>(null);
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  // modal states -----{start
  const [isAdding, setIsAdding] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>();
  // to change the preview image based on modal value
  useEffect(() => {
    formik.resetForm();

    setPreview(() => {
      if (addMenuModal == false) {
        return null;
      } else return preview;
    });
  }, [addMenuModal]);
  //modal states -----end}

  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    // console.log("Menu sub category Item edit")
  };

  // image upload and preview
  const [file, setFile] = useState<File | any>();
  const [preview, setPreview] = useState<File | any>();
  // form validation
  let schema = yup.object().shape({
    subcategory_name: yup.string().required("is required"),
    image: yup.mixed().required("is required"),
  });
  // formik form

  const formik = useFormik({
    initialValues: {
      subcategory_name: "",
      image: "",
      category_id: drawerSubCatId,
    },
    onSubmit: (values, action) => {
      console.log("vals", values);
      const formdata = new FormData();
      formdata.append("image", values.image);
      formdata.append("category_name", values.subcategory_name);
      HTTPMethods.postMenu(`/subcategory/editsubcategory/`, formdata)
        .then(async (res) => {
          action.resetForm();
          console.log(res);
          toast.success("Product added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          action.resetForm();
        })
        .catch((err) => {
          toast.error("error", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
        });
    },
    validationSchema: schema,
  });

  // image------{start
  function handleDelete(subCatId: any) {
    // ${subCatId}
    HTTPMethods.deleteMenu(`/subcategory/deletesubcategory/${subCatId}`, {})
      .then(async (res) => {
        onFetchSubCategory((prev: any) => !prev);
        toast.success("Sub category Successfully deleted", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
      })
      .catch(async (err) => {
        onFetchSubCategory((prev: any) => !prev);

        toast.error("Can't delete the selected sub category", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
      });
  }

  const [click, setClick] = useState<any>(false);
  useEffect(() => {
    setClick(() => {
      if (clicked === subcatId) {
        return !click;
      } else click;
    });
    return () => setClick(false);
  }, [clicked]);

  useEffect(() => {
    if (openModal && deleteItem) {
      handleDelete(deleteCategoryId);
      setDeleteItem(false);
    }
  }, [openModal, deleteItem]);
  return (
    <>
      {title && (
        <MenuSubcatMainDiv {...rest}>
          <MenuSubCategoriesDiv
            clicked={click}
            {...rest}
            onClick={() => {}}
            onMouseEnter={() => {
              setHoveredIndex(`${subcatId}`);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            key={subcatId}>
            <img src={subCatImage} alt="Sub Category" />
            {hoveredIndex == subcatId || click === true ? (
              <EditCategory>
                <Icon
                  onClick={() => {
                    setAddMenuModal(!addMenuModal);
                    setModalTitle("Edit Sub Category");
                    handleEdit;
                  }}>
                  {editIcon}
                </Icon>
                <Icon
                  onClick={() => {
                    setOpenModal(true);
                    setDeleteCategoryId(`${subCatIdforItem}`);
                  }}>
                  {deleteIcon}
                </Icon>
              </EditCategory>
            ) : (
              <></>
            )}
          </MenuSubCategoriesDiv>
          <ItemTitle>{title}</ItemTitle>
          {openModal === true ? (
            <AlertDeleteModal
              title={"Are you sure you want to delete?"}
              setOpenModal={setOpenModal}
              setDeleteItem={setDeleteItem}
              deleteItem={deleteItem}
            />
          ) : addMenuModal === true ? (
            <AddNewMenuModal
              title={modalTitle}
              setAddMenuModal={setAddMenuModal}
              footerButtons={<></>}>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  label="Sub category name"
                  name="subcategory_name"
                  placeholder="Sub Category Name"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subcategory_name &&
                    formik.errors.subcategory_name
                      ? formik.errors.subcategory_name
                      : null
                  }
                />

                <label htmlFor="image" className="imageContainer">
                  <img src={preview || "/assets/imageUpload.svg"} alt="" />
                  <TextField
                    type="file"
                    label="sub Category Image"
                    name="image"
                    placeholder="Image"
                    // @ts-ignore
                    id="image"
                    error={
                      formik.touched.image && formik.errors.image
                        ? formik.errors.image
                        : null
                    }
                    onChange={(e: any) => {
                      const filereader = new FileReader();
                      filereader.readAsDataURL(e.target.files[0]);
                      setFile(e.target.files[0]);
                      filereader.onload = () => {
                        if (filereader.readyState === 2) {
                          formik.setFieldValue("image", e.target.files[0]);
                          setPreview(filereader.result);
                        }
                      };

                      console.log(file);
                    }}
                    // accept="image/*"
                  />
                </label>
                <Button
                  onClick={() => {
                    formik.resetForm();
                    setPreview("");
                  }}
                  type="reset">
                  Clear
                </Button>
                <Button type="submit" disabled={isAdding}>
                  {isAdding ? "Adding..." : "Add"}
                </Button>
              </form>
            </AddNewMenuModal>
          ) : (
            <></>
          )}
        </MenuSubcatMainDiv>
      )}
    </>
  );
};

export default MenuSubCategories;
