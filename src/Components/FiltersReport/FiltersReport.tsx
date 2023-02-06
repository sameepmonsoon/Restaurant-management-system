import React from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { TextField } from "../TextField";
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
const FiltersReport = () => {
  const { searchTerm, setSearchTerm } = useFilterStore((state: any) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));
  return (
    <>
      <ReportFilterMainDiv>
        <ReportFilterInnerDiv>
          <ReportFilterType>
            <ReportType> Report Type </ReportType>
            <Select
              name="select"
              id="status"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}>
              <option value="daily" selected>
                Daily
              </option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </Select>
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
            <>
              <ReportFilterDateBox>
                <TextField type="date" label="" />
                <b>-</b>
                <TextField type="date" label="" />
              </ReportFilterDateBox>
            </>
          ) : (
            <>
              <ReportFilterDateBox>
                <TextField type="date" label="" />
              </ReportFilterDateBox>
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
    </>
  );
};

export default FiltersReport;
