import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ComingSoon from "../Components/comingSoon/ComingSoon";
import Filters from "../Components/Filters/Filters";
import MenuCategories from "../Components/Menu/MenuCategories/MenuCategories";
import MenuSubCategories from "../Components/Menu/MenuSubCategories/MenuSubCategories";
import MenuLayout from "../Layout/MenuLayout";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import {
  DashboardMainDiv,
  LayoutContainerDiv,
} from "../Layout/DashboardLayout.style";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import { siderToggle } from "./states/NavBar.state";
import { HTTPMethods } from "../Utils/HTTPMock";

export default function Menu() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // ON SUCCESS CALL
      // Take id of fist category
      navigate("/menu/1");
      // console.log("menu");
    }, 2500);

    HTTPMethods.getMenu("/category/readallcategory")
      .then(async (res: any) => {
        console.log("data received from cat", res.data.payload);
        setCategory(res.data.payload.category);
        console.log(category);
      })
      .catch(async (err) => {
        console.log(err);
      });
    // API CALL
  }, [1]);

  const [iconVisible, setIconVisible] = useState<any>();
  const [selectCategory, setSelectCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iconSubVisible, setIconSubVisible] = useState<any>();
  const [selectSubCategory, setSelectSubCategory] = useState(true);
  const { openSider } = siderToggle();

  const navigate = useNavigate();

  // const uniqueCategory = (x: any, i: any, a: any) => a.indexOf(x) === i;

  // to sort the dish category in alphabeical order

  let filteredCat = [];
  // @ts-ignore
  let data = category.map((item) => item.category_name.toLocaleLowerCase());
  filteredCat = category
    .filter((item, idx) => category.indexOf(item) === idx)
    .sort(function (a, b) {
      // @ts-ignore

      let x = a.category_name.toLowerCase();
      // @ts-ignore

      let y = b.category_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  // .filter((item) => item.category === item.category)
  // .map((item, id) => item.category.toLowerCase());

  // console.log("inside menu filter cat cat", data);
  // console.log("inside category list", categoryList);

  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Menu"}
            navbarCardName={"All Menu"}
            onClick={() => {}}
          />
          {isLoading ? (
            <div>loading.....</div>
          ) : (
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
                  onClick={() => {}}
                  categoryList={filteredCat}
                />
              }>
              <Outlet />
            </MenuLayout>
          )}
        </LayoutContainerDiv>
      </DashboardMainDiv>
    </>
  );
}
