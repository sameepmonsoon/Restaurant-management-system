import { Title } from "@mui/icons-material";
import React from "react";
import {
  EditCategory,
  Icon,
  ItemAmount,
  ItemTitle,
  ItemTitleAmount,
  MenuSubCategoriesDiv,
} from "./MenuSubCategories.style";

import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";

const MenuSubCategories = (props: MenuCategoriesTypes) => {
  const { title, amount, deleteIcon, clicked, editIcon, ...rest } = props;
  return (
    <>
      <MenuSubCategoriesDiv clicked={clicked} {...rest}>
        <ItemTitleAmount>
          <ItemTitle>{title}</ItemTitle>
          <ItemAmount>Rs. {amount}</ItemAmount>
        </ItemTitleAmount>
        {clicked === true ? (
          <EditCategory>
            <Icon>{editIcon}</Icon>
            <Icon>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuSubCategoriesDiv>
    </>
  );
};

export default MenuSubCategories;
