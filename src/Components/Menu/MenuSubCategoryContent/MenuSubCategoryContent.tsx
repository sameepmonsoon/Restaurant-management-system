import React, { useEffect, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import MenuSubCategoryItem from "../MenuSubCategoryItem/MenuSubCategoryItem";
import { useSubCategoryIdStore } from "../../../Pages/states/MenuCategory.state";
import {
  MenuSubCategoryContentMain,
  MenuSubCategoryContentDiv,
} from "./MenuSubCategoryContent.style";
import { toast } from "react-toastify";
import AddNewMenuModal from "../../Modals/AddNewMenuModal/AddNewMenuModal";
import { TextField } from "../../TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
export default function MenuSubCategoryContent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<any>([]);
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const [mapSubcatId, setMapSubcatId] = useState<number | any>(1);
  const [subCatItemVisible, setSubCatItemVisible] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState<string | any>("");
  const [subCategoryParentId, setSubCategoryParentId] = useState<string | any>(
    ""
  );
  // modal states -----{start
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>();
  const [fetchSubCategory, setFetchSubCategory] = useState<Boolean>();

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
    subcategory_name: yup.string().required("is required"),
    image: yup.mixed().required("is required"),
  });
  // formik form
  const category_id = drawerSubCatId;

  const formik = useFormik({
    initialValues: {
      subcategory_name: "",
      image: "",
    },
    onSubmit: (values, action) => {
      console.log("vals", values);
      const formdata = new FormData();
      formdata.append("image", values.image);
      formdata.append("category_id", category_id);
      formdata.append("subcategory_name", values.subcategory_name);
      console.log("vals", formdata.get("image"));
      console.log("formdata", formdata.get("category_id"));
      HTTPMethods.postMenu(`/subcategory/addsubcategory`, formdata)
        .then(async (res) => {
          action.resetForm();
          toast.success("Product added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          setFetchSubCategory((prev) => !prev);
          setAddMenuModal(false);
          action.resetForm();
        })
        .catch((err) => {
          setFetchSubCategory((prev) => !prev);

          setAddMenuModal(false);

          toast.error("error", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
        });
    },
    validationSchema: schema,
  });

  //
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    HTTPMethods.getMenu(`/menu/readsubcatgory/${drawerSubCatId}`)
      .then(async (res: any) => {
        if (res.data.payload.subcategory.length === 0) {
          setCategory([]);
        } else {
          setCategory(res.data.payload.subcategory);
        }
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      })
      .catch(async (err) => {
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);

        toast.error("Cannot fetch subcategory item.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setCategory([]);
      });
  }, [id, drawerSubCatId, fetchSubCategory]);
  let filteredCat: any[] = [];
  let data = category.map((item: any) =>
    item.subcategory_name.toLocaleLowerCase()
  );
  filteredCat = category
    .filter((item: any, idx: any) => category.indexOf(item) === idx)
    .sort(function (a: any, b: any) {
      let x = a.subcategory_name.toLowerCase();
      let y = b.subcategory_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  return (
    <MenuSubCategoryContentMain>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <MenuSubCategoryContentDiv borderBottom={subCatItemVisible}>
          {category.map((subcat: any, index: any) => (
            <MenuSubCategories
              title={subcat.subcategory_name}
              amount={subcat.id}
              deleteIcon={<MdDeleteOutline size={25} />}
              editIcon={<HiOutlinePencil size={25} />}
              onClick={() => {
                // set for click event selects the subcat
                setMapSubcatId(index);
                setSubCatItemVisible(true);
                setSubCategoryName(subcat.subcategory_name);
                setSubCategoryParentId(subcat.subcategory_id);
              }}
              clicked={mapSubcatId}
              subcatId={index}
              categoryList={filteredCat}
              active={subcat.active}
              key={subcat.id}
              subCatImage={`http://backend1.kpop.com.np/public/SubCategory_Images/${subcat.subcategory_image}`}
              subCatIdforItem={subcat.subcategory_id}
              onFetchSubCategory={setFetchSubCategory}
            />
          ))}
          <ActionButton
            icon={<MdAdd size={25} />}
            label={"Add SUBCATEGORY "}
            onClick={() => {
              setAddMenuModal(true);
              setModalTitle("Add New sub Category");
            }}
            forMenuSubcat={true}
          />
          {addMenuModal && (
            <AddNewMenuModal
              title={modalTitle}
              setAddMenuModal={setAddMenuModal}
              footerButtons={<></>}>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  label="Sub Category name"
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
                <Button type="submit">Add</Button>
              </form>
            </AddNewMenuModal>
          )}
        </MenuSubCategoryContentDiv>
      )}

      {subCatItemVisible && (
        <MenuSubCategoryItem
          subcatParentId={subCategoryParentId}
          clickedSubCat={subCategoryParentId}
          deleteIcon={<MdDeleteOutline size={25} />}
          editIcon={<HiOutlinePencil size={25} />}
          onClick={() => {}}
          categoryId={drawerSubCatId}
        />
      )}
    </MenuSubCategoryContentMain>
  );
}
