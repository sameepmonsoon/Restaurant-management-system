import React, { useState, useEffect } from "react";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { MenuSubCategoryItemTypes } from "../../../Types/Components/MenuSubCategoryItemTypes";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import AddNewMenuModal from "../../Modals/AddNewMenuModal/AddNewMenuModal";
import AlertDeleteModal from "../../Modals/PopUpModal/AlertDeleteModal";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "../../TextField";
import { Button } from "@mui/material";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import {
  MenuSubCategoriesDiv,
  MenuSubcatMainDiv,
  EditCategory,
  Icon,
} from "../MenuSubCategories/MenuSubCategories.style";
import {
  MenuSubCatItemDiv,
  ItemTitle,
  ItemContentDivContainer,
} from "./MenuSubCategoryItem.style";

const MenuSubCategoryItem = (props: MenuSubCategoryItemTypes) => {
  const { subcatParentId, clickedSubCat, editIcon, deleteIcon, ...rest } =
    props;
  const [category, setCategory] = useState<any>([]);
  const [itemState, setItemState] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<any>();
  // modal states -----{start
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>();
  // to change the preview image based on modal value
  useEffect(() => {
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
      dish_name: "",
      dish_price: "90",
      image: "",
      description: "aaaaa",
      subcategory_id: "b72d6b4-00c8-43d3-b347-2d3d726b0d77",
      category_id: "22f03442-fba1-439f-af55-ca44a4770f8a",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      // HTTPMethods.postMenu("/menu/adddish", values)
      //   .then(async (res) => {
      //     action.resetForm();
      //     console.log(res);
      //     toast.success("Product added successfully", {
      //       theme: "colored",
      //       hideProgressBar: true,
      //       autoClose: 1000,
      //     });
      //     action.resetForm();
      //   })
      //   .catch((err) => {
      //     toast.error("error", {
      //       theme: "colored",
      //       hideProgressBar: true,
      //       autoClose: 1000,
      //     });
      //   });
    },
    validationSchema: schema,
  });
  //
  console.log(formik.initialValues);
  const location = useLocation();
  useEffect(() => {
    HTTPMethods.getMenu(`/menu/readdishwithsubcategory/${subcatParentId}`)
      .then(async (res: any) => {
        if (res.data.payload.dish.length === 0) {
          setCategory([]);
        } else {
          setCategory(res.data.payload.dish);
        }
      })
      .catch(async (err: any) => {
        toast.error("No Dish  Found", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 900,
          position: "top-right",
          toastId: "info1",
        });
        setCategory([]);
      });
  }, [subcatParentId]);

  // detects route change and removes pre fetched subcategory item
  useEffect(() => {
    setDeleteCategoryId("");
    setCategory([]);
    setClick(false);
  }, [location]);

  // function to delete the sub category item
  function handleDelete(deleteSubCatItem: any) {
    // ${deleteSubCatItem}
    HTTPMethods.deleteMenu(`menu/deletedish/${deleteSubCatItem}`, {})
      .then(async (res) => {
        toast.success("Sub category Successfully deleted", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      })
      .catch(async (err) => {
        toast.error("Can't delete the selected subcat item", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      });
  }

  //to open and close the modal-- handle delete state
  useEffect(() => {
    if (openModal && deleteItem) {
      handleDelete(deleteCategoryId);
      setDeleteItem(false);
    }
  }, [openModal, deleteItem]);

  //to set the  click and hovered css effect

  const [click, setClick] = useState<any>(false);
  useEffect(() => {
    setClick(() => {
      if (clickedSubCat == subcatParentId) {
        return !click;
      } else click;
    });
    return () => setClick(false);
  }, [itemState]);

  // handle edit or delete

  return (
    <>
      {clickedSubCat === subcatParentId ? (
        <MenuSubCatItemDiv>
          <ItemTitle>Items</ItemTitle>
          <ItemContentDivContainer>
            <>
              {category.map((item: any, index: any) => {
                return (
                  <MenuSubcatMainDiv {...rest}>
                    <MenuSubCategoriesDiv
                      clicked={click}
                      {...rest}
                      onClick={() => {
                        setItemState(!itemState);
                      }}
                      onMouseEnter={() => {
                        setHoveredIndex(subcatParentId);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                      }}
                      key={subcatParentId}>
                      <img
                        src={`http://backend1.kpop.com.np/public/Dish_Images/${item.dish_image}`}
                        alt="Sub Category"
                      />
                      {hoveredIndex == subcatParentId || click === true ? (
                        <EditCategory>
                          <Icon
                            onClick={() => {
                              setAddMenuModal(!addMenuModal);
                              setModalTitle("Edit Item");
                              setDeleteCategoryId(item.category_id);
                            }}>
                            {editIcon}
                          </Icon>
                          <Icon
                            onClick={() => {
                              setOpenModal(true);
                              setDeleteCategoryId(`${item.dish_id}`);
                              console.log(deleteCategoryId);
                            }}>
                            {deleteIcon}
                          </Icon>
                        </EditCategory>
                      ) : (
                        <></>
                      )}
                    </MenuSubCategoriesDiv>
                    <ItemTitle>{item.dish_name}</ItemTitle>
                  </MenuSubcatMainDiv>
                );
              })}
              <ActionButton
                icon={<MdAdd size={25} />}
                label={"Add ITEM"}
                onClick={() => {
                  setAddMenuModal(true);
                  console.log(deleteCategoryId);
                }}
                forMenuSubcat={true}
              />
            </>
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
                    label="item name"
                    name="dish_name"
                    placeholder="Item Name"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dish_name && formik.errors.dish_name
                        ? formik.errors.dish_name
                        : null
                    }
                  />
                  <label htmlFor="image">
                    <img src={preview || "/assets/imageUpload.svg"} alt="" />
                    <TextField
                      type="file"
                      label="Item Image"
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
                      }}
                      accept="image/*"
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
            ) : (
              <></>
            )}
          </ItemContentDivContainer>
        </MenuSubCatItemDiv>
      ) : (
        <>
          <MenuSubCatItemDiv>
            <ItemTitle>Items</ItemTitle>
          </MenuSubCatItemDiv>
        </>
      )}
    </>
  );
};

export default MenuSubCategoryItem;
