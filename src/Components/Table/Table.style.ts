import styled from "@emotion/styled";

type TableType = {
  select: boolean;
};
export const TableMain = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  row-gap: 15px;
  flex: 1;
`;

export const TableContainer = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 12px;
`;
export const Tables = styled("div")<TableType>`
  background: ${({ select }) => (select === true ? " #4aa6f7" : "#ffffff")};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 186px;
  height: 135px;
  display: flex;
  align-items: flex-start;

  justify-content: center;
  &:hover {
    /* background-color: #4aa6f7; */
    cursor: pointer;
  }
`;
export const Image = styled("img")`
  margin-top: 1px;
  width: 104px;
  height: 104px;
  background-color: t ransparent;
  border: 0;
`;

export const TableNum = styled("div")`
  width: 100%;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`;

export const TableDiv = styled("div")`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  column-gap: 54px;
  row-gap: 50px;
  flex: 1;
`;
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
