import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ReportDiv = styled("div")`
  width: 100%;
`;

export const DropdownHeader = styled("div")`
  background-color: #313131;
  color: white;
  border: 1px solid #00020f;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  padding: 3px;
  height: 50.95px;
`;
export const DropDownDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 19px;
  align-items: center;
`;
export const DropDownIcon = styled("div")`
  margin-left: 7px;
`;
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
  }
  li:hover {
    color: #000;
  }

  
`;
