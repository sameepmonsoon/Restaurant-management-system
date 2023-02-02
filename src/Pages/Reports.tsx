import { Navigate, Outlet, useLocation } from "react-router-dom";
import ReportLayout from "../Layout/ReportLayout";
import FiltersReport from "../Components/FiltersReport/FiltersReport";

export default function Reports() {
  const location = useLocation()

  return (location.pathname=="/report")?
    (<Navigate to ={"/report/purchase"}/>)
  :(
    <ReportLayout>
      <FiltersReport />

      <Outlet />
    </ReportLayout>
  );
}



