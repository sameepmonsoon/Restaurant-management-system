import { Icon } from "@mui/material";
import React, { useState, useEffect } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import image from "../../../../public/assets/KBLimage.jpg";
import { MenuSubCategoryItemTypes } from "../../../Types/Components/MenuSubCategoryItemTypes";
import ActionButton from "../../ActionButton/ActionButton";
import MenuSubCategories from "../MenuSubCategories/MenuSubCategories";
import {
  MenuSubCatItemDiv,
  ItemTitle,
  ItemContentDivContainer,
} from "./MenuSubCategoryItem.style";

const MenuSubCategoryItem = (props: MenuSubCategoryItemTypes) => {
  const { subcatParentId, itemName, subCatItemList, subCatItemImage } = props;
  const [category, setCategory] = useState(subCatItemList);
  const [hoveredIndex, setHoveredIndex] = useState();

  // useEffect(() => {
  //   setCategory(category.map((item,idx)=>{
  //     if
  //   }))
  // }, []);
  return (
    <>
      <MenuSubCatItemDiv>
        <ItemTitle>Items</ItemTitle>
        <ItemContentDivContainer>
          <MenuSubCategories
            title={itemName}
            amount={1}
            deleteIcon={<MdDeleteOutline size={25} />}
            editIcon={<HiOutlinePencil size={25} />}
            onClick={() => {
              console.log("submenu item", subcatParentId);
              // setSelectSubCategory(!selectSubCategory);
            }}
            clicked={true}
            subcatId={""}
            categoryList={[]}
            key={subcatParentId}
            subCatImage={subCatItemImage}
          />
          <ActionButton
            icon={<MdAdd size={25} />}
            label={"Add ITEM"}
            onClick={() => {}}
            forMenuSubcat={true}
          />
        </ItemContentDivContainer>
      </MenuSubCatItemDiv>
    </>
  );
};

export default MenuSubCategoryItem;
