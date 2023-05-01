import React from "react";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { ChildrenDiv, LayoutContainerDiv } from "./DashboardLayout.style";
import { DashboardMainDiv } from "./DashboardLayout.style";
import { siderToggle } from "../Pages/states/NavBar.state";
import {
  MenuLayoutCategory,
  MenuLayoutCategoryContent,
  MenuLayoutMainDiv,
  MenuLayoutSubCategory,
  MenuLayoutSubCategoryContent,
  MenuCatSubcatDiv,
  SubcategoryTitle,
} from "./MenuLayout.style";
import ActionButton from "../Components/ActionButton/ActionButton";

const MenuLayout = ({
  categories,
  filter,
  children,
}: {
  children?: JSX.Element | JSX.Element[];
  categories?: JSX.Element | JSX.Element[];
  filter?: JSX.Element | JSX.Element[];
}) => {
  const { openSider } = siderToggle();
  return (
    <>
      <MenuLayoutMainDiv openSider={openSider}>
        {filter}
        <MenuCatSubcatDiv>
          <MenuLayoutCategory>
            <MenuLayoutCategoryContent>{categories}</MenuLayoutCategoryContent>
          </MenuLayoutCategory>
          <MenuLayoutSubCategory>
            <SubcategoryTitle>Sub Category</SubcategoryTitle>
            <MenuLayoutSubCategoryContent>
              {children}
            </MenuLayoutSubCategoryContent>
          </MenuLayoutSubCategory>
        </MenuCatSubcatDiv>
      </MenuLayoutMainDiv>
    </>
  );
};

export default MenuLayout;
