import React, { useState, useEffect } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { MenuSubCategoryItemTypes } from "../../../Types/Components/MenuSubCategoryItemTypes";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import {
  MenuSubCatItemDiv,
  ItemTitle,
  ItemContentDivContainer,
} from "./MenuSubCategoryItem.style";

const MenuSubCategoryItem = (props: MenuSubCategoryItemTypes) => {
  const { subcatParentId, clickedSubCat } = props;
  const [category, setCategory] = useState<any>([]);
  const [hoveredIndex, setHoveredIndex] = useState();
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
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
        setCategory([]);
      });
  }, [subcatParentId]);
  useEffect(() => {
    setCategory([]);
  }, [location]);
  console.log("subcategory item", category, subcatParentId);
  return (
    <>
      {clickedSubCat === subcatParentId ? (
        <MenuSubCatItemDiv>
          <ItemTitle>Items</ItemTitle>
          <ItemContentDivContainer>
            <>
              {category.map((item: any, index: any) => {
                return (
                  <MenuSubCategories
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
                );
              })}

              <ActionButton
                icon={<MdAdd size={25} />}
                label={"Add ITEM"}
                onClick={() => {}}
                forMenuSubcat={true}
              />
            </>
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
