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
import { toast } from "react-toastify";
import AlertModal from "../../AlertDeleteModal/AlertModal";

export const MyCategoryIdContext = createContext<any>(null);
const MenuCategories = (props: MenuCategoriesTypes) => {
  const { title, deleteIcon, editIcon, clicked, categoryList, ...rest } = props;
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const [currentSubcatId, setCurrentSubcatId] = useState<string | any>("");
  const [category, setCategory] = useState(categoryList);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    // console.log(categoryData);
  };

  // delte category
  function handleDelete(subCatId: any) {
    HTTPMethods.deleteMenu(`/category/deletecategory/`, {})
      .then(async (res) => {
        toast.success("Category deleted Successfully.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      })
      .catch(async (err) => {
        toast.error("Selected Category cannot be deleted.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1500,
          position: "bottom-right",
          toastId: "info1",
        });
        setTimeout(() => {
          setOpenModal(false);
        }, 3000);
      });
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

  useEffect(() => {
    if (openModal && deleteItem) {
      handleDelete(deleteCategoryId);
      setDeleteItem(false);
    }
  }, [openModal, deleteItem]);
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
                <Icon
                  onClick={() => {
                    setOpenModal(true);
                    // @ts-ignore
                    setDeleteCategoryId(item.category_id);
                  }}>
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
      {openModal && (
        <AlertModal
          title={"Are you sure you want to delete?"}
          setOpenModal={setOpenModal}
          setDeleteItem={setDeleteItem}
          deleteItem={deleteItem}
        />
      )}
    </>
  );
};

export default MenuCategories;
