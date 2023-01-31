import styled from "@emotion/styled";
import { Link } from "react-router-dom";
type SetTitle = {
  activeSider: boolean;
};

export const DashboardButtonMainDiv = styled("div")<SetTitle>`
  background-color: ${({ activeSider }) =>
    activeSider === true ? "#313131" : "white"};
  border: ${({ activeSider }) =>
    activeSider === true ? "1px solid #00020f" : "0"};
  box-shadow: ${({ activeSider }) =>
    activeSider === true ? "  0px 0px 2px rgba(0, 0, 0, 0.15)" : "0"};
  border-radius: 8px;
  width: 224px;
  height: 48px;
  div {
    color: ${({ activeSider }) =>
      activeSider === true ? "#ffffff" : "#9a9a9a"};
  }
`;
export const DashboardButtonInnerDiv = styled("div")<SetTitle>`
  display: flex;
  /* flex-flow: row nowrap; */
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 9px 0px;
  transition: all 300ms ease;

  &:hover {
    margin-left: ${({ activeSider }) => (activeSider === true ? "0" : "1rem;")};
    cursor: pointer;
    div {
      color: ${({ activeSider }) => (activeSider != true ? "#313131" : "0")};
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
  /* margin given to level dashboard ico and button text */
  /* margin-top: 4px; */
  line-height: 22px;
  color: #ffffff;
  text-transform: capitalize;
`;
