import styled from "@emotion/styled";
type MenuCategoriesStylesType = {
  clicked?: boolean;
};
export const MenuSubCategoriesDiv = styled("div")<MenuCategoriesStylesType>`
  width: 171px;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &,
  div {
    background: ${({ clicked }) => (clicked === true ? "#DFDEDE" : "#ffffff")};
  }

  &:hover {
    div,
    & {
      background-color: #dfdede;
    }
    cursor: pointer;
  }
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border-bottom: 3px solid #313131;
  position: relative;
`;
export const ItemTitleAmount = styled("div")`
  display: flex;
  margin: auto;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 80px;
  overflow: hidden;
`;
export const ItemTitle = styled("div")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  width: 100%;
  height: 20px;
  overflow: hidden;
  color: #313131;
  text-align: center;
`;
export const ItemAmount = styled("div")`
  width: 100px;
  height: 20px;
  text-align: center;
`;
export const EditCategory = styled("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  row-gap: 10px;
  flex-flow: column nowrap;
  width: 21px;
  height: 60px;
`;
export const Icon = styled("span")`
  height: 17px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  svg:hover {
    padding: 1px;
  }
`;
