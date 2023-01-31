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
`;

export const ReportInnerDiv = styled("div")<ActiveSider>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  padding-left: 0px;
  transition: all 300ms ease;
  height: 50.95px;
  &:hover {
    margin-left: ${({ active }) => (active === true ? "0" : "1rem")};
    div {
      color: ${({ active }) => (active != true ? "#313131" : "0")};
    }
  }
`;
export const DropDownDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 19px;
  align-items: center;
`;
export const DropDownIcon = styled("span")``;
export const DropDownText = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  text-transform: capitalize;
`;

export const DropDownArrow = styled("div")``;

export const DropDownOptions = styled("ul")`
  color: #000;
  width: 100%;
  height: 160px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3px 0 5px 20%;
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #313131;
    transition: all 300ms ease;
  }
  li:hover {
    color: #000;
    margin-left: 1rem;
  }
`;
