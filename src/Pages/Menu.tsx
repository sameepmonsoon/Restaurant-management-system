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
export default function Menu() {
  const [iconVisible, setIconVisible] = useState<any>();
  const [selectCategory, setSelectCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iconSubVisible, setIconSubVisible] = useState<any>();
  const [selectSubCategory, setSelectSubCategory] = useState(true);
  const { openSider } = siderToggle();
  const navigate = useNavigate();

  const uniqueCategory = (x: any, i: any, a: any) => a.indexOf(x) === i;

  let filteredCat = [];
  let data = categoryList.map((item) => item.category.toLocaleLowerCase());
  filteredCat = categoryList
    .filter((item, idx) => categoryList.indexOf(item) === idx)
    .sort(function (a, b) {
      let x = a.category.toLowerCase();
      let y = b.category.toLowerCase();
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

  console.log("inside menu filter cat cat", data);
  // console.log("inside category list", categoryList);
  const [category, setCategory] = useState(categoryList);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // ON SUCCESS CALL
      // Take id of fist category
      navigate("/menu/1");
      // console.log("menu");
    }, 2500);
    // API CALL
  }, []);

  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Menu"}
            navbarCardName={"All Menu"}
            // arrowIcon={true}
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
                  clicked={selectCategory}
                  categoryList={filteredCat}
                />
              }>
              <Outlet />
            </MenuLayout>
          )}

          {/* <Outlet /> */}
          {/* <ChildrenDiv>
            {filter}
            <MenuLayoutMainDiv>
              <MenuLayoutCategory>
                <Title>Categories</Title>
                <MenuLayoutCategoryContent>
                  {categories}
                </MenuLayoutCategoryContent>
              </MenuLayoutCategory>
              <MenuLayoutSubCategory>
                <Title>sub categories</Title>
                <MenuLayoutSubCategoryContent>
                  {children}
                </MenuLayoutSubCategoryContent>
              </MenuLayoutSubCategory>
            </MenuLayoutMainDiv>
            <br />
            <br />
          </ChildrenDiv> */}
        </LayoutContainerDiv>
      </DashboardMainDiv>
    </>
  );
}

const categoryList = [
  { category: "Special Dish", subcategory: "ramyen", active: false, id: 1 },
  { category: "Special Dish", subcategory: "ramyen", active: false, id: 11 },
  { category: "Basic Korean", subcategory: "dosa", active: false, id: 2 },
  { category: "Side Dish", subcategory: "daal vaat", active: false, id: 3 },
  { category: "Breakfast", subcategory: "ramyen", active: false, id: 4 },
  { category: "Appetizers", subcategory: "gimbap", active: false, id: 5 },
  { category: "Hard Drinks", subcategory: "noodles", active: false, id: 6 },
  { category: "Soft Drinks", subcategory: "chowmein", active: false, id: 7 },
  { category: "japanese", subcategory: "soba", active: false, id: 8 },
  { category: "JAPANESE", subcategory: "wine", active: false, id: 9 },
  { category: "CHINESE", subcategory: "eggs", active: false, id: 10 },
  { category: "JAPANese", subcategory: "wine", active: false, id: 11 },
  { category: "CHInese", subcategory: "eggs", active: false, id: 12 },
];
