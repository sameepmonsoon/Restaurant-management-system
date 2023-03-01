import React, { useState, useEffect } from "react";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { MenuSubCategoryItemTypes } from "../../../Types/Components/MenuSubCategoryItemTypes";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import AlertModal from "../../AlertDeleteModal/AlertModal";
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
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState("");

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
                          <Icon onClick={() => {}}>{editIcon}</Icon>
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
              {/* <MenuSubCategories
                    title={item.dish_name}
                    amount={1}
                    deleteIcon={<MdDeleteOutline size={25} />}
                    editIcon={<HiOutlinePencil size={25} />}
                    onClick={() => {
                      console.log(category);
                    }}
                    clicked={true}
                    subcatId={""}
                    categoryList={[]}
                    key={subcatParentId}
                    subCatImage={`http://backend1.kpop.com.np/public/Dish_Images/${item.dish_image}`}
                  />
              */}
              <ActionButton
                icon={<MdAdd size={25} />}
                label={"Add ITEM"}
                onClick={() => {}}
                forMenuSubcat={true}
              />
            </>
            {openModal && (
              <AlertModal
                title={"Are you sure you want to delete?"}
                setOpenModal={setOpenModal}
                setDeleteItem={setDeleteItem}
                deleteItem={deleteItem}
              />
            )}
          </ItemContentDivContainer>
        </MenuSubCatItemDiv>
      ) : (
        <>
          <MenuSubCatItemDiv>
            <ItemTitle>Items</ItemTitle>
            <ActionButton
              icon={<MdAdd size={25} />}
              label={"Add ITEM"}
              onClick={() => {}}
              forMenuSubcat={true}
            />
          </MenuSubCatItemDiv>
        </>
      )}
    </>
  );
};

export default MenuSubCategoryItem;
