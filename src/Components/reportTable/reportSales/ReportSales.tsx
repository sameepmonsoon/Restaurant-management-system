import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PurchaseTable from "../../../PageComponent/Dashboard/Table/PurchaseTable";
import { MyContext } from "../../../Pages/Reports";
import { HTTPMethods } from "../../../Utils/HTTPMock";

export default function ReportSales() {

const context=useContext(MyContext)
// @ts-ignore
const {dateAndTime}=context
console.log("context value is",context)
const date1=dateAndTime.date1
const date2=dateAndTime.date2
const isDaily=dateAndTime.isDaily
const isMonthly=dateAndTime.isMonthly 
const isWeekly=dateAndTime.isWeekly
const [data,setData]=useState([])
const [loading,setLoading]=useState(false)

    function fetchReportSales(){
        setLoading(true)
        // API CALL 
        HTTPMethods.get(`/report/purchase?page=1&offset=500&date1=${date1}&date2=${date2}&daily=${isDaily}&monthly=${isMonthly}&weekly=${isWeekly}`)
        .then(function(resp){
            // something
            setData(resp.data)
        })
        .catch(function(err){
            // Show Toast
            toast.error(err.message, {
                theme: "colored",
                hideProgressBar: true,
                autoClose: 1000,
                toastId: "log1",
              })
        })
        .finally(function(){
            setLoading(false)
        })

    }
  useEffect(() => {

    fetchReportSales()
    // fetchProducts();
  }, [date1,date2,isDaily,isMonthly,isWeekly]);

  return loading ? (
    <div>loading...</div>
  ) : data && data.length ? (
    <h1>data</h1>
    // <PurchaseTable data={data} onDeleteSuccess={fetchProducts} />
  ) 
   : (
    <>
      {/* <FiltersReport /> */}
      <div>No Data to Show</div>
    </>
  );
}
