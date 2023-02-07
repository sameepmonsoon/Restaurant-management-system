import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Purchase from "../../Pages/Purchase";
import Sales from "../../Pages/Sales";
import Stocks from "../../Pages/Stocks";
import { TableTotalAmountType } from "../../Types/Components/TableTotalAmount";
import { TotalAmountDiv, TotalAmountLabel, TotalAmountPrice } from "./TableTotalAmount.styles";

const TableTotalAmount = (props: TableTotalAmountType) => {
    const {reportLabel, reportAmount} = props

   let component;
    const location = useLocation()

   if(location.pathname=== "/report/purchase" ){
        component =  <Purchase/>
    }else if (location.pathname==="/report/sales"){
        component = <Sales/>
    }else if(location.pathname==="/report/stocks"){
        component = <Stocks/>
    }

    return(
        <>     
            {component}
            <TotalAmountDiv>
                <TotalAmountLabel>
                    Total <span>{reportLabel} </span>
                </TotalAmountLabel>

                <TotalAmountPrice>
                    Rs. <span> {reportAmount ?  reportAmount: 0} </span>
                </TotalAmountPrice>
            </TotalAmountDiv>
        </>
    )
}
 
export default TableTotalAmount;