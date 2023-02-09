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
import { useLocation } from "react-router-dom";

function subtitle() {
  const location = useLocation()
  const pathnameMap = {
    "/home/purchase" : "Purchase",
    "/home/sales": "Sales",
    "/tables/floorFirst": "First floor",
    "/tables/floorSecond": "second floor",
    "/report/purchase": "Purchase",
    "/report/sales": "Sales",
    "/report/stocks": "Stocks",
    "/report/profitanalysis": "Profit Analysis"
  }
  return pathnameMap[location.pathname as keyof typeof pathnameMap] || "";

}

function title() {
  if (location.pathname.includes("/home")) {
    return "Dashboard";
  } else if (location.pathname.includes("/report")) {
    return "Report";
  } else if (location.pathname.includes("/weborder")) {
    return "Web Order";
  } else if (location.pathname.includes("/tables")) {
    return "Table";
  } else if (location.pathname.includes("/customer")) {
    return "Customer";
  } else if (location.pathname.includes("/menu")) {
    return "menu  ";
  }
}

const Navbar = (props: NavbarTitles) => {
  const { navTitle } = props;
  const { openSider, toggleSider } = siderToggle();

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
          <NavbarItemTextElementOne>{title()}</NavbarItemTextElementOne>
          {subtitle()!=="" ? (
            <NavbarItemTextElementsArrow>
              <RiArrowRightSLine size={25} />
            </NavbarItemTextElementsArrow>
          ) : null}
          <NavbarItemTextElementThree>{subtitle()}</NavbarItemTextElementThree>
          
        </NabarItemTextContainer>
        <NavbarLogoContainer>
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
