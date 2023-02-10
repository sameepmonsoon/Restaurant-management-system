import styled from "@emotion/styled";

export const TableCheck = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;
  width: 190px;
  height: 19px;
  svg {
    color: #4aa6f7;
  }
`;

export const TableCheckText = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #424242;
`;
export const TableMain = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  row-gap: 15px;
  flex: 1;
  width: 80%;
  @media screen and (min-width: 300px) and (max-width: 1550px) {
    /* column-gap: 100px; */
    width: 90%;
  }
`;

export const TableDiv = styled("div")`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  column-gap: 54px;
  row-gap: 50px;
  flex: 1;
`;
