import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import StocksTable from "../../../PageComponent/Dashboard/Table/StocksTable";
import { MyContext } from "../../../Pages/Reports";
import { HTTPMethods } from "../../../Utils/HTTPMock";

export default function ReportStocks({ setReportAmount }: any) {
  //   const [products, loading, fetchProducts] = useProductStore((state: any) => [
  //     state.products,
  //     state.loading,
  //     state.fetchProducts,
  //   ]);
  const context = useContext(MyContext);
  // @ts-ignore
  const { dateAndTime, setGenerateReport, generateReport } = context;
  // console.log("context value is", context);
  const date1 = dateAndTime.date1;
  const date2 = dateAndTime.date2;
  const isDaily = dateAndTime.isDaily;
  const isMonthly = dateAndTime.isMonthly;
  const isWeekly = dateAndTime.isWeekly;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  console.log("this is stock page");

  function fetchReportStocks() {
    if (isDaily || isMonthly || isWeekly) {
      setLoading(true);
      // API CALL
      HTTPMethods.get(
        `/report/stock?page=1&offset=50&daily=${isDaily}&monthly=${isMonthly}&weekly=${isWeekly}`
      )
        .then(function (resp) {
          // console.log("stock response", resp);

          // something
          const { payload } = resp.data;
          // console.log(
          //   "value inside stock response",
          //   payload.data.stock.totalStock
          // );
          setData(payload.data.stock.totalStockData);
          setReportAmount(payload.data.stock.totalStock);
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
    if (generateReport) fetchReportStocks();
    if (firstRender) fetchReportStocks();
  }, [generateReport]);

  return loading ? (
    <div>loading...</div>
  ) : data && data.length ? (
    <>
      <StocksTable data={data} onDeleteSuccess={() => ""} />
    </>
  ) : (
    <>
      {/* <FiltersReport /> */}
      <div>No Data to Show{setReportAmount(0)}</div>
    </>
  );
}
