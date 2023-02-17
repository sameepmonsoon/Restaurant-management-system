import React, { useEffect, useState } from "react";
import {
  CategoryTitle,
  EditCategory,
  MenuCategoriesDiv,
  Icon,
  MenuTitleName,
  MenuCategoryMainDIv,
} from "./MenuCategories.style";

import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";
const MenuCategories = (props: MenuCategoriesTypes) => {
  const {
    title,
    deleteIcon,
    editIcon,
    clicked,
    categoryList,

    ...rest
  } = props;
  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    // console.log(categoryData);
  };

  const handleDelete = () => {
    console.log("Menu Item Delete");
  };

  useEffect(() => {
    setCategory(
      category.map((cat: any, index: number) => {
        // @ts-ignore
        if (parseInt(id) === cat.id) {
          cat.active = true;
        } else cat.active = false;
        return cat;
      })
    );
    console.log("inside menu cat", category);
  }, [id]);

  return (
    <>
      <MenuCategoryMainDIv {...rest}>
        <MenuTitleName>Categories</MenuTitleName>

        {categoryList.map((item, idx) => (
          <MenuCategoriesDiv
            clicked={item.active}
            onClick={() => {
              navigate(`/menu/${item.id}`);
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <CategoryTitle key={idx}>{item.category}</CategoryTitle>
            {hoveredIndex === idx || item.active ? (
              <EditCategory>
                <Icon onClick={handleEdit}>{editIcon}</Icon>
                <Icon onClick={handleDelete}>{deleteIcon}</Icon>
              </EditCategory>
            ) : (
              <></>
            )}
          </MenuCategoriesDiv>
        ))}
      </MenuCategoryMainDIv>
    </>
  );
};

export default MenuCategories;
