import styled from "@emotion/styled";
import { Link } from "react-router-dom";
type SetTitle = {
  activeSider: boolean;
  disableTransition?: boolean;
};

export const DashboardButtonMainDiv = styled("button")<SetTitle>`
  background-color: ${({ activeSider, disableTransition }) =>
    activeSider === true || disableTransition ? "#313131" : "white"};
  border: ${({ activeSider, disableTransition }) =>
    disableTransition === true ? "1px solid #00020f" : "red"};
  box-shadow: ${({ activeSider }) =>
    activeSider === true ? "  0px 0px 2px rgba(0, 0, 0, 0.15)" : "0"};
  border-radius: 8px;
  width: 224px;
  height: 48px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  div {
    color: ${({ activeSider, disableTransition }) =>
      activeSider === true || disableTransition ? "#ffffff" : "#9a9a9a"};
  }
  &:hover {
    ${({ disableTransition }) =>
      disableTransition
        ? "background-color:red;transition:all 300ms ease;"
        : ""};
  }
`;
export const DashboardButtonInnerDiv = styled("div")<SetTitle>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  /* gap: ${({ disableTransition }) =>
    disableTransition === true ? "20px" : "20px"}; */
  transition: all 300ms ease;
  &:hover {
    margin-left: ${({ activeSider, disableTransition }) =>
      activeSider === true || disableTransition ? "0" : "1rem;"};
    cursor: pointer;

    div {
      color: ${({ activeSider, disableTransition }) =>
        activeSider === true || disableTransition ? "0" : "#313131"};
    }
  }
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
  line-height: 22px;
  color: #ffffff;
  text-transform: capitalize;
`;
