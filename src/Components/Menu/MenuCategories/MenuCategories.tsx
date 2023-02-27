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
import { HTTPMethods } from "../../../Utils/HTTPMock";

export const MyCategoryIdContext = createContext<any>(null);
const MenuCategories = (props: MenuCategoriesTypes) => {
  const { title, deleteIcon, editIcon, clicked, categoryList, ...rest } = props;
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const [currentSubcatId, setCurrentSubcatId] = useState<string | any>("");
  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    // console.log(categoryData);
  };

  // delte category
  function handleDelete(subCatID: any) {
    alert(subCatID);
    HTTPMethods.deleteMenu(`/category/deletecategory/`, {})
      .then(async (res) => console.log("successfully deleted"))
      .catch(async (err) => console.log("error while deleting"));
  }

  // add new category
  const addCategory = () => {
    HTTPMethods.postMenu("category/addcategory", {}).then(async (res: any) =>
      alert(res)
    );
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
                <Icon onClick={() => handleDelete(item.category_id)}>
                  {deleteIcon}
                </Icon>
              </EditCategory>
            ) : (
              <></>
            )}
          </MenuCategoriesDiv>
        ))}
        <ActionButton
          icon={<MdAdd size={25} />}
          label={"add category"}
          onClick={addCategory}
          forMenuCat={true}
        />
      </MenuCategoryMainDIv>
    </>
  );
};

export default MenuCategories;
