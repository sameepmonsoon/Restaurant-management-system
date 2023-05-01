import styled from "@emotion/styled";
import { boolean } from "yup";

type menuTypes = {
  isTrue: boolean;
};

export const FilterComponentDiv = styled("form")`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex: 1;
  row-gap: 10px;
  column-gap: 30px;
  justify-content: flex-start;
  @media screen and (max-width: 1300px) {
    align-items: flex-start;
    flex-flow: column wrap;
    row-gap: 30px;
  }
  label {
    width: 53px;
    height: 19px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: #000000;
  }
`;

export const InputDiv = styled("div")<menuTypes>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  flex-flow: row nowrap;
  padding: 0px 0.5em;
  color: #676767;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: ${({ isTrue }) => (isTrue === true ? "1095px" : "379px")};
  height: 45px;
  text-transform: capitalize;
  background: #ffffff;

  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #676767;
    border: none;
    width: ${({ isTrue }) => (isTrue === true ? "1000px" : "300px")};
    height: 38px;
    padding: 0 5px;
    background: transparent;
    border-radius: 0;
  }
  input:focus {
    outline: none;
  }
  @media screen and (max-width: 1400px) {
    width: 379px;
    input {
      width: 300px;
    }
  }
`;

export const IconDiv = styled("div")``;

export const DateAndSelectDiv = styled("div")`
  text-transform: capitalize;
  width: 232px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  padding: 0px 0.5em;
  gap: 5px;
  color: #676767;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  select {
    border: none;
    width: 375px;
    height: 42px;
    color: #676767;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    background: #ffffff;
  }
  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #676767;
    border: none;
    width: 180px;
    height: 40px;
    background: #ffffff;
  }
  input:focus {
    outline: none;
  }
`;

export const OptionDiv = styled("div")`
  width: 232px;
  height: 45px;
  color: #676767;
`;
