import styled from "@emotion/styled";
import { style } from "@mui/system";
type IconTypes = {
  icontype: String | null;
};

type CardTitleTypes = {
  cardTitle: String | null;
};
export const MainDiv = styled("div")<CardTitleTypes>`
  ${({ cardTitle }) =>
    cardTitle === "stock"
      ? "width: 323px;\
height: 225px;background-color:red;"
      : "width: 538px;\
height: 245px;"};
  background: #ffffff;
  box-shadow: 0px 1px 12px -5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: ${({ cardTitle }) => (cardTitle === "stock" ? "15px" : "23px")};
  padding: 23px 0 32px 24px;
`;
export const DivTitle = styled("div")`
  width: 151px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
  text-transform: capitalize;
`;
export const InnerDiv = styled("div")<CardTitleTypes>`
  ${({ cardTitle }) =>
    cardTitle === "stock"
      ? "display:flex; flex-flow:column  nowrap;"
      : " display: grid; grid-template-columns: auto auto;\
      grid-template-rows: auto auto;  justify-content: end;\
      column-gap: 137px;\
      row-gap: 39px;"}
`;
export const InnerDivElements = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
`;
export const DivELementsIcon = styled("div")<IconTypes>`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  ${({ icontype }) =>
    icontype === "icon1"
      ? "background-color:#E7FFF1; color:#02844B;"
      : icontype === "icon2"
      ? "background-color:#FFE7E7;color:#E84A4A;"
      : icontype === "icon3"
      ? "background-color:#FFF5E7;color:#F49D1A;"
      : icontype === "icon4"
      ? "background-color:#E7FFFB;color:#17BFB5;"
      : null};
  border-radius: 5px;
`;
export const DivELementsStats = styled("div")`
  font-family: "Inter";
  flex: 1;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  color: #424242;
`;

export const DivELementsTitle = styled("div")`
  flex: 1;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -1px;
  color: #424242;
  text-transform: capitalize;
`;

export const DivELementsStatBox = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 7px;
`;

export const StockCardMainDiv = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const StockCardDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  border-bottom: 1px solid #f2f2f2;
  height: 32px;
  flex: 1;
  column-gap: 133px;
  position: relative;
  &:last-child {
    border-bottom: 0;
  }
`;

export const StockCardItemText = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -1px;
  padding: 16px 0;
  color: #424242;
`;
export const StockCardAmount = styled("p")`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  color: #424242;
`;
