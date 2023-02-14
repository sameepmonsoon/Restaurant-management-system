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
  Title,
} from "./MenuLayout.style";
import ActionButton from "../Components/ActionButton/ActionButton";

const MenuLayout = ({
  categories,
  filter,
  children,
}: {
  children: JSX.Element | JSX.Element[];
  categories: JSX.Element | JSX.Element[];
  filter: JSX.Element | JSX.Element[];
}) => {
  const { openSider } = siderToggle();
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
          <ChildrenDiv>
            {filter}
            <MenuLayoutMainDiv>
              <MenuLayoutCategory>
                <Title>Categories</Title>
                <MenuLayoutCategoryContent>
                  {categories}
                  <ActionButton
                    icon={"+"}
                    label={"Add Sub category"}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {}}
                  />
                </MenuLayoutCategoryContent>
              </MenuLayoutCategory>
              <MenuLayoutSubCategory>
                <Title>sub categories</Title>
                <MenuLayoutSubCategoryContent>
                  {children}
                  <ActionButton
                    icon={"+"}
                    label={"Add Sub category"}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {}}
                  />
                </MenuLayoutSubCategoryContent>
              </MenuLayoutSubCategory>
            </MenuLayoutMainDiv>
            <br />
            <br />
          </ChildrenDiv>
        </LayoutContainerDiv>
      </DashboardMainDiv>
    </>
  );
};

export default MenuLayout;
