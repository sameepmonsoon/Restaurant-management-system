import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DashboardButtonMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  background: #313131;
  border: 1px solid #00020f;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 224px;
  height: 48px;
  gap: 20px;
  padding: 9px 0px;
`;

export const DashboardButtonIcon = styled("div")`
  margin-left: 19px;
  color: #ffffff;
`;

export const DashboardButtonText = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* margin given to level dashboard ico and button text */
  /* margin-top: 4px; */
  line-height: 22px;
  color: #ffffff;
  text-transform: capitalize;
`;
