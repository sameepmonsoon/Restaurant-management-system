import styled from "@emotion/styled";

export const ReportFilterMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  background: #ffffff;
  border-radius: 5px;
  gap: 10px;
  @media screen and (max-width: 1400px) {
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    row-gap: 30px;
  }
`;

export const ReportDaily = styled("span")`
  display: flex;
  flex-flow: row nowrap;
  width: 200px;
  svg {
    color: #676767;
  }
  color: #424242;
  column-gap: 10px;
  align-items: center;
  justify-content: space-around;
`;
export const ReportWeekly = styled("span")`
  display: flex;
  flex-flow: column nowrap;
  width: 200px;
  svg {
    color: #676767;
  }
  row-gap: 5px;
  align-items: center;
  justify-content: space-around;
`;
export const ReportWeeklyDiv = styled("div")`
  color: #424242;
`;
export const ReportFilterInnerDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  @media screen and (max-width: 1485px) {
    gap: 150px;
    align-items: center;
  }
  @media screen and (max-width: 900px) {
    flex-flow: column wrap;
    row-gap: 30px;
    align-items: center;
  }
`;
export const ReportType = styled("span")`
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  width: 101px;
  height: 19px;
  color: #424242;
`;
export const ReportFilterType = styled("div")`
  order: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  align-items: center;
  flex: 1;
  gap: 20px;

  @media screen and (max-width: 1400px) {
    align-items: center;
    flex-flow: column wrap;
    padding: 5px 0 5px 10px;
  }
`;

export const Select = styled("select")`
  width: 141px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #313131;
  border-radius: 5px;
  padding: 0 19px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  ::after {
    content: "red";
    background-color: red;
    font-size: large;
  }
  &::before {
    content: "red";
    background-color: red;
    font-size: large;
  }
  option {
    background: #fafafa;
  }
`;
export const ReportFilterTextDate = styled("div")`
  display: flex;
  flex: 2;
  order: 2;
  align-items: center;
  justify-content: space-around;
  flex-flow: column wrap;
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
export const DateButtonBox = styled("span")`
  order: 3;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  gap: 7px;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-flow: column wrap;
    flex: 1;
    gap: 10px;
  }
`;

export const ReportFilterDateBox = styled("span")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 350px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  input[type="date"] {
    order: 4;
    width: 100%;
    height: 45px;
    padding: 0 10px;
    background: #ffffff;
    border: 0px solid #313131;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #424242;
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
    background-color: #e9ecef;
    color: #000000;
    cursor: pointer;
  }
`;
