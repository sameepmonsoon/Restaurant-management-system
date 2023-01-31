import styled from "@emotion/styled";
import Drawer from "react-modern-drawer";

export const DrawerItem = styled(Drawer)`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  box-shadow: 1px 10px 25px rgba(0, 0, 0, 0.47);
  border-radius: 30px 0px 0px 30px;
  input,
  select {
    padding-left: 1em;
    padding-right: 1em;
    width: 397.49px;
    height: 42px;
    background: #fafafa;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
  }
`;

export const DrawerMainDiv = styled("form")`
  height: 900px;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const DrawerTitleDiv = styled("div")`
  order: 1;
  position: relative;
  display: flex;
  color: #0000;
  padding-bottom: 20px;
  align-items: center;
  top: 30px;
  justify-content: space-between;
  width: 400px;
  height: 39px;
  font-family: "Inter";
  font-style: normal;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

export const DrawerTitleDivTitle = styled("div")`
  margin-left: 20px;
  width: 145px;
  height: 19px;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  line-height: 19px;
  text-transform: uppercase;
  color: #000000;
`;

export const DrawerTitleCancelButton = styled("div")`
  color: #000000;
  margin-right: 20px;
  border: 0px;
  background: transparent;
`;

export const DrawerInputContentDiv = styled("div")`
  order: 2;
  display: flex;
  height: 700px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  button[type="submit"] {
    position: relative;
    order: 1;
    text-transform: capitalize;
    align-self: flex-end;
    width: 185px;
    height: 45px;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.31);
    border-radius: 5px;
  }

  button[type="reset"] {
    text-transform: capitalize;
    order: 2;
    width: 185px;
    height: 45px;
    color: #313131;
    background: #fafafa;
    border: 1px solid #9a9a9a;
    border-radius: 5px;
  }
  button[type="reset"]:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
`;

export const DrawerButtonDiv = styled("div")`
  order: 3;
  display: flex;
  margin-top: 30px;
  flex-flow: row nowrap;
  column-gap: 27px;
`;

export const DrawerButton = styled("button")`
  background-color: transparent;
  border: 1px solid #eaeaea;
  color: #5f7161;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  font-size: 15px;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    color: #424242;
    transition: background-color 0.5s ease;
  }
`;
