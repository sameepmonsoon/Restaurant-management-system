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
  //modal states -----end}
  const [file, setFile] = useState<File | any>();
  let schema = yup.object().shape({
    subcategory_name: yup.string().required("is required"),
    image: yup.mixed().required("is required"),
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      image: "",
      category_id: drawerSubCatId,
      subcategory_name: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
      HTTPMethods.postMenu(`/subcategory/addsubcategory`, values)
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
      })
      .catch(async (err) => {
        toast.error("Cannot fetch subcategory item.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setCategory([]);
      });
  }, [id]);
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
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  label="sub category name"
                  name="subcategory_name"
                  placeholder="Sub Category Name"
                  onChange={handleChange}
                  error={
                    touched.subcategory_name && errors.subcategory_name
                      ? errors.subcategory_name
                      : null
                  }
                />
                <label htmlFor="image">
                  <img src={file || "/assets/imageUpload.svg"} alt="" />
                  <TextField
                    type="file"
                    label="Sub category Image"
                    name="image"
                    placeholder="Image"
                    // @ts-ignore
                    id="image"
                    error={touched.image && errors.image ? errors.image : null}
                    onChange={handleChange}
                  />
                </label>
                <Button
                  onClick={() => {
                    resetForm();
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
        />
      )}
    </MenuSubCategoryContentMain>
  );
}
