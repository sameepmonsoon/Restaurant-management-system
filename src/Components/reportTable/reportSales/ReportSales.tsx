import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PurchaseTable from "../../../PageComponent/Dashboard/Table/PurchaseTable";
import SalesTable from "../../../PageComponent/Dashboard/Table/SalesTable";
import { MyContext } from "../../../Pages/Reports";
import { HTTPMethods } from "../../../Utils/HTTPMock";

export default function ReportSales({ setReportAmount }: any) {
  const context = useContext(MyContext);
  // @ts-ignore
  const { dateAndTime, generateReport, setGenerateReport } = context;
  console.log("context value is", context);
  const date1 = dateAndTime?.date1;
  const date2 = dateAndTime?.date2;
  const isDaily = dateAndTime?.isDaily;
  const isMonthly = dateAndTime?.isMonthly;
  const isWeekly = dateAndTime?.isWeekly;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  function fetchReportSales() {
    if (isDaily || isMonthly || isWeekly) {
      setLoading(true);
      // API CALL
      HTTPMethods.get(
        `/report/sales?page=1&offset=500&date1=${date1}&date2=${date2}&daily=${isDaily}&monthly=${isMonthly}&weekly=${isWeekly}`
      )
        .then(function (resp) {
          console.log("inside repost sales", resp.data);
          const { payload } = resp.data;
          setData(payload.data.sales.totalSalesData);
          setReportAmount(payload.data.sales.totalSales);
        })
        .catch(function (err) {
          // Show Toast
          toast.error(err.message, {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
            toastId: "log1",
          });
        })
        .finally(function () {
          setLoading(false);
          setGenerateReport(!generateReport);
          setFirstRender(false);
        });
    }
  }

  useEffect(() => {
    if (generateReport) fetchReportSales();
    if (firstRender) fetchReportSales();
  }, [generateReport]);

  return loading ? (
    <div>loading...</div>
  ) : data && data.length ? (
    <SalesTable data={data} onDeleteSuccess={() => {}} />
  ) : (
    <>
      {/* <FiltersReport /> */}
      <div>No Data to Show</div>
    </>
  );
}
