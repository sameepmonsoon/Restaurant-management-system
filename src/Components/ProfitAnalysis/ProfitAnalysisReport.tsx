import React from "react";
import {
  InnerDiv,
  DivTitle,
  MainDiv,
  InnerDivElements,
  DivELementsIcon,
  DivELementsStats,
  DivELementsTitle,
  DivELementsStatBox,
  StockCardInnerDiv,
  StockCardItemText,
  StockCardAmount,
  StockCardMainDiv,
} from "./ProfitAnalysisReport.style";
import { ProfitAnalysisTypes } from "../../Types/Components/ProfitAnalysisTypes";

const ProfitAnalysisReport = (props: ProfitAnalysisTypes) => {
  const {
    icon1,
    title1,
    icon2,
    title2,
    icon3,
    amount1,
    amount2,
    amount3,
    amount4,
    title3,
    icon4,
    title4,
    cardTitle,
  } = props;

  return (
    <MainDiv cardTitle={cardTitle}>
      <DivTitle>{cardTitle} Overview</DivTitle>
      <InnerDiv cardTitle={cardTitle}>
        {cardTitle == "stock" ? (
          <StockCardMainDiv>
            <StockCardInnerDiv>
              <StockCardItemText>Total Stock Items</StockCardItemText>
              <StockCardAmount>{amount1}</StockCardAmount>
            </StockCardInnerDiv>
            <StockCardInnerDiv>
              <StockCardItemText>Low Stock Items</StockCardItemText>
              <StockCardAmount>{amount2}</StockCardAmount>
            </StockCardInnerDiv>
            <StockCardInnerDiv>
              <StockCardItemText>Product Type</StockCardItemText>
              <StockCardAmount>{amount3}</StockCardAmount>
            </StockCardInnerDiv>
          </StockCardMainDiv>
        ) : (
          <>
            <InnerDivElements>
              <DivELementsIcon icontype={"icon1"}>{icon1}</DivELementsIcon>

              <DivELementsStatBox>
                <DivELementsTitle>{title1}</DivELementsTitle>
                <DivELementsStats>{amount1}</DivELementsStats>
              </DivELementsStatBox>
            </InnerDivElements>
            <InnerDivElements>
              <DivELementsIcon icontype={"icon2"}>{icon2}</DivELementsIcon>
              <DivELementsStatBox>
                <DivELementsTitle>{title2}</DivELementsTitle>
                <DivELementsStats>{amount2}</DivELementsStats>
              </DivELementsStatBox>
            </InnerDivElements>
            <InnerDivElements>
              <DivELementsIcon icontype={"icon3"}>{icon3}</DivELementsIcon>
              <DivELementsStatBox>
                <DivELementsTitle>{title3}</DivELementsTitle>
                <DivELementsStats>{amount3}</DivELementsStats>
              </DivELementsStatBox>
            </InnerDivElements>
            <InnerDivElements>
              <DivELementsIcon icontype={"icon4"}>{icon4}</DivELementsIcon>
              <DivELementsStatBox>
                <DivELementsTitle>{title4}</DivELementsTitle>
                <DivELementsStats>{amount4}</DivELementsStats>
              </DivELementsStatBox>
            </InnerDivElements>
          </>
        )}
      </InnerDiv>
    </MainDiv>
  );
};

export default ProfitAnalysisReport;
