import styled from "@emotion/styled";
import { TableStatusStyled } from "../../../Types/Components/DashboardTableStyles";

export const MainTableDiv = styled("table")`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  width: 1105px;
`;

export const TableHeader = styled("thead")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 1105px;
  height: 46px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px 5px 0px 0px;
`;

export const TableBody = styled("tbody")`
  /* row-gap:200px; */
  tr {
    margin-top: 20px;
    height: 62px;
  }
`;

export const TableRow = styled("tr")`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 1105px;
  /* flex: 1; */
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
`;

export const TableDataStatus = styled("span")<TableStatusStyled>`
  font-family: "Inter";
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  ${({ status }) =>
    status === "complete" || status === "cash"
      ? "color:#02844B; background-color: #E7FFF1;"
      : status === "pre-order" || status === "Fonepay"
      ? "color:#17BFB5;background: #E7FFF1;"
      : status === "cancelled" || status === "due"
      ? "color:#E84A4A; background:#FAE8E9;"
      : "color:#E98C02;background:#FAE8E9;"};
  width: 89px;
  height: 27px;
  border-radius: 14px;
`;

export const TableData = styled("td")`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  padding-left: 10px;
  text-transform: capitalize;
  /* border-right:2px solid whitesmoke;
border-top: 10px; */
`;

export const TableHeadData = styled("td")`
  display: flex;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  font-style: normal;
  flex-direction: row;
  column-gap: 15%;
  text-transform: uppercase;
  align-items: center;
  width: 1105px;
  /* border-right:2px solid whitesmoke; */
  /* flex: 1; */
  /* padding-left: 10px; */
`;

export const TableDataForDate = styled("td")`
  flex: 1;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #424242;
  padding-left: 20px;
  text-transform: capitalize;
  border-top: 10px;
`;

export const TableDataAction = styled("td")`
  /* width:500px; */
  display: flex;
  gap: 5%;
  padding: 0;
  margin-left: 20px;
  /* flex: 1; */
`;
