import styled from "@emotion/styled";

export const ReportFilterMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  flex: 7;
  gap: 70px;
  background: #ffffff;
  border-radius: 5px;

  @media screen and (max-width: 1450px) {
    padding: 10px;
    align-items: flex-start;
    flex-flow: column wrap;
    gap: 30px;
  }
`;

export const ReportFilterInnerDiv = styled("div")`
  display: flex;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex: 5;
  flex-shrink: 0;
  @media screen and (max-width: 900px) {
    flex-flow: column wrap;
  }
`;

export const ReportFilterType = styled("div")`
  order: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 0 10px;
  align-items: center;
  flex: 1;
  gap: 20px;
  p {
    position: relative;
    top: 10px;
    left: 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    width: 101px;
    height: 19px;
    color: #424242;
  }
  select {
    width: 141px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #313131;
    border-radius: 5px;
    padding: 0 19px;
  }
  @media screen and (max-width: 1300px) {
    align-items: flex-start;
    flex-flow: column wrap;
    padding: 0;
  }
`;

export const ReportFilterTextDate = styled("div")`
  display: flex;
  flex: 2;
  order: 2;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  min-width: 101px;
  div {
    text-transform: capitalize;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #424242;
  }

  @media screen and (max-width: 900px) {
    flex-flow: row wrap;
    gap: 20px;
  }
`;
export const ReportFilterDateBox = styled("span")`
  order: 3;
  display: flex;
  flex: 3;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 7px;
  align-items: center;
  input[type="date"] {
    width: 230px;
    height: 45px;
    padding: 0 10px;
    background: #ffffff;
    border: 1px solid #313131;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 900px) {
    flex-flow: column wrap;
    gap: 10px;
  }
`;

export const ReportFilterPrintIcon = styled("div")`
  order: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 43px;
  height: 45px;
  margin: 0 19px;
  color: #4b4747;
  background: #eeeeee;
  border-radius: 5px;
  transition: all 300ms ease;
  &:hover {
    background-color: grey;
    color: #000000;
    cursor: pointer;
  }
`;
