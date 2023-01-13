import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

import { MainDivInventoryPropTypes } from "../../Types/Components/InventoryCardStylesTypes";

// card elements(icons,title,amount)
export const MainDivInventory = styled("div")<MainDivInventoryPropTypes>`
  display: flex;
  height: 150px;
  width: 281px;

  border-radius: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  /* for active cards/onClick */

  background: ${({ cardType, active }) =>
    cardType == "purchase" && active
      ? "linear-gradient(351deg, rgba(120,240,186,1) 48%, rgba(150,230,192,1) 100%);"
      : cardType === "sales" && active
      ? "linear-gradient(351deg, rgba(120,240,186,1) 48%, rgba(150,230,192,1) 100%);"
      : cardType === "stock" && active
      ? "linear-gradient(351deg, rgba(120,240,186,1) 48%, rgba(150,230,192,1) 100%);"
      : "linear-gradient(310deg, rgba(108,107,107,1) 0%, rgba(218,218,218,1) 100%);"};
  filter: drop-shadow(0px 4px 4px #6a6a6a);
  :hover {
    cursor: pointer;
  }
`;

// for card icons
export const IconDiv = styled("div")`
  order: 1;
  align-self: flex-end;
  padding: 15px 30px;
  @media (max-width: 500px) {
    & {
      align-self: flex-start;
      flex-direction: column;
    }
  } ;
`;

// flex container for card text and amount
export const InventoryCardTextAmountDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 20px;
  margin-top: 10px;
  order: 3;
  row-gap: 10px;
  color: #313131;
  font-family: Helvetica, sans-serif;
  font-style: normal;
`;

// for card title
export const InventoryCardText = styled("div")`
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 15px;
  line-height: 1em;
`;

// for card amount
export const InventoryCardAmount = styled("div")`
  letter-spacing: 1px;
  font-weight: 550;
  font-size: 23px;
  line-height: 20px;
`;
