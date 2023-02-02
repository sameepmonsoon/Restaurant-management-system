import React from "react";
import { MdAdd } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ActionButton from "../Components/ActionButton/ActionButton";
import DashboardLayout from "../Layout/DashboardLayout";
import TableLayout from "../Layout/TableLayout";

export default function Tables() {
  return (
    <TableLayout>
      <Outlet />
    </TableLayout>
  );
}
