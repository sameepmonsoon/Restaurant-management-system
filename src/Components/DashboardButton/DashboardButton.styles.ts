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
    transition: gap 200ms ease, color 200ms ease-in;
  }
  div:hover {
    column-gap: ${({ disableTransition, activeSider }) =>
      activeSider === true || disableTransition ? "20px;" : "25px;"};
  }
  &:hover {
    ${({ disableTransition }) =>
      disableTransition
        ? "background-color:#545454; transition:all 200ms ease;"
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
  &:hover {
    margin-left: ${({ activeSider, disableTransition }) =>
      activeSider === true || disableTransition ? "0" : "0rem;"};
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
