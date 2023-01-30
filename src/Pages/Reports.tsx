import React from "react";
import { MdAdd } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ActionButton from "../Components/ActionButton/ActionButton";
import DashboardLayout from "../Layout/DashboardLayout";
import ReportLayout from "../Layout/ReportLayout";
import FiltersReport from "../Components/FiltersReport/FiltersReport";

export default function Reports() {
  return (
    <ReportLayout>
      <FiltersReport />
      <Outlet />
    </ReportLayout>
  );
}
