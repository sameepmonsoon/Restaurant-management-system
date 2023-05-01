import React from "react";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { ChildrenDiv, LayoutContainerDiv } from "./DashboardLayout.style";
import { DashboardMainDiv } from "./DashboardLayout.style";
import { siderToggle } from "../Pages/states/NavBar.state";

const WebOrderLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
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
          <ChildrenDiv>{children}</ChildrenDiv>
        </LayoutContainerDiv>
      </DashboardMainDiv>
    </>
  );
};

export default WebOrderLayout;
