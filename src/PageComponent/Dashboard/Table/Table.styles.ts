import styled from "@emotion/styled";
import { TableStatusStyled } from "../../../Types/Components/DashboardTableStyles";

export const MainTableDiv = styled("table")`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  width: 74vw;
  @media screen and (max-width: 1400px) {
    width: 70vw;
  }
`;

export const TableHeader = styled("thead")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 74vw;
  height: 46px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px 5px 0px 0px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TableBody = styled("tbody")`
  tr {
    margin-top: 10px;
    height: 62px;
  }
`;

export const TableRow = styled("tr")`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 74vw;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TableDataStatus = styled("span")<TableStatusStyled>`
  font-family: "Inter";
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  ${({ status }) =>
    status === "Completed" || status === "Cash"
      ? "color:#02844B; background-color: #E7FFF1;"
      : status === "Pre-order" || status === "Fonepay"
      ? "color:#17BFB5;background: #E7FFF1;"
      : status === "Cancelled" || status === "Due"
      ? "color:#E84A4A; background:#FAE8E9;"
      : "color:#E98C02;background:#FAE8E9;"};
  width: 9%;
  height: 27px;
  border-radius: 14px;
  p {
    margin: 0;
    padding: 0;
  }
`;

export const TableData = styled("td")`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-style: normal;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding-left: 5px;
  height: 30px;
  text-transform: capitalize;
  /* border-right: 1.5px solid rgba(223, 223, 223, 0.46); */
  /* &::after {
    content: "";
    height: 50px;
    width: 1px;
  } */
`;

export const TableHeadData = styled("td")`
  display: flex;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  font-style: normal;
  flex-direction: row;
  column-gap: 20px;
  text-transform: uppercase;
  align-items: center;
  width: 100%;
  padding-left: 5px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    column-gap: 8px;
    padding-left: 2px;
  }
`;

export const TableDataAction = styled("td")`
  display: flex;
  gap: 5px;
  padding: 0 10px;
  button[type="submit"] {
    height: 25px;
    padding-top: 7px;
    background-color: #313131;
    width: 30px;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    border: 1px solid #00020f;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
  button[type="submit"]:hover {
    background-color: #5e5e5e;
    cursor: pointer;
    border: 0;
  }
  button[type="reset"] {
    height: 25px;
    background-color: #fafafa;
    color: #9d9d9d;
    width: 30px;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    border: 1px solid #fafafa;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  }
  button[type="reset"]:hover {
    background-color: #e8e8e8;
    cursor: pointer;
    border: 0;
  }
`;