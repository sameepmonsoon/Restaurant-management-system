import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { DropdownHeader, DropDownOptions, ReportDiv } from "./ReportButton.styles";


const ReportButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    return ( 
        <ReportDiv >
            <DropdownHeader onClick={handleClick}>
                <div>
                    <AiFillPrinter size={20}/>
                    <span> Report</span>
                </div>
                <RiArrowDropUpLine size={35}/>

            </DropdownHeader>

            {
                 (
                    isOpen && <DropDownOptions>
                        <Link to ="/report/purchase" className="link">
                            <li>Purchase</li>
                        </Link>

                        <Link to="/report/sales" className="link">
                            <li>Sell</li>
                        </Link>

                        <Link to="/report/stocks" className="link">
                            <li>Stock</li>
                        </Link>

                        <Link to="/report/profit_anaylze" className="link">
                            <li>Profit Analysis</li>
                        </Link>
                    </DropDownOptions>
                )
            }
            
        </ReportDiv>

     );
}
 
export default ReportButton;