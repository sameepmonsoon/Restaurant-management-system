import { LocationOn, Title } from "@mui/icons-material";
import React from "react";
import {
  EditCategory,
  Icon,
  ItemAmount,
  ItemTitle,
  ItemTitleAmount,
  MenuSubCategoriesDiv,
} from "./MenuSubCategories.style";
import { useMenuCategory } from "../../../Pages/states/MenuCategory.state";

import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";

const MenuSubCategories = (props: MenuCategoriesTypes) => {
  const { setCategoryData, categoryData } = useMenuCategory();
  const { title, amount, deleteIcon, clicked, editIcon, visible, ...rest } =
    props;
  const handleEdit = () => {
    console.log("Menu sub category Item edit");
  };
  const handleDelete = () => {
    console.log("Menu  sub category  Item Delete");
  };

  return (
    <>
      {categoryData === "korean" && (
        <MenuSubCategoriesDiv clicked={clicked} {...rest}>
          <ItemTitleAmount>
            <ItemTitle>{title}</ItemTitle>
            <ItemAmount>Rs. {amount}</ItemAmount>
          </ItemTitleAmount>
          {visible === true || clicked === true ? (
            <EditCategory>
              <Icon onClick={handleEdit}>{editIcon}</Icon>
              <Icon onClick={handleDelete}>{deleteIcon}</Icon>
            </EditCategory>
          ) : (
            <></>
          )}
        </MenuSubCategoriesDiv>
      )}
    </>
  );
};

export default MenuSubCategories;
