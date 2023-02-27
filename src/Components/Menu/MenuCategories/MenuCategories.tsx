import React, { useEffect, useState, createContext } from "react";
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
import Pagination from "../../../PageComponent/Pagination/Pagination";

export const MyCategoryIdContext = createContext<any>(null);
const MenuCategories = (props: MenuCategoriesTypes) => {
  const { title, deleteIcon, editIcon, clicked, categoryList, ...rest } = props;
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();

  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    // console.log(categoryData);
  };

  const handleDelete = () => {
    // console.log("Menu Item Delete");
  };

  useEffect(() => {
    setCategory(
      category.map((cat: any, index: number) => {
        // @ts-ignore
        if (parseInt(id) === index) {
          cat.active = true;
        } else cat.active = false;
        return cat;
      })
    );
  }, [id]);
  return (
    <>
      {/* <MyCategoryIdContext.Provider value={"green"}>
        <Pagination />
      </MyCategoryIdContext.Provider> */}
      <MenuCategoryMainDIv {...rest}>
        <MenuTitleName>Categories</MenuTitleName>

        {category.map((item, idx) => (
          <MenuCategoriesDiv
            clicked={item.active}
            onClick={() => {
              navigate(`/menu/${idx}`);
              setDrawerSubCatId(item.category_id);
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
