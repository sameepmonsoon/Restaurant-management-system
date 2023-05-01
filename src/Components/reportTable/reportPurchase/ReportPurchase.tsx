import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PurchaseTable from "../../../PageComponent/Dashboard/Table/PurchaseTable";
import { MyContext } from "../../../Pages/Reports";
import { HTTPMethods } from "../../../Utils/HTTPMock";
import "react-toastify/dist/ReactToastify.css";

export default function ReportPurchase({ setReportAmount }: any) {
  const context = useContext(MyContext);
  // @ts-ignore
  const { dateAndTime, generateReport, setGenerateReport } = context;
  const date1 = dateAndTime?.date1;
  const date2 = dateAndTime?.date2;
  const isDaily = dateAndTime?.isDaily;
  const isMonthly = dateAndTime?.isMonthly;
  const isWeekly = dateAndTime?.isWeekly;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  function fetchReportPurchase() {
    if (isDaily || isMonthly || isWeekly) {
      setLoading(true);
      // API CALL
      HTTPMethods.get(
        `/report/purchase?page=1&offset=50&date1=${date1}&date2=${date2}&daily=${isDaily}&monthly=${isMonthly}&weekly=${isWeekly}`
      )
        .then(function (resp) {
          console.log("report purchase", resp.data);
          const { payload } = resp.data;
          setData(payload.data.purchase.totalPurchaseData);
          setReportAmount(payload.data.purchase.totalPurchase);
        })
        .catch(function (err) {
          // Show Toast
          toast.error(err.response.data, {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 2000,
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
    if (generateReport) fetchReportPurchase();
    if (firstRender) fetchReportPurchase();
    // fetchProducts();
  }, [generateReport]);

  return loading ? (
    <div>loading...</div>
  ) : data && data.length ? (
    <>
      <PurchaseTable data={data} onDeleteSuccess={() => ""} />
    </>
  ) : (
    <>
      {/* <FiltersReport /> */}
      <div>No Data to Show {setReportAmount(0)}</div>
    </>
  );
}
