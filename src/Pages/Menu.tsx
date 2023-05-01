import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Filters from "../Components/Filters/Filters";
import MenuCategories from "../Components/Menu/MenuCategories/MenuCategories";
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
import { useSubCategoryIdStore } from "../Pages/states/MenuCategory.state";
import { toast } from "react-toastify";

export default function Menu() {
  const [category, setCategory] = useState<any>([]);
  const [iconVisible, setIconVisible] = useState<any>();
  const [selectCategory, setSelectCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iconSubVisible, setIconSubVisible] = useState<any>();
  const [selectSubCategory, setSelectSubCategory] = useState(true);
  const { openSider } = siderToggle();
  const { drawerSubCatId, setDrawerSubCatId } = useSubCategoryIdStore();
  const navigate = useNavigate();
  const [fetchCategory, setFetchCategory] = useState<Boolean>();
  useEffect(() => {
    setIsLoading(true);
    navigate("/menu/0");
    // ON SUCCESS CALL
    // Take id of fist category

    // id of chicken category ---intended to display the sub categories on initial render
    // setDrawerSubCatId("80ce259c-2ece-4de1-b685-35ad3f25c2b7");

    HTTPMethods.getMenu("/category/readallcategory?page=1&offset=40")
      .then(async (res: any) => {
        setCategory(res.data.payload.category);
      })
      .catch(async (err) => {
        setIsLoading(true);
        setTimeout(() => {
          toast.error("Cannot read Category", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 2000,
            position: "bottom-right",
            toastId: "info1",
          });
        }, 300);
      })
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      });

    // API CALL
  }, [fetchCategory]);

  // const uniqueCategory = (x: any, i: any, a: any) => a.indexOf(x) === i;

  // to sort the dish category in alphabeical order

  let filteredCat = [];
  let data = category.map((item: any) =>
    item.category_name.toLocaleLowerCase()
  );
  filteredCat = category
    .filter((item: any, idx: any) => category.indexOf(item) === idx)

    .sort(function (a: any, b: any) {
      let x = a.category_name.toLowerCase();
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
                  categoryList={filteredCat}
                  onFetchCategory={setFetchCategory}
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
