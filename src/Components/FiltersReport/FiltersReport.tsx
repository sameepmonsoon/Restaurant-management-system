import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
// import { TextField } from "../TextField";
import { RxDividerVertical } from "react-icons/rx";
import DashboardButton from "../DashboardButton/DashboardButton";
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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import {
  DateRange,
  DateRangePicker,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import { useFilterStore } from "../../Pages/states/TablesFilter.state";
import dayjs, { Dayjs } from "dayjs";
// Date picker
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// End of date picker

const FiltersReport = () => {
  const { searchTerm, setSearchTerm } = useFilterStore((state: any) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));
  const current = new Date();
  const todayDate = `${current.getMonth()}/${current.getDate()}/${current.getFullYear()}`;
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(todayDate));
  const [range, setRange] = React.useState<DateRange<Dayjs>>([null, null]);
  function generateReport() {
    // API Call
  }

  function printReport() {
    window.open(`http://backend.hq.kpop.com.np/excel/download`, "_blank");
  }

  return (
    <MyContext.Consumer>
      {(value) => {
        // @ts-ignore
        const { dateAndTime } = value;
        function changeValue(e: any) {
          if (e.target.value === "daily") {
            // console.log("inside change value", value, e.target.value);
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
        function doubleDigitDate(value: any) {
          return value;
        }
        return (
          <ReportFilterMainDiv>
            {/* @ts-ignore */}
            <ReportFilterInnerDiv>
              <ReportFilterType>
                <ReportType> Report Type </ReportType>
                <Select name="select" id="" onChange={changeValue}>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </Select>
              </ReportFilterType>
            </ReportFilterInnerDiv>
            <DateButtonBox>
              {dateAndTime.isDaily ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="day"
                    views={["day", "month", "year"]}
                    // label="Today"
                    value={date}
                    onChange={(newValue) => {
                      // @ts-ignore
                      let finalDate = `${doubleDigitDate(
                        // @ts-ignore

                        newValue.$D // @ts-ignore
                      )}-${doubleDigitDate(newValue.$M + 1)}-${doubleDigitDate(
                        // @ts-ignore

                        newValue.$y
                      )}`;
                      setDate(newValue);
                      value?.setDateAndTime({
                        ...value.dateAndTime,
                        date1: finalDate,
                        date2: "",
                      });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              ) : (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  localeText={{ start: "Check-in", end: "Check-out" }}>
                  <DateRangePicker
                    value={range}
                    onChange={(newValue) => {
                      newValue.map((dateValue, idx) => {
                        if (dateValue) {
                          // @ts-ignore

                          let finalDate = `${doubleDigitDate(
                            // @ts-ignore
                            dateValue.$D
                            // @ts-ignore
                          )}-${doubleDigitDate(dateValue.$M)}-${doubleDigitDate(
                            // @ts-ignore
                            dateValue.$y
                          )}`;
                          idx === 0
                            ? // Logical errror month is 1 less
                              value?.setDateAndTime({
                                ...value.dateAndTime,
                                date1: finalDate,
                              })
                            : // set date1
                              // Logical errror month is 1 less
                              value?.setDateAndTime({
                                ...value.dateAndTime,
                                date2: finalDate,
                              });
                          // set date2
                        }
                      });
                      setRange(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
              )}
              <DashboardButton
                icon={""}
                title={"Generate Report"}
                location={location.pathname.includes("/reports")}
                disableTransition={true}
                onClick={() => {
                  value?.setGenerateReport(true);
                  value?.setDateAndTime(dateAndTime);
                }}
              />
            </DateButtonBox>
            <ReportFilterPrintIcon onClick={printReport}>
              <AiOutlinePrinter size={35} />
            </ReportFilterPrintIcon>
          </ReportFilterMainDiv>
        );
      }}
    </MyContext.Consumer>
  );
};

export default FiltersReport;
