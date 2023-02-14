import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

type PropType = {
  showDisplayFlex: boolean;
};
type LabelType = {
  error?: string;
};

export const MainDiv = styled("div")<PropType>`
  display: ${({ showDisplayFlex }) => (showDisplayFlex ? "flex" : "block")};
`;

export const LabelDiv = styled("label")<LabelType>`
  font-size: 1.25rem;
  font-weight: 500;
  font-style: normal;
  color: #1e1e1e;
  font-family: "Inter", sans-serif;
  color: ${({ error }) => (error ? "red" : "black")};

  @media screen {
  }
`;
export const Input = styled("input")`
  box-sizing: border-box;
  border: 1.2px solid #000000;
  border-radius: 10px;
  width: 22rem;
  height: 3rem;
  margin-bottom: 1.5rem;
`;
export const Button = styled("button")`
  border: 1.2px solid #000000;
  border-radius: 6px;
  /* width: 15.625rem; */
  /* height: 2.813rem; */
  width: 145px;
  height: 40px;
  background: #1e1e1e;
  color: white;
  margin-top: 0.5em;
  &:hover {
    background-color: #545454;
    cursor: pointer;
  }
`;
