import styled from "@emotion/styled";
type MenuCategoriesStylesType = {
  clicked?: boolean;
};
export const MenuSubcatMainDiv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 131px;
  width: 171px;
  row-gap: 6px;
`;
export const MenuSubCategoriesDiv = styled("div")<MenuCategoriesStylesType>`
  min-width: 100%;
  min-height: 105px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &:hover {
    img {
      opacity: 0.7;
      transform: scale3d(1.1, 1.1, 1);
    }
    cursor: pointer;
  }

  img {
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    opacity: ${({ clicked }) => (clicked === true ? "0.7" : "1")};
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: ${({ clicked }) =>
      clicked === true ? "scale3d(1.1, 1.1, 1)" : "0"};
    transition: transform 400ms ease-in-out;
  }
`;
export const ItemTitleAmount = styled("div")`
  /* display: flex; */
  margin: auto;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 80px;
  overflow: hidden;
`;
export const ItemTitle = styled("div")`
  vertical-align: bottom;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  width: 100%;
  height: 20px;
  overflow: hidden;
  color: #000000;
  text-transform: capitalize;
  background: transparent;
`;
export const ItemAmount = styled("div")`
  width: 100px;
  height: 20px;
  text-align: center;
  color: #ffffff;
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
  z-index: 3;
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
    transition: all 300ms ease;
  }
`;
