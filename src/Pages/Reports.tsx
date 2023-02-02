import {  Outlet } from "react-router-dom";
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



