import React from "react";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { ChildrenDiv, LayoutContainerDiv } from "./DashboardLayout.style";
import { DashboardMainDiv } from "./DashboardLayout.style";
import { siderToggle } from "../Pages/states/NavBar.state";

export default function TableLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { openSider, toggleSider } = siderToggle();
  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Report"}
            navbarCardName={"Purchase"}
            arrowIcon={true}
            onClick={() => {}}
          />

          <ChildrenDiv>{children}</ChildrenDiv>
        </LayoutContainerDiv>
      </DashboardMainDiv>
    </>
  );
}
