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
export default function Menu() {
  const [selectCategory, setSelectCategory] = useState(true);
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
          />
        }>
        <MenuSubCategories
          title={"Ramyen"}
          amount={200}
          deleteIcon={<MdDeleteOutline size={25} />}
          editIcon={<HiOutlinePencil size={25} />}
          onClick={() => {
            setSelectCategory(!selectCategory);
          }}
          clicked={selectCategory}
        />

        <Outlet />
      </MenuLayout>
    </>
  );
}
