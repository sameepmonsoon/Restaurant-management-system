import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  DropdownHeader,
  DropDownOptions,
  ReportDiv,
  DropDownIcon,
  DropDownText,
  DropDownArrow,
  DropDownDiv,
  ReportLink,
} from "./ReportButton.styles";

const ReportButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ReportDiv>
      <DropdownHeader onClick={handleClick}>
        <DropDownDiv>
          <DropDownIcon>
            <AiFillPrinter size={25} />
          </DropDownIcon>
          <DropDownText> Report</DropDownText>
        </DropDownDiv>
        <DropDownArrow>
          {isOpen === true ? (
            <RiArrowDropUpLine size={35} />
          ) : (
            <RiArrowDropDownLine size={35} />
          )}
        </DropDownArrow>
      </DropdownHeader>

      {isOpen && (
        <DropDownOptions>
          <ReportLink to="/report/purchase" className="link">
            <li>Purchase</li>
          </ReportLink>

          <ReportLink to="/report/sales" className="link">
            <li>Sell</li>
          </ReportLink>

          <ReportLink to="/report/stocks" className="link">
            <li>Stock</li>
          </ReportLink>

          <ReportLink to="/report/profit_anaylze" className="link">
            <li>Profit Analysis</li>
          </ReportLink>
        </DropDownOptions>
      )}
    </ReportDiv>
  );
};

export default ReportButton;
