import ProfitAnalysisReport from "../Components/ProfitAnalysis/ProfitAnalysisReport";
import { BsTag } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsCartX, BsCartCheck } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ProfitAnalysisListTypes } from "../Types/Components/ProfitAnalysisTypes";
import { HTTPMethods } from "../Utils/HTTPMock";
import { toast } from "react-toastify";
import { ProfitAnalysisDiv } from "./ProfitAnalysis.style";
import { useFilterStore } from "./states/TablesFilter.state";
import { MyContext } from "../Pages/Reports";

const ProfitAnalysis = () => {
  const context = useContext(MyContext);
  // @ts-ignore
  const { dateAndTime, generateReport, setGenerateReport } = context;
  const date1 = dateAndTime.date1;
  const date2 = dateAndTime.date2;
  const isDaily = dateAndTime.isDaily;
  const isMonthly = dateAndTime.isMonthly;
  const isWeekly = dateAndTime.isWeekly;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [purchaseProfit, setpurchaseProfit] =
    useState<ProfitAnalysisListTypes>();
  const [stockProfit, setStockProfit] = useState<ProfitAnalysisListTypes>();
  const { searchTerm, setSearchTerm } = useFilterStore((state: any) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  function fetchProfitAnalysis() {
    if (isDaily || isMonthly || isWeekly) {
      setLoading(true);
      HTTPMethods.get(
        `/profit-analysis/report?date1=${date1}&date2=${date2}&daily=${isDaily}&monthly=${isMonthly}&weekly=${isWeekly}`
      )
        .then(function (res: any) {
          // console.log("Response from profit analysis.");
          setpurchaseProfit(res.data.payload.data);
          console.log(`${date1} ${date2}`, res.data.payload.data);
        })

        .catch(function (err) {
          toast.info("Server is down to display the table data.", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 2000,
            position: "bottom-right",
            toastId: "info1",
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
    if (generateReport) fetchProfitAnalysis();
    if (firstRender) fetchProfitAnalysis();
  }, [generateReport]);

  useEffect(() => {
    HTTPMethods.get("/profit-analysis/stock")
      .then(async (res: any) => {
        // console.log("Response from stock pa.");

        setStockProfit(res.data.payload.data);
        console.log(res.data.payload.data);
      })
      .catch(async (err) => {
        toast.info("Server is down to display the table data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          position: "bottom-right",
          toastId: "info1",
        });
      })

      .finally(function () {
        setLoading(false);
        setGenerateReport(!generateReport);
        setFirstRender(false);
      });
  }, []);

  const totalPurchase = purchaseProfit
    ? `${purchaseProfit.PurchaseOverview.TotalPurchase}`
    : "Loading";
  const CancelOrder = purchaseProfit
    ? `${purchaseProfit.PurchaseOverview.CancelOrder}`
    : "Loading";
  const purchaseCost = purchaseProfit
    ? `${purchaseProfit.PurchaseOverview.Cost}`
    : "Loading";
  const preOrder = purchaseProfit
    ? `${purchaseProfit.PurchaseOverview.PreOrder}`
    : "Loading";

  const totalSales = purchaseProfit
    ? `${purchaseProfit.SalesOverview.TotalSales}`
    : "Loading";
  const totaDue = purchaseProfit
    ? `${purchaseProfit.SalesOverview.TotalDue}`
    : "Loading";
  const salesCost = purchaseProfit
    ? `${purchaseProfit.SalesOverview.Cost}`
    : "Loading";
  const profitAmount = purchaseProfit
    ? `${purchaseProfit.SalesOverview.Amount}`
    : "Loading";
  const salesStatus = purchaseProfit
    ? `${purchaseProfit.SalesOverview.Status}`
    : "Loading";

  const totalStock = stockProfit ? `${stockProfit.TotalStock}` : "Loading";
  const lowStock = stockProfit ? `${stockProfit.LowStock}` : "Loading";
  const stockType = stockProfit ? `${stockProfit.ProdyctType}` : "Loading";

  return (
    <>
      <ProfitAnalysisDiv>
        <ProfitAnalysisReport
          cardTitle={"Purchase"}
          icon1={<MdOutlineShoppingCart size={30} />}
          icon2={<BsCartX size={30} />}
          icon3={<HiOutlineCurrencyRupee size={30} />}
          icon4={<BsCartCheck size={30} />}
          title1={"Total purchase"}
          title2={"Cancel Order "}
          title3={"Cost"}
          title4={"Pre order"}
          amount1={totalPurchase}
          amount2={CancelOrder}
          amount3={purchaseCost}
          amount4={preOrder}
        />

        <ProfitAnalysisReport
          cardTitle={"Sales"}
          icon1={<BsTag size={30} />}
          icon2={<TbCalendarStats size={30} />}
          icon3={<HiOutlineCurrencyRupee size={30} />}
          icon4={<AiOutlineLineChart size={30} />}
          title1={"Total purchase"}
          title2={"Total Due"}
          title3={"Cost"}
          title4={salesStatus}
          amount1={totalSales}
          amount2={totaDue}
          amount3={salesCost}
          amount4={profitAmount}
        />
        <ProfitAnalysisReport
          cardTitle={"stock"}
          amount1={totalStock}
          amount2={lowStock}
          amount3={stockType}
        />
      </ProfitAnalysisDiv>
    </>
  );
};

export default ProfitAnalysis;
