import styled from "@emotion/styled";
import { Link } from "react-router-dom";
type ActiveSider = {
  active: boolean;
};
export const ReportDiv = styled("div")<ActiveSider>`
  div {
    background-color: ${({ active }) =>
      active === true ? "#313131" : "#ffffff"};
    color: ${({ active }) => (active === true ? "#ffffff" : "#9a9a9a")};
  }
  width: 100%;
`;

export const DropdownHeader = styled("div")<ActiveSider>`
  color: white;
  border: ${({ active }) => (active === true ? "1 px solid #00020f" : "0")};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  overflow: hidden;
  div {
    padding: 0;
    color: ${({ active }) => (active === true ? "#ffffff" : "#9a9a9a")};
  }
  &:hover {
    div {
      color: ${({ active }) => (active === true ? "#ffffff" : "#313131")};
    }
  }
`;

export const ReportInnerDiv = styled("div")<ActiveSider>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0px;
  margin-left: 24px;
  gap: 16px;
  transition: all 300ms ease;
  height: 50.95px;
  width: 100%;

  & {
    transition: all 300ms ease;
    color: ${({ active }) => (active != true ? "#313131" : "0")};
  }
  &:hover {
    column-gap: ${({ active }) => (active === true ? "16px" : "21px;")};
  }
`;
export const DropDownDiv = styled("div")<ActiveSider>`
  display: flex;
  align-items: center;
  width: 30px;
`;
export const DropDownLabelDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;
export const DropDownIcon = styled("span")`
  max-width: 30px;
  max-height: 30px;
`;
export const DropDownText = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  text-transform: capitalize;
  min-width: 60px;
  max-width: 90px;
`;

export const DropDownArrow = styled("div")``;

export const DropDownOptions = styled("ul")`
  color: #000;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1px 0 5px 20%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
`;

export const ReportLink = styled(Link)`
  text-decoration: none;
  color: #000;

  li.active {
    color: red;
  }
  li {
    padding: 7px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #313131;
    transition: all 400ms ease;
  }
  li:hover {
    color: #000;
    padding-left: 5px;
  }
`;
