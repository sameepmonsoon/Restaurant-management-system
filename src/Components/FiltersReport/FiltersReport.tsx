import React, { useState } from "react";
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
import { MyContext } from "../../Pages/Reports";

const FiltersReport = () => {
  const { searchTerm, setSearchTerm } = useFilterStore((state: any) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  const [value, setValue] = useState([null, null]);
  return (
    <>
      <ReportFilterMainDiv>
        <ReportFilterInnerDiv>
          {
            console.log("value inside consumer",value)
          }
          <ReportFilterType>
            <p> Report Type </p>
            <select name="select" id="" onChange={changeValue}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </ReportFilterType>
          <ReportFilterTextDate>
            <div>start date</div>
            <HiArrowLongDown />
            <div>end date</div>
          </ReportFilterTextDate>
        </ReportFilterInnerDiv>
        <ReportFilterDateBox>
          <TextField type="date" label="" />
          <DashboardButton
            icon={""}
            title={"GENERATE REPORT"}
            location={location.pathname === "/report"}
            disableTransition={true}
          />
        </ReportFilterDateBox>
        <ReportFilterPrintIcon>
          <AiOutlinePrinter size={35} />
        </ReportFilterPrintIcon>
      </ReportFilterMainDiv>}
      }

      </MyContext.Consumer>
  );
};

export default FiltersReport;
