import { LocationOn, Title } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import {
  EditCategory,
  Icon,
  ItemAmount,
  ItemTitle,
  ItemTitleAmount,
  MenuSubCategoriesDiv,
} from "./MenuSubCategories.style";

import { MenuSubCategoriesTypes } from "../../../Types/Components/MenuSubCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";

const MenuSubCategories = (props: MenuSubCategoriesTypes) => {
  const {
    title,
    amount,
    deleteIcon,
    clicked,
    categoryList,
    editIcon,
    visible,
    ...rest
  } = props;

  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<number | null | any>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    console.log("Menu sub category Item edit");
  };
  const handleDelete = () => {
    console.log("Menu  sub category  Item Delete");
  };
  const [click, setClick] = useState(clicked);
  return (
    <>
      <MenuSubCategoriesDiv
        clicked={click}
        {...rest}
        onClick={() => {
          // navigate(`/menu/${visible}`);
          setClick(!click);
        }}
        onMouseEnter={() => {
          setHoveredIndex(`${visible}`);
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
        }}>
        <ItemTitleAmount>
          <ItemTitle>{title}</ItemTitle>
          <ItemAmount>Rs. {visible}</ItemAmount>
        </ItemTitleAmount>
        {hoveredIndex == visible || click === true ? (
          <EditCategory>
            <Icon onClick={handleEdit}>{editIcon}</Icon>
            <Icon onClick={handleDelete}>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuSubCategoriesDiv>
    </>
  );
};

export default MenuSubCategories;
