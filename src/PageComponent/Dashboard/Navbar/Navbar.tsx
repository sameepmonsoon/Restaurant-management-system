import React from "react";
import logo from "../../../../public/vite.svg";
import { FaBars } from "react-icons/fa";
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
  NavbarIconDropdown,
  NavbarItemTextElementOne,
  NavbarItemTextElementThree,
  NabarItemTextContainer,
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
          <NavbarItemTextElementOne>{navTitle}</NavbarItemTextElementOne>
          {arrowIcon === true ? (
            <NavbarItemTextElementsArrow>
              <RiArrowRightSLine size={25} />
            </NavbarItemTextElementsArrow>
          ) : null}
          <NavbarItemTextElementThree>{subtitle()}</NavbarItemTextElementThree>
          {/* for additional submenu of report  */}
          {location.pathname === "/report/purchase/" ? (
            <NavbarItemTextElementsArrow>
              <RiArrowRightSLine size={25} />
            </NavbarItemTextElementsArrow>
          ) : null}
        </NabarItemTextContainer>
        <NavbarLogoContainer>
          <NavbarIconNotification>
            <VscBellDot size={20} />
          </NavbarIconNotification>
          <NavbarLogoIcon>
            <img src={logo} alt="logo" />
          </NavbarLogoIcon>
          <NavbarIconDropdown>
            <RiArrowDownSLine size={30} />
          </NavbarIconDropdown>
        </NavbarLogoContainer>
      </NavbarMainDiv>
    </>
  );
};

export default Navbar;
