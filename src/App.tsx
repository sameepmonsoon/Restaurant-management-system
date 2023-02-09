import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register } from "./Pages";
import Components from "./Pages/Components";
import Dashboard from "./Pages/Dashboard";
import { Route, Link } from "react-router-dom";
import InventoryCard from "./Components/InventoryCard/InventoryCard";
import { TextField } from "./Components/TextField";
import { MdOutlineShoppingCart } from "react-icons/md";

import Sider from "./PageComponent/Dashboard/Sider/Sider";
import { ToastContainer } from "react-toastify";
import Sales from "./Pages/Sales";
import Stocks from "./Pages/Stocks";
import Purchase from "./Pages/Purchase";

import path from "node:path/win32";
import ProfitAnalysis from "./Pages/ProfitAnalysis";
import Reports from "./Pages/Reports";
import Menu from "./Pages/Menu";
import Customer from "./Pages/Customer";
import WebOrder from "./Pages/WebOrder";
import Tables from "./Pages/Tables";
import FloorSecond from "./Pages/FloorSecond";
import FloorFirst from "./Pages/FloorFirst";
import { useTotalAmountStore } from "./Pages/states/TablesFilter.state";
import { useEffect } from "react";
import ReportTable from "./Components/reportTable/ReportTable";

function App(props: any) {
  const { totalAmount, fetchTotalAmounts } = useTotalAmountStore(
    (state: any) => ({
      totalAmount: state.totalAmounts,
      fetchTotalAmounts: state.fetchTotalAmounts,
    })
  );
  useEffect(() => {
    fetchTotalAmounts();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/home",
      element: <Dashboard />,
      children: [
        {
          path: "purchase",
          element: <Purchase />,
        },
        {
          path: "sales",
          element: <Sales />,
        },
        {
          path: "stocks",
          element: <Stocks />,
        },
      ],
    },
    {
      path: "/customer",
      element: <Customer />,
    },

    {
      path: "/weborder",
      element: <WebOrder />,
    },
    {
      path: "/tables",
      element: <Tables />,
      children: [
        { path: "floorFirst", element: <FloorFirst /> },
      
      ],
    },

    {
      path: "/report",
      element: <Reports />,
      children: [
        {
          path: "purchase",
          // element: <Purchase/>
          element: (
            <ReportTable
              reportLabel={"Purchase"}
              reportAmount={totalAmount.totalpurchase}
            />
          ),
        },
        {
          path: "sales",
          // element: <Sales/>
          element: (
            <ReportTable
              reportLabel={"Sales"}
              reportAmount={totalAmount.total_sales}
            />
          ),
        },
        {
          path: "stocks",

          element: (
            <ReportTable
              reportLabel={"Stocks"}
              reportAmount={totalAmount.total_stocks}
            />
          ),
        },
        {
          path: "profitanalysis",
          element: <ProfitAnalysis />,
        },
      ],
    },
    {
      path: "/menu",
      element: <Menu />,
    },

    {
      path: "purchaseTable",
      element: <Purchase />,
    },
    {
      path: "/components",
      element: <Components />,
    },

    // ,
    // {
    //   path: "/components/textfield",
    //   element:<TextField/>,
    // },
    // {
    //   path:"/components/inventorycard",
    //   element:<InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={true}/>
    // }
    {
      path: "pagecomponent/sider",
      element: <Sider />,
    },

    {
      path: "*",
      element: <h1>page not found</h1>,
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
