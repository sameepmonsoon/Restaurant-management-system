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
        <ReportDiv>
            <DropdownHeader onClick={handleClick}>
                <div>
                    <AiFillPrinter/>
                    <span> Report</span>
                </div>
                <RiArrowDropUpLine/>

            </DropdownHeader>

            {
                 (
                    <DropDownOptions>
                        <Link to ="purchase" className="link">
                            <li>Purchase</li>
                        </Link>

                        <Link to="sales" className="link">
                            <li>Sell</li>
                        </Link>

                        <Link to="stocks" className="link">
                            <li>Stock</li>
                        </Link>

                        <Link to="purchase" className="link">
                            <li>Profit Analysis</li>
                        </Link>
                    </DropDownOptions>
                )
            }
                            <Outlet/>

        </ReportDiv>

     );
}
 
export default ReportButton;