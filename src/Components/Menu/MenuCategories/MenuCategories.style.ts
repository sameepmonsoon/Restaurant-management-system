import styled from "@emotion/styled";

type MenuCategoriesStylesType = {
  clicked?: boolean;
};

export const MenuCategoryMainDIv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  max-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const MenuCategoriesDiv = styled("div")<MenuCategoriesStylesType>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 167px;
  height: 71px;
  border: 1px solid rgba(0, 0, 0, 0.06);

  &,
  div {
    background: ${({ clicked }) => (clicked === true ? "#DFDEDE" : "#ffffff")};
  }
  &:hover {
    cursor: pointer;
    div,
    & {
      background-color: #dfdede;
    }
  }
`;
export const CategoryTitle = styled("div")`
  flex: 1 0 92px;
  height: 19px;
  padding-left: 19px;
  overflow: hidden;
  font-family: "Inter";
  text-transform: capitalize;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #0060b5;
`;
export const EditCategory = styled("div")`
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  width: 30px;
  height: 100%;
`;
export const Icon = styled("span")`
  height: 17px;
  width: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  opacity: 0.8;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  svg:hover {
    padding: 1px;
    transition: all 300ms ease;
  }
`;
export const MenuTitleName = styled("div")`
  text-transform: capitalize;
  width: 83px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #676767;
  margin-bottom: 20px;
`;
