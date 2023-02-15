import styled from "@emotion/styled";

export const MenuLayoutMainDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-around;
  column-gap: 10px;
  flex: 1;
`;
export const MenuLayoutCategory = styled("div")`
  display: flex;
  width: 167px;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 21px;
  row-gap: 10px;
`;
export const MenuLayoutSubCategory = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 10px;
  width: 100%;
`;
export const MenuLayoutSubCategoryContent = styled("div")`
  display: flex;
  flex: 2;
  width: 80%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 21px;
  row-gap: 20px;
  height: 100%;
  @media screen and (max-width: 1300px) {
    width: 70%;
  }
`;
export const MenuLayoutCategoryContent = styled("div")`
  display: flex;
  flex: 2;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 21px;
`;
export const Title = styled("div")`
  text-transform: capitalize;
`;
