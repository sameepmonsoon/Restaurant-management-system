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
import AlertModal from "../../AlertDeleteModal/AlertModal";
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
    subCatIdforItem,
    ...rest
  } = props;

  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<number | null | any>(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState("");

  const [deleteItem, setDeleteItem] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    // console.log("Menu sub category Item edit")
  };

  function handleDelete(subCatId: any) {
    // ${subCatId}
    HTTPMethods.deleteMenu(`/subcategory/deletesubcategory/`, {})
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
        toast.error("Can't delete the selected sub category", {
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

  const [click, setClick] = useState<any>(false);
  useEffect(() => {
    setClick(() => {
      if (clicked === subcatId) {
        return !click;
      } else click;
    });
    return () => setClick(false);
  }, [clicked]);

  // unselect on location change
  // useEffect(() => {
  //   setClick(!click);
  // }, [location]);
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
            onClick={() => {
              // navigate(`/menu/${visible}`);
            }}
            onMouseEnter={() => {
              setHoveredIndex(`${subcatId}`);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            key={subcatId}>
            <img src={subCatImage} alt="Sub Category" />
            {/* <ItemTitleAmount>
        <ItemAmount>Rs. {visible}</ItemAmount>
      </ItemTitleAmount> */}
            {hoveredIndex == subcatId || click === true ? (
              <EditCategory>
                <Icon onClick={handleEdit}>{editIcon}</Icon>
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
          {openModal && (
            <AlertModal
              title={"Are you sure you want to delete?"}
              setOpenModal={setOpenModal}
              setDeleteItem={setDeleteItem}
              deleteItem={deleteItem}
            />
          )}
        </MenuSubcatMainDiv>
      )}
    </>
  );
};

export default MenuSubCategories;
