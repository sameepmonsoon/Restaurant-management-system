import React from "react";
import {
  CategoryTitle,
  EditCategory,
  MenuCategoriesDiv,
  Icon,
} from "./MenuCategories.style";

import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";
import { useMenuCategory } from "../../../Pages/states/MenuCategory.state";
const MenuCategories = (props: MenuCategoriesTypes) => {
  const {
    title,
    deleteIcon,
    editIcon,
    clicked,
    categoryList,
    visible,

    ...rest
  } = props;
  const { setCategoryData, categoryData } = useMenuCategory();

  const handleEdit = () => {
    console.log(categoryData);
  };
  const handleDelete = () => {
    console.log("Menu Item Delete");
  };

  return (
    <div {...rest}>
      {categoryList
        // .filter((item, id) => item.cat === "korean")
        .map((item, id) => (
          <MenuCategoriesDiv
            clicked={clicked}
            onClick={() => setCategoryData(item.cat)}>
            <CategoryTitle key={id}>{item.cat}</CategoryTitle>
            {visible || clicked === true ? (
              <EditCategory>
                <Icon onClick={handleEdit}>{editIcon}</Icon>
                <Icon onClick={handleDelete}>{deleteIcon}</Icon>
              </EditCategory>
            ) : (
              <></>
            )}
          </MenuCategoriesDiv>
        ))}
    </div>
  );
};

export default MenuCategories;
