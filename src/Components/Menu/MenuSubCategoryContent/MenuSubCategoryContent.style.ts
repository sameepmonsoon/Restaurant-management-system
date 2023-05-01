import styled from "@emotion/styled";
type SubcatBorderTypes = {
  borderBottom?: boolean;
};
export const MenuSubCategoryContentDiv = styled("div")<SubcatBorderTypes>`
  display: flex;
  flex-flow: row wrap;
  gap: 21px;
  padding-bottom: 50px;
  border-bottom: ${({ borderBottom }) =>
    borderBottom === true ? "1px solid rgba(0, 0, 0, 0.07)" : "0"};
`;
export const MenuSubCategoryContentMain = styled("div")`
  /* display: flex;
    flex-flow: row wrap;
    gap: 21px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
`;
