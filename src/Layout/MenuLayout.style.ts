import styled from "@emotion/styled";
type MenuOpenSiderTypes = {
  openSider: boolean;
};
export const MenuLayoutMainDiv = styled("div")<MenuOpenSiderTypes>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 89%;
  justify-content: flex-start;
  align-content: center;
  row-gap: 10px;
  margin: 20px 0 20px 50px;
  overflow: hidden;
  padding-top: 50px;
  @media screen and (max-width: 1300px) {
  }
`;
export const MenuCatSubcatDiv = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  column-gap: 50px;
`;
export const MenuLayoutCategory = styled("div")`
  display: flex;
  min-width: 167px;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 21px;
  row-gap: 10px;
  overflow: hidden;
`;
export const MenuLayoutSubCategory = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 0px;
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
export const SubcategoryTitle = styled("div")`
  text-transform: capitalize;
  width: 200px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #676767;
  margin-bottom: 20px;
`;
