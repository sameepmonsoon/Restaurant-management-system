import { Icon } from "@mui/material";
import React from "react";
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
  const { subcatParentId, itemName } = props;
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
              console.log("fas");
              // setSelectSubCategory(!selectSubCategory);
            }}
            clicked={true}
            subcatId={""}
            categoryList={[]}
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
