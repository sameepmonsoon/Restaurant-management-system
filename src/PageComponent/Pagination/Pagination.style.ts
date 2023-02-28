import styled from "@emotion/styled";
type Pagination = {
  active: boolean;
};
export const PaginationDiv = styled("div")`
  width: 340px;
  height: 31px;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const PreviousIndex = styled("button")`
  min-width: 31px;
  overflow: hidden;
  min-height: 31px;
  background: #eeeeee;
  border-radius: 8px;
  border: 0px;
`;
export const NextIndex = styled("button")`
  min-width: 31px;
  overflow: hidden;
  min-height: 31px;
  background: #eeeeee;
  border-radius: 8px;
  border: 0px;
`;
export const PaginationIndexes = styled("div")`
  width: 31px;
  height: 31px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
export const Index = styled("button")<Pagination>`
  display: flex;
  border: 0px;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  background: ${({ active }) => (active === true ? "#ffffff" : " #eeeeee ")};
  box-shadow: ${({ active }) =>
    active === true ? "0px 4px 4px #e6e0e0" : " 0 "};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #ffffff;
  }
`;
