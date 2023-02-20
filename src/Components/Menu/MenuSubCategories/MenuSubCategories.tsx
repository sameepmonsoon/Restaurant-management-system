import { LocationOn, Title } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import {
  EditCategory,
  Icon,
  ItemAmount,
  ItemTitle,
  ItemTitleAmount,
  MenuSubcatMainDiv,
  MenuSubCategoriesDiv,
} from "./MenuSubCategories.style";

import { MenuSubCategoriesTypes } from "../../../Types/Components/MenuSubCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";
import image from "../../../../public/assets/KBLimage.jpg";
const MenuSubCategories = (props: MenuSubCategoriesTypes) => {
  const {
    title,
    amount,
    deleteIcon,
    clicked,
    categoryList,
    editIcon,
    subcatId,
    active,
    ...rest
  } = props;

  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<number | null | any>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    // console.log("Menu sub category Item edit");
  };
  const handleDelete = () => {
    // console.log("Menu  sub category  Item Delete");
  };

  const [click, setClick] = useState<any>(false);
  useEffect(() => {
    setClick(() => {
      if (clicked === subcatId) {
        console.log(clicked, subcatId);
        return !click;
      } else click;
    });

    return () => setClick(false);
  }, [clicked]);
  return (
    <MenuSubcatMainDiv {...rest}>
      <MenuSubCategoriesDiv
        clicked={click}
        {...rest}
        onClick={() => {
          // navigate(`/menu/${visible}`);
        }}
        onMouseEnter={() => {
          setHoveredIndex(`${subcatId}`);
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
        }}>
        <img src={image} alt="Sub Category" />
        {/* <ItemTitleAmount>
          <ItemAmount>Rs. {visible}</ItemAmount>
        </ItemTitleAmount> */}
        {hoveredIndex == subcatId || click === true ? (
          <EditCategory>
            <Icon onClick={handleEdit}>{editIcon}</Icon>
            <Icon onClick={handleDelete}>{deleteIcon}</Icon>
          </EditCategory>
        ) : (
          <></>
        )}
      </MenuSubCategoriesDiv>
      <ItemTitle>{title}</ItemTitle>
    </MenuSubcatMainDiv>
  );
};

export default MenuSubCategories;
