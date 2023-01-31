import styled from "@emotion/styled";

export const ReportFilterMainDiv = styled("div")`
  display: flex;
  width: 1105px;
  height: 90px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
`;

export const ReportFilterType = styled("div")`
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
`;

export const ReportFilterTextDate = styled("div")`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    text-transform: capitalize;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #424242;
  }
`;
export const ReportFilterDateBox = styled("div")`
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
`;

export const ReportFilterPrintIcon = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 43px;
  height: 45px;
  margin: 0 19px;
  position: relative;
  top: 22px;
  color: #4b4747;
  background: #eeeeee;
  border-radius: 5px;
`;
