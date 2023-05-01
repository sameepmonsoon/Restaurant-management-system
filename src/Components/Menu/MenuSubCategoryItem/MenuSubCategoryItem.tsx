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
  const {
    subcatParentId,
    clickedSubCat,
    editIcon,
    deleteIcon,
    categoryId,
    ...rest
  } = props;
  const [category, setCategory] = useState<any>([]);
  const [itemState, setItemState] = useState(false);
  const [readItem, setReadItem] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<any>();

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
    dish_name: yup.string().required("is required"),
    dish_price: yup.number().required("is required"),
    description: yup.string().required("is required"),

    image: yup.mixed().required("is required"),
  });
  // formik form
  const sucategory_id = subcatParentId;
  const category_id = categoryId;
  const formik = useFormik({
    initialValues: {
      dish_name: "",
      dish_price: "",
      image: "",
      description: "",
    },
    onSubmit: async (values, action) => {
      const formdata = new FormData();
      formdata.append("image", values.image);
      formdata.append("dish_name", values.dish_name);
      formdata.append("description", values.description);
      formdata.append("dish_price", values.dish_price);
      formdata.append("subcategory_id", sucategory_id);
      formdata.append("category_id", category_id);
      setIsAdding(true);
      HTTPMethods.postMenu("/menu/adddish", formdata)
        .then(async (res) => {
          setIsAdding(false);

          toast.success("Product added successfully", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          action.resetForm();
          setReadItem((prev: any) => !prev);
          setTimeout(() => {
            setAddMenuModal(false);
          }, 3000);
        })
        .catch((err) => {
          setIsAdding(false);
          toast.error("error", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          setReadItem((prev: any) => !prev);
          setTimeout(() => {
            setAddMenuModal(false);
          }, 3000);
        });
    },
    validationSchema: schema,
  });
  //
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
  }, [subcatParentId, readItem]);

  // detects route change and removes pre fetched subcategory item
  useEffect(() => {
    setDeleteCategoryId("");
    setCategory([]);
    setClick(false);
  }, [location]);

  // function to delete the sub category item
  function handleDelete(deleteSubCatItem: any) {
    HTTPMethods.deleteMenu(
      `/menu/deletedish/${deleteSubCatItem}
    `,
      {}
    )
      .then(async (res) => {
        toast.success("Sub category Successfully deleted", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setReadItem((prev: any) => !prev);
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
        setReadItem((prev: any) => !prev);
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
                  setModalTitle("Add New Item");
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
                    label="Item name"
                    name="dish_name"
                    placeholder="Item Name"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dish_name && formik.errors.dish_name
                        ? formik.errors.dish_name
                        : null
                    }
                  />
                  <TextField
                    type="number"
                    label="Item price"
                    name="dish_price"
                    placeholder="Item Price"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dish_price && formik.errors.dish_price
                        ? formik.errors.dish_price
                        : null
                    }
                  />
                  <TextField
                    type="text"
                    label="Item Description"
                    name="description"
                    placeholder="Item Description"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : null
                    }
                  />

                  <label htmlFor="image" className="imageContainer">
                    <img src={preview || "/assets/imageUpload.svg"} alt="" />
                    <TextField
                      type="file"
                      label="Item Image"
                      name="image"
                      placeholder="Item Image"
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
                  <Button type="submit" disabled={isAdding}>
                    {isAdding ? "Adding..." : "Add"}
                  </Button>
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
