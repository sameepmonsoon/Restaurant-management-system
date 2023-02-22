import React, { useEffect, useState } from "react";
import {
  CategoryTitle,
  EditCategory,
  MenuCategoriesDiv,
  Icon,
  MenuTitleName,
  MenuCategoryMainDIv,
} from "./MenuCategories.style";
import { useSubCategoryIdStore } from "../../../Pages/states/MenuCategory.state";
import { MenuCategoriesTypes } from "../../../Types/Components/MenuCategoriesTypes";
import { useNavigate, useParams } from "react-router-dom";
import ActionButton from "../../ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
const MenuCategories = (props: MenuCategoriesTypes) => {
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const { title, deleteIcon, editIcon, clicked, categoryList, ...rest } = props;
  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const uniqueCategory = (x: any, i: any, a: any) => a.indexOf(x) === i;
  const handleEdit = () => {
    // console.log(categoryData);
  };

  const handleDelete = () => {
    // console.log("Menu Item Delete");
  };

  useEffect(() => {
    console.log("inside categoryList ", category);
    setCategory(
      category.map((cat: any, index: number) => {
        // @ts-ignore
        if (parseInt(id) === index) {
          cat.active = true;
        } else cat.active = false;
        return cat;
      })
    );
    console.log("menu id received from params", id);
  }, [id]);
  return (
    <>
      <MenuCategoryMainDIv {...rest}>
        <MenuTitleName>Categories</MenuTitleName>

        {categoryList.map((item, idx) => (
          <MenuCategoriesDiv
            clicked={item.active}
            onClick={() => {
              navigate(`/menu/${idx}`);
              // @ts-ignore
              setDrawerSubCatId(item.category_id);
              // @ts-ignore
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <CategoryTitle key={idx}>{item.category_name}</CategoryTitle>
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
        <ActionButton
          icon={<MdAdd size={25} />}
          label={"add category"}
          onClick={() => {}}
          forMenuCat={true}
        />
      </MenuCategoryMainDIv>
    </>
  );
};

export default MenuCategories;
