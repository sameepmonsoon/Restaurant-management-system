import {  Outlet } from "react-router-dom";
import ReportLayout from "../Layout/ReportLayout";
import FiltersReport from "../Components/FiltersReport/FiltersReport";
import React, { useState } from "react";
type contextType={
  dateAndTime:{
    date1:null,
    date2:null,
    isMonthly:false,
    isWeekly:false,
    isDaily:false
  },
  setDateAndTime:any
}
export const MyContext = React.createContext<contextType | null >(null);
export default function Reports() {  
  const [dateAndTime,setDateAndTime]=useState<any>({
    date1:null,
    date2:null,
    isMonthly:false,
    isWeekly:false,
    isDaily:false
  })
  return (
    // @ts-ignore
    <MyContext.Provider value={{dateAndTime,setDateAndTime}}>
        <ReportLayout>
          <FiltersReport />
              <Outlet />
        </ReportLayout>
    </MyContext.Provider>

  );
}



