import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
// import { TextField } from "../TextField";
import { Dayjs } from "dayjs";
import { RxDividerVertical } from "react-icons/rx";
import DashboardButton from "../DashboardButton/DashboardButton";
import { useFilterStore } from "../../store/filtered";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import {
  ReportFilterDateBox,
  DateButtonBox,
  ReportFilterMainDiv,
  ReportFilterPrintIcon,
  ReportFilterTextDate,
  ReportFilterType,
  ReportFilterInnerDiv,
  ReportType,
  Select,
  ReportWeekly,
  ReportWeeklyDiv,
  ReportDaily,
} from "./FiltersReport.styles";
import { MyContext } from "../../Pages/Reports";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";

const FiltersReport = () => {
  const { searchTerm, setSearchTerm } = useFilterStore((state: any) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  return (
    <MyContext.Consumer>
      {(value) => {
        function changeValue(e: any) {
          if (e.target.value === "daily") {
            console.log("inside change value", value, e.target.value);
            return value?.setDateAndTime({
              date1: null,
              date2: null,
              isMonthly: false,
              isWeekly: false,
              isDaily: true,
            });
            // value.isMonthly=false
            // value.isWeekly=false
            // return value.isDaily=true// change to daily
          }
          if (e.target.value === "monthly") {
            return value?.setDateAndTime({
              date1: null,
              date2: null,
              isMonthly: true,
              isWeekly: false,
              isDaily: false,
            });
          }
          if (e.target.value === "weekly") {
            return value?.setDateAndTime({
              date1: null,
              date2: null,
              isMonthly: false,
              isWeekly: true,
              isDaily: false,
            });
          }
        }
        return (
          <ReportFilterMainDiv>
            {/* @ts-ignore */}
            <ReportFilterInnerDiv>
              {console.log("value inside consumer", value)}
              <ReportFilterType>
                <p> Report Type </p>
                <select name="select" id="" onChange={changeValue}>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </ReportFilterType>
              <ReportFilterTextDate>
                {searchTerm === "weekly" || searchTerm === "monthly" ? (
                  <>
                    <ReportWeekly>
                      <ReportWeeklyDiv>start date</ReportWeeklyDiv>
                      <RxDividerVertical />
                      <ReportWeeklyDiv>end date</ReportWeeklyDiv>
                    </ReportWeekly>
                  </>
                ) : (
                  <>
                    <ReportDaily>
                      <FiArrowLeftCircle size={25} />
                      single date
                      <FiArrowRightCircle size={25} />
                    </ReportDaily>
                  </>
                )}
              </ReportFilterTextDate>
            </ReportFilterInnerDiv>
            <DateButtonBox>
              {searchTerm === "weekly" || searchTerm === "monthly" ? (
                <></>
              ) : (
                <>
                  <ReportFilterDateBox></ReportFilterDateBox>
                </>
              )}
              <DashboardButton
                icon={""}
                title={"Generate Report"}
                location={location.pathname.includes("/reports")}
                disableTransition={true}
              />
            </DateButtonBox>
            <ReportFilterPrintIcon>
              <AiOutlinePrinter size={35} />
            </ReportFilterPrintIcon>
          </ReportFilterMainDiv>
        );
      }}
    </MyContext.Consumer>
  );
};

export default FiltersReport;
