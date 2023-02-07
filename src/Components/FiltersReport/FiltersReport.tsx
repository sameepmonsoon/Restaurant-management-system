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
  ReportFilterInnerDiv,
} from "./FiltersReport.styles";
import { MyContext } from "../../Pages/Reports";

const FiltersReport = () => {
  return (
    <MyContext.Consumer>
      {
        value=>{
          function changeValue(e:any){
            if(e.target.value==="daily"){
                console.log("inside change value",value,e.target.value)
                return value?.setDateAndTime({
                  date1:null,
                  date2:null,
                  isMonthly:false,
                  isWeekly:false,
                  isDaily:true
                })
              // value.isMonthly=false
              // value.isWeekly=false
              // return value.isDaily=true// change to daily
            }
            if(e.target.value==="monthly"){
              return value?.setDateAndTime({
                date1:null,
                date2:null,
                isMonthly:true,
                isWeekly:false,
                isDaily:false
              })
            }
            if(e.target.value==="weekly"){
              return value?.setDateAndTime({
                date1:null,
                date2:null,
                isMonthly:false,
                isWeekly:true,
                isDaily:false
              })
             }
          }
        return <ReportFilterMainDiv>
          {/* @ts-ignore */}
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
