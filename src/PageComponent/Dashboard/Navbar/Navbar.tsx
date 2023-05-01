import React from "react";

import logo from "../../../../public/vite.svg";
import { VscBellDot } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavbarTitles } from "../../../Types/Components/PageComponentNavbar";
import { siderToggle } from "../../../Pages/states/NavBar.state";
import { RiMenuFoldLine, RiMenuLine } from "react-icons/ri";
import {
  NavbarMainDiv,
  NavbarItemTextElementsArrow,
  NavbarItemIcon,
  NavbarLogoContainer,
  NavbarIconNotification,
  NavbarLogoIcon,
  NavbarItemTextElementOne,
  NavbarItemTextElementThree,
  NabarItemTextContainer,
  NavbarLogoAndDropdown,
} from "./Navbar.styles";
import { Link, useLocation } from "react-router-dom";

function subtitle() {
  const location = useLocation();
  const pathnameMap = {
    "/home/purchase": "Purchase",
    "/home/sales": "Sales",
    "/home/stocks": "Stocks",
    "/report/purchase": "Purchase",
    "/report/sales": "Sales",
    "/report/stocks": "Stocks",
    "/report/profitanalysis": "Profit Analysis",
  };
  return pathnameMap[location.pathname as keyof typeof pathnameMap] || "";
}

function title():
  | "dashboard"
  | "report"
  | "Web Order"
  | "Table"
  | "Customer"
  | "menu"
  | undefined {
  const location = useLocation();
  if (location.pathname.includes("/home")) {
    return "dashboard";
  } else if (location.pathname.includes("/report")) {
    return "report";
  } else if (location.pathname.includes("/weborder")) {
    return "Web Order";
  } else if (location.pathname.includes("/tables")) {
    return "Table";
  } else if (location.pathname.includes("/customer")) {
    return "Customer";
  } else if (location.pathname.includes("/menu")) {
    return "menu";
  }
  return undefined;
}
type titleTypes = {
  dashboard: string;
};
const Navbar = (props: NavbarTitles) => {
  const { navTitle } = props;
  const { openSider, toggleSider } = siderToggle();
  // @ts-ignore
  const currentTitle = title().toLowerCase();
  const titleBasedRoute: { [key: string]: string } = {
    dashboard: "/home",
    table: "/tables/floorFirst",
    customer: "/customer",
    "web order": "/weborder",
    menu: "/menu",
    report: "/report/purchase",
  };
  const setRouteTo = titleBasedRoute[currentTitle] || "/";
  return (
    <>
      <NavbarMainDiv>
        <NavbarItemIcon onClick={toggleSider}>
          {openSider === true ? (
            <RiMenuFoldLine size={25} />
          ) : (
            <RiMenuLine size={25} />
          )}
        </NavbarItemIcon>
        <NabarItemTextContainer>
          <Link
            to={setRouteTo}
            style={{ color: "#090909", textDecoration: "none" }}>
            <NavbarItemTextElementOne>{title()} </NavbarItemTextElementOne>
          </Link>
          {subtitle() !== "" ? (
            <NavbarItemTextElementsArrow>
              <RiArrowRightSLine size={25} />
            </NavbarItemTextElementsArrow>
          ) : null}
          <NavbarItemTextElementThree>{subtitle()}</NavbarItemTextElementThree>
        </NabarItemTextContainer>
        <NavbarLogoContainer openSider={openSider}>
          <NavbarIconNotification>
            <VscBellDot size={20} />
          </NavbarIconNotification>
          <NavbarLogoAndDropdown>
            <NavbarLogoIcon>
              <img src={logo} alt="logo" />
            </NavbarLogoIcon>
            <RiArrowDownSLine size={30} />
          </NavbarLogoAndDropdown>
        </NavbarLogoContainer>
      </NavbarMainDiv>
    </>
  );
};

export default Navbar;
