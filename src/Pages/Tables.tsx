import React from "react";
import { MdAdd } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ActionButton from "../Components/ActionButton/ActionButton";
import DashboardLayout from "../Layout/DashboardLayout";
import TableLayout from "../Layout/TableLayout";
import FloorFirst from "./FloorFirst";

export default function Tables() {
  return (
    <TableLayout>
      <Outlet />
      {/* <FloorFirst/> */}
    </TableLayout>
  );
}
