import DashboardLayout from "../Layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet, useLocation } from "react-router";
import ActionButton from "../Components/ActionButton/ActionButton";
import { MdAdd } from "react-icons/md";
import { useDrawer } from "./states/Drawer.state";
import Filters from "../Components/Filters/Filters";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";
import TotalItems from "../Components/TotalItems/TotalItems";
import { DOMToggleButtonName } from "../Utils/DOMToggleButtonName";


function Dashboard() {
  const location = useLocation();

  const { open, toggleDrawer } = useDrawer();
  function openDrawer() {
    console.log("inside open drawer", open);
    toggleDrawer();
  }

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
            DOMToggleButtonName("Add")
            openDrawer()
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
      renderTotalitems={<TotalItems totalItems={1234567} />}>
      <Outlet />
    </DashboardLayout>
  );
}

export default Dashboard;
