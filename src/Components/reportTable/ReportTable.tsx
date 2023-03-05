import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Purchase from "../../Pages/Purchase";
import Sales from "../../Pages/Sales";
import Stocks from "../../Pages/Stocks";
import { ReportTotalAmountType } from "../../Types/Components/ReportTotalAmount";
import {
  TotalAmountDiv,
  TotalAmountLabel,
  TotalAmountPrice,
} from "./ReportTable.styles";
import ReportPurchase from "./reportPurchase/ReportPurchase";
import ReportSales from "./reportSales/ReportSales";

export default function ReportTable(props: ReportTotalAmountType) {
  const { reportLabel } = props;
  const [reportAmount, setReportAmount] = useState<number | null>(null);
  let component;
  const location = useLocation();

  if (location.pathname === "/report/purchase") {
    component = <ReportPurchase setReportAmount={setReportAmount} />;
  } else if (location.pathname === "/report/sales") {
    component = <ReportSales setReportAmount={setReportAmount} />;
  } else if (location.pathname === "/report/stocks") {
    component = <Stocks />;
  }

  return (
    <>
      {component}
      <TotalAmountDiv>
        <TotalAmountLabel>
          Total <span>{reportLabel} </span>
        </TotalAmountLabel>

        <TotalAmountPrice>
          Rs. <span> {reportAmount ? reportAmount : 0} </span>
        </TotalAmountPrice>
      </TotalAmountDiv>
      <br />
    </>
  );
}
