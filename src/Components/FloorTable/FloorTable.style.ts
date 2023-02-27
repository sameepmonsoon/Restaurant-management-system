import styled from "@emotion/styled";

type TableType = {
  select: boolean;
};

export const TableContainer = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 12px;
`;
export const Tables = styled("div")<TableType>`
  background: ${({ select }) => (select === true ? "  #FFE7E7" : "#ffffff")};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 186px;
  height: 135px;
  display: flex;
  align-items: flex-start;

  justify-content: center;
  &:hover {
    background-color: #ffe7e7;
    cursor: pointer;
  }
`;
export const TableImage = styled("img")`
  margin-top: 1px;
  width: 90px;
  height: 90px;
  background-color: t ransparent;
  border: 0;
`;
export const KaraokeImage = styled("img")`
  margin: auto;
  width: 60px;
  height: 60px;
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
