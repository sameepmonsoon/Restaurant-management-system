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

function subtitle() {
  if (location.pathname === "/home/purchase") {
    return "Purchase";
  } else if (location.pathname === "/home/sales") {
    return "Sales";
  } else if (location.pathname === "/home/stocks") {
    return "Stocks";
  } else if (location.pathname === "/report/purchase") {
    return "Purchase";
  } else if (location.pathname === "/report/sales") {
    return "sales";
  }
}
function title() {
  if (location.pathname.includes("/home")) {
    return "Dashboard";
  } else if (location.pathname.includes("/report")) {
    return "Report";
  } else if (location.pathname.includes("/weborder")) {
    return "Web Order";
  } else if (location.pathname.includes("/table")) {
    return "Table";
  } else if (location.pathname.includes("/customer")) {
    return "Customer";
  } else if (location.pathname.includes("/menu")) {
    return "menu";
  }
}

const Navbar = (props: NavbarTitles) => {
  const { navTitle, arrowIcon } = props;
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
          {arrowIcon === true ? (
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
