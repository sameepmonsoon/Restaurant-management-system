import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { toast } from "react-toastify";
import InventoryCard from "../Components/InventoryCard/InventoryCard";
import Navbar from "../PageComponent/Dashboard/Navbar/Navbar";
import Sider from "../PageComponent/Dashboard/Sider/Sider";
import { InventoryDataType } from "../Types/Components/InventoryDataTpes";
import { HTTPMethods } from "../Utils/HTTPMock";
import { siderToggle } from "../Pages/states/NavBar.state";
import {
  ChildrenDiv,
  FilterComponentDiv,
  InventoryCardContainerDiv,
  LayoutContainerDiv,
} from "./DashboardLayout.style";

// import {InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
import { DashboardMainDiv } from "./DashboardLayout.style";
import DrawerC from "../PageComponent/Dashboard/Drawer/Drawer";
import { useDrawer } from "../Pages/states/Drawer.state";
import { TextField } from "../Components/TextField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PurchaseForm from "../PageComponent/forms/PurchaseForm";
import SalesForm from "../PageComponent/forms/SalesForm";
import { useFilterStore } from "../store/filtered";

export default function DashboardLayout({
  children,
  renderActions,
  renderFilters,
  renderTotalitems,
}: {
  children: JSX.Element;
  renderActions?: JSX.Element;
  renderFilters?: JSX.Element;
  renderTotalitems?: JSX.Element;
}) {
  const [purchases, setPurchase] = useState<InventoryDataType>();
  const { setDrawerData } = useDrawer();
  const {setSearchTerm} = useFilterStore((state:any)=> ({setSearchTerm: state.setSearchTerm}))

  const clearFilter =()=>{
    setSearchTerm('')
  }
  useEffect(() => {
    HTTPMethods.get("/total/readTotal")
      .then(async (res) => {
        setPurchase(res.data);
        console.log(res.data)
      })
      .catch(async (err) => {
        toast.info("Server is down to display the data.", {
          theme: "colored",
          hideProgressBar: true,
          autoClose: 2000,
          toastId: "info1",
        });
      });
  }, []);

  const { openSider, toggleSider } = siderToggle();
  function openCloseSider() {
    toggleSider();
  }

  const totalPurchase = purchases? ` Rs. ${purchases.totalpurchase} `: "loading";
  const totalSales = purchases ? `Rs. ${purchases?.total_sales}` : "loading";
  const totalStocks = purchases ? `${purchases?.total_stocks} products`: "loading";

  const { open, toggleDrawer } = useDrawer();
  function closeDrawer() {
    console.log("insode close Drawer");
    setDrawerData({});
    console.log("outside Drawer");

    toggleDrawer();
  }
  function manageForm() {
    if (location.pathname === "/home/purchase") {
      return <PurchaseForm />;
    }
    if (location.pathname === "/home/sales") {
      return <SalesForm />;
    }
  }
  const location = useLocation();

  function setSiderButtonStatus() {
    if (location.pathname === "/home/purchase") {
      return null;
    }
  }

  function handleActiveCard() {
    if (location.pathname) {
      return true;
    } else if (location.pathname === "/home/sales") {
      return true;
    } else if (location.pathname === "/home/stocks") {
      return true;
    }
  }
  function manageTitle() {
    if (location.pathname === "/home/purchase") {
      return "New Purchase";
    }
    if (location.pathname === "/home/sales") {
      return "New Sales";
    }
    return "Title";
  }
  return (
    <>
      <DashboardMainDiv>
        <Sider />
        <LayoutContainerDiv openSider={openSider}>
          <Navbar
            navTitle={"Dashboard"}
            navbarCardName={"Purchase"}
            arrowIcon={true}
            onClick={(e: React.MouseEvent<HTMLElement>) => openCloseSider()}
          />
          <InventoryCardContainerDiv openSider={openSider}>
            <Link
              to={"/home"}    onClick={clearFilter}
              style={{ color: "#090909", textDecoration: "none" }}>
              <InventoryCard
                title={"Purchase"}
                icon={<MdOutlineShoppingCart size={30} />}
                amount={totalPurchase}
                cardType="purchase"
                active={location.pathname === "/home/purchase"}
              />
            </Link>
            <Link
              to={"/home/sales"} onClick={clearFilter}
              style={{ color: "#090909", textDecoration: "none" }}>
              <InventoryCard
                title={"Sales"}
                icon={<BsTag size={30} />}
                amount={totalSales}
                cardType="sales"
                active={location.pathname === "/home/sales"}
              />
            </Link>

            <Link
              to={"/home/stocks"} onClick={clearFilter}
              style={{ color: "#090909", textDecoration: "none" }}>
              <InventoryCard
                title={"Stocks"}
                icon={<CiBoxes size={35} />}
                amount={`${totalStocks}`}
                cardType="stock"
                active={location.pathname === "/home/stocks"}
              />
            </Link>
            {renderActions}
          </InventoryCardContainerDiv>
          <FilterComponentDiv>{renderFilters}</FilterComponentDiv>
          <ChildrenDiv>
            {renderTotalitems}
            {children}
          </ChildrenDiv>
        </LayoutContainerDiv>
        <DrawerC
          cardtitle={manageTitle()}
          open={open}
          closeDrawer={() => closeDrawer()}>
          {manageForm()}
        </DrawerC>
      </DashboardMainDiv>
    </>
  );
}
