import React from "react";
import {
  CategoryTitle,
  EditCategory,
  MenuCategoriesDiv,
  Icon,
} from "./MenuCategories.style";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";

const MenuCategories = (props: MenuCategoriesTypes) => {
  const { title, deleteIcon, editIcon, clicked, ...rest } = props;
  return (
    <>
      <MenuCategoriesDiv clicked={clicked} {...rest}>
        <CategoryTitle>{title}</CategoryTitle>
        {clicked === true ? (
          <EditCategory>
            <Icon>{editIcon}</Icon>
            <Icon>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuCategoriesDiv>
      <MenuCategoriesDiv clicked={clicked} {...rest}>
        <CategoryTitle>{title}</CategoryTitle>
        {clicked === true ? (
          <EditCategory>
            <Icon>{editIcon}</Icon>
            <Icon>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuCategoriesDiv>
      <MenuCategoriesDiv clicked={clicked} {...rest}>
        <CategoryTitle>{title}</CategoryTitle>
        {clicked === true ? (
          <EditCategory>
            <Icon>{editIcon}</Icon>
            <Icon>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuCategoriesDiv>
    </>
  );
};

export default MenuCategories;
