import React from "react";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { ChildrenDiv, LayoutContainerDiv } from "./DashboardLayout.style";
import { DashboardMainDiv } from "./DashboardLayout.style";
import { siderToggle } from "../Pages/states/NavBar.state";
import DrawerC from "../PageComponent/Dashboard/Drawer/Drawer";
import { useDrawer } from "../Pages/states/Drawer.state";
import FloorTableForm from "../PageComponent/forms/FloorTableForm";
import {
  TableCheck,
  TableCheckText,
  TableDiv,
  TableMain,
} from "./TableLayout.style";
import { BsCircleFill } from "react-icons/bs";
import ActionButton from "../Components/ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
export default function TableLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { openSider, toggleSider } = siderToggle();
  const { open, setDrawerData, toggleDrawer } = useDrawer();
  function closeDrawer() {
    console.log("table button Drawer");
    setDrawerData({});
    console.log("outside table button Drawer");
    toggleDrawer();
  }

  function openDrawer() {
    console.log("inside table  drawer", open);
    toggleDrawer();
  }
  function manageForm() {
    return <FloorTableForm />;
  }

  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Report"}
            navbarCardName={"Purchase"}
            // arrowIcon={true}
            onClick={() => {}}
          />
          <ChildrenDiv>
            <TableMain>
              <TableCheck>
                <BsCircleFill />
                <TableCheckText>Order on Table</TableCheckText>
              </TableCheck>
              <TableDiv>
                {children}
                <ActionButton
                  icon={<MdAdd size={25} />}
                  label={"Add Table"}
                  disableColor={location.pathname.includes("tables")}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    openDrawer();
                  }}
                />
              </TableDiv>
            </TableMain>
          </ChildrenDiv>
        </LayoutContainerDiv>

        <DrawerC
          cardtitle={"New Table"}
          open={open}
          closeDrawer={() => {
            closeDrawer();
          }}>
          {manageForm()}
        </DrawerC>
      </DashboardMainDiv>
    </>
  );
}
