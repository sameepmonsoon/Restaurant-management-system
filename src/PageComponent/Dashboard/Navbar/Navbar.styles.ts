import styled from "@emotion/styled";

// main navbar div
export const NavbarMainDiv = styled("div")`
  background: #ffffff;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 15px;
  height: 80px;
`;

//navbar bar icon-left
export const NavbarItemIcon = styled("div")`
  position: relative;
  left: -8px;
  top: -1px;
`;

//navbar text--dashboard>
export const NabarItemTextContainer = styled("div")`
  line-height: 19px;
  display: flex;
  flex: 5;
  height: 19px;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10;
`;

// for items inside nabar text like dashboard purchase
export const NavbarItemTextElementOne = styled("div")`
  padding-left: 2%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #313131;
  text-transform: uppercase;
`;

//for items inside navbar --item arrow // for //only visible when clicked
export const NavbarItemTextElementsArrow = styled("span")`
  position: relative;
  bottom: 10%;
  margin-left: 10px;
  color: #7d7c7c;
`;

// for item inside navbar text after selection
export const NavbarItemTextElementThree = styled("div")`
  align-items: center;
  padding-left: 1%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #313131;
  text-transform: uppercase;
`;

//navbar--inner logo Container (bell,image,dropdown)
export const NavbarLogoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
  flex: 1;
`;

//navbar notification(bell)
export const NavbarIconNotification = styled("div")`
  color: #7d7c7c;
  margin-right: 25px;
`;

//navbar--inside--logo(image,dropdown)

export const NavbarLogoAndDropdown = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const NavbarLogoIcon = styled("image")`
  border-radius: 50%;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  background-origin: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
