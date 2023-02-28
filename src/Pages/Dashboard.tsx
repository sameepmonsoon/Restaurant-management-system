import DashboardLayout from "../Layout/DashboardLayout";
import { Navigate, Outlet, useLocation } from "react-router";
import ActionButton from "../Components/ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
import { useDrawer } from "./states/Drawer.state";
import Filters from "../Components/Filters/Filters";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";
import TotalItems from "../Components/TotalItems/TotalItems";
import { DOMToggleButtonName } from "../Utils/DOMToggleButtonName";
import {
  useProductStore,
  useSalesStore,
  useTotalAmountStore,
} from "./states/TablesFilter.state";

function Dashboard() {
  const location = useLocation();
  const { totalAmount } = useTotalAmountStore((state: any) => ({
    totalAmount: state.totalAmounts,
  }));
  const [products] = useProductStore((state: any) => [
    state.products,
    state.fetchProducts,
  ]);
  const [salesProducts] = useSalesStore((state: any) => [
    state.salesProducts,
    state.loading,
    state.fetchSales,
  ]);
  const { open, toggleDrawer } = useDrawer();
  function openDrawer() {
    toggleDrawer();
  }
  // for total cart items
  const cart_total_sales = salesProducts.length
    ? salesProducts.length !== undefined
      ? `${salesProducts.length}`
      : "0"
    : "Loading";
  const cart_total_purchase = products.length
    ? `${products.length}`
    : products.length === 0
    ? " 0"
    : "Loading";
  const cart_total_stocks =
    totalAmount.total_stocks !== undefined
      ? totalAmount.total_stocks !== 0
        ? `${totalAmount.total_stocks}`
        : "0"
      : "loading";

  function getTotalItems() {
    if (location.pathname === "/home/stocks") {
      return cart_total_stocks;
    } else if (location.pathname === "/home/sales") {
      return cart_total_sales;
    } else if (location.pathname === "/home/purchase") {
      return cart_total_purchase;
    } else return "0";
  }
  // for action label
  function actionLabel() {
    if (location.pathname === "/home/purchase") return "Add Purchase";

    if (location.pathname === "/home/sales") return "Add Sales";
  }

  // function for filter Component---purchase/sales/stocks
  function manageFilterTitle() {
    if (location.pathname === "/home/purchase") {
      return "Purchase";
    }
    if (location.pathname === "/home/sales") {
      return "Sales";
    } else {
      return "Stocks";
    }
  }

  return location.pathname === "/home" ? (
    <Navigate to={"/home/purchase"} />
  ) : (
    <DashboardLayout
      renderActions={
        // Please make a button as a component which can be reusable in future  inside a Component directory which accepts Icon,Title and and OnClick props
        // And place it over here by replacing below code
        <ActionButton
          icon={<MdAdd fontSize="1.4em" />}
          label={actionLabel()}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            // Change the Edit button name to Add
            DOMToggleButtonName("Add");
            openDrawer();
          }}
        />
      }
      renderFilters={
        <Filters
          title={manageFilterTitle()}
          icon={<FiSearch size={20} />}
          dateIcon={<FiCalendar size={20} />}
          statusIcon={<RiLoader2Fill size={20} />}
        />
      }
      renderTotalitems={<TotalItems totalItems={getTotalItems()} />}>
      <Outlet />
    </DashboardLayout>
  );
}

export default Dashboard;
