import React from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { TextField } from "../TextField";
import { HiArrowLongDown } from "react-icons/hi2";
import DashboardButton from "../DashboardButton/DashboardButton";
import {
  ReportFilterDateBox,
  ReportFilterMainDiv,
  ReportFilterPrintIcon,
  ReportFilterTextDate,
  ReportFilterType,
} from "./FiltersReport.styles";

const FiltersReport = () => {
  return (
    <>
      <ReportFilterMainDiv>
        <ReportFilterType>
          <p> Report Type </p>
          <select name="select" id="">
            <option value="Name">Daily</option>
            <option value="Name">Weekly</option>
            <option value="Name">Monthly</option>
          </select>
        </ReportFilterType>
        <ReportFilterTextDate>
          <div>start date</div>
          <HiArrowLongDown />
          <div>end date</div>
        </ReportFilterTextDate>
        <ReportFilterDateBox>
          <TextField type="date" label="" />
          <DashboardButton icon={""} title={"GENERATE REPORT"} />
        </ReportFilterDateBox>
        <ReportFilterPrintIcon>
          <AiOutlinePrinter size={35} />
        </ReportFilterPrintIcon>
      </ReportFilterMainDiv>
    </>
  );
};

export default FiltersReport;
