import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import {
  CategoryTitle,
  EditCategory,
  MenuCategoriesDiv,
  Icon,
  MenuTitleName,
  MenuCategoryMainDIv,
} from "./MenuCategories.style";
import { useSubCategoryIdStore } from "../../../Pages/states/MenuCategory.state";
import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";
import ActionButton from "../../ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import { toast } from "react-toastify";
import AlertDeleteModal from "../../Modals/PopUpModal/AlertDeleteModal";
import { useFormik } from "formik";
import * as yup from "yup";
import AddNewMenuModal from "../../Modals/AddNewMenuModal/AddNewMenuModal";
import { TextField } from "../../TextField";
import { Button } from "@mui/material";
type RouteParamType = {
  id: any;
};
export const MyCategoryIdContext = createContext<any>(null);
const MenuCategories = (props: MenuCategoriesTypes) => {
  //
  const {
    title,
    deleteIcon,
    editIcon,
    clicked,
    onFetchCategory,
    categoryList,
    ...rest
  } = props;
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

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

  // image upload and preview
  const [file, setFile] = useState<File | any>();
  const [preview, setPreview] = useState<File | any>();
  // form validation
  let schema = yup.object().shape({
    category_name: yup.string().required("is required"),
    image: yup.mixed().required("is required"),
  });
  // formik form
  const formik = useFormik({
    initialValues: {
      category_name: "",
      image: "",
    },
    onSubmit: (values, action) => {
      // console.log(values);
      setIsAdding(true);
      const formdata = new FormData();
      formdata.append("image", values.image);
      formdata.append("category_name", values.category_name);

      HTTPMethods.postMenu("/category/addcategory", formdata)
        .then(async (res) => {
          setIsAdding(false);
          onFetchCategory((prev: any) => !prev);

          toast.success("Product added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          action.resetForm();
        })
        .catch((err) => {
          setIsAdding(false);
          toast.error("error", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          onFetchCategory((prev: any) => !prev);
        });
    },
    validationSchema: schema,
  });
  //

  const navigate = useNavigate();
  const { id } = useParams<RouteParamType>();
  const handleEdit = () => {};

  // delete category
  // sometimes it doesnot show the error or success message evenif the item/cat is deleted
  function handleDelete(subCatId: any) {
    HTTPMethods.deleteMenu(`/category/deletecategory/${subCatId}`, {})
      .then(async (res) => {
        toast.success("Category deleted Successfully.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });

        setTimeout(() => {
          setOpenModal(false);
          onFetchCategory((prev: any) => !prev);
        }, 3000);
      })
      .catch(async (err) => {
        toast.error("Selected Category cannot be deleted.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });

        setTimeout(() => {
          setOpenModal(false);
          onFetchCategory((prev: any) => !prev);
        }, 3000);
      });
  }

  // add new category function ----{start
  function addCategory() {
    setOpenModal(true);
    // setEditState(!editState);
    setModalTitle("Are you sure You want to delete?");

    HTTPMethods.postMenu("category/addcategory", {}).then(async (res: any) =>
      alert(res)
    );
  }

  useEffect(() => {
    setCategory(
      category.map((cat: any, index: number) => {
        if (parseInt(id) === index) {
          cat.active = true;
        } else cat.active = false;
        return cat;
      })
    );
  }, [id]);

  useEffect(() => {
    if (openModal && deleteItem) {
      handleDelete(deleteCategoryId);
      setDeleteItem(true);
    }
  }, [openModal, deleteItem]);
  return (
    <>
      <MenuCategoryMainDIv {...rest}>
        <MenuTitleName>Categories</MenuTitleName>

        {category.map((item, idx) => (
          <MenuCategoriesDiv
            clicked={item.active}
            onClick={() => {
              navigate(`/menu/${idx}`);
              setDrawerSubCatId(item.category_id);
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <CategoryTitle key={idx}>{item.category_name}</CategoryTitle>
            {hoveredIndex === idx || item.active ? (
              <EditCategory>
                <Icon
                  onClick={() => {
                    setAddMenuModal(!addMenuModal);
                    setModalTitle("Edit Category");
                    // setDeleteCategoryId(item.category_id);
                    handleEdit;
                  }}>
                  {editIcon}
                </Icon>
                <Icon
                  onClick={() => {
                    setOpenModal(true);
                    setDeleteCategoryId(item.category_id);
                  }}>
                  {deleteIcon}
                </Icon>
              </EditCategory>
            ) : (
              <></>
            )}
          </MenuCategoriesDiv>
        ))}

        <ActionButton
          icon={<MdAdd size={25} />}
          label={"add category"}
          onClick={() => {
            addCategory;
            setAddMenuModal(true);
            setModalTitle("Add New Category");
          }}
          forMenuCat={true}
        />
      </MenuCategoryMainDIv>
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
              label="category name"
              name="category_name"
              placeholder="Category Name"
              onChange={formik.handleChange}
              error={
                formik.touched.category_name && formik.errors.category_name
                  ? formik.errors.category_name
                  : null
              }
            />
            <label htmlFor="image" className="imageContainer">
              <img src={preview || "/assets/imageUpload.svg"} alt="" />
              <TextField
                type="file"
                label="Category Image"
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
    </>
  );
};

export default MenuCategories;
