import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import ComingSoon from "../Components/comingSoon/ComingSoon";
import Filters from "../Components/Filters/Filters";
import MenuCategories from "../Components/Menu/MenuCategories/MenuCategories";
import MenuSubCategories from "../Components/Menu/MenuSubCategories/MenuSubCategories";
import MenuLayout from "../Layout/MenuLayout";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { useMenuCategory } from "./states/MenuCategory.state";
export default function Menu() {
  const [iconVisible, setIconVisible] = useState<any>();
  const [selectCategory, setSelectCategory] = useState(false);

  const [iconSubVisible, setIconSubVisible] = useState<any>();
  const [selectSubCategory, setSelectSubCategory] = useState(false);
  const { setCategoryData, categoryData } = useMenuCategory();
  const category = [
    { cat: "korean", subcat: "ramyen" },
    { cat: "indian", subcat: "dosa" },
    { cat: "thakali", subcat: "daal vaat" },
    { cat: "Korean", subcat: "ramyen" },
    { cat: "Korean", subcat: "ramyen" },
    { cat: "Korean", subcat: "ramyen" },
  ];
  const onmouseover = () => {
    setIconVisible(true);
  };

  const onMouseLeave = () => {
    setIconVisible(false);
  };
  return (
    <>
      <MenuLayout
        filter={
          <Filters
            title={"a"}
            icon={<FiSearch size={20} />}
            dateIcon={""}
            statusIcon={""}
          />
        }
        categories={
          <MenuCategories
            title={"Special Dish"}
            amount={200}
            deleteIcon={<MdDeleteOutline size={25} />}
            editIcon={<HiOutlinePencil size={25} />}
            onClick={() => {
              setSelectCategory(!selectCategory);
            }}
            clicked={selectCategory}
            onMouseOver={onmouseover}
            onMouseLeave={onMouseLeave}
            visible={iconVisible}
            categoryList={category}
          />
        }>
        <MenuSubCategories
          title={"Ramyen"}
          amount={200}
          deleteIcon={<MdDeleteOutline size={25} />}
          editIcon={<HiOutlinePencil size={25} />}
          onClick={() => {
            setSelectSubCategory(!selectSubCategory);
          }}
          clicked={selectSubCategory}
          onMouseOver={() => setIconSubVisible(true)}
          onMouseLeave={() => setIconSubVisible(false)}
          visible={iconSubVisible}
          categoryList={[
            { cat: "Korean", subcat: "ramyen" },
            { cat: "indian", subcat: "dosa" },
            { cat: "thakali", subcat: "daal vaat" },
          ]}
        />

        <Outlet />
      </MenuLayout>
    </>
  );
}
