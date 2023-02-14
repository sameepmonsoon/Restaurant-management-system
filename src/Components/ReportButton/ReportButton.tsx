import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ReportButtonTypes } from "../../Types/Components/ReportButtonTypes";
import {
  DropdownHeader,
  DropDownOptions,
  ReportDiv,
  DropDownIcon,
  DropDownText,
  DropDownArrow,
  DropDownDiv,
  ReportLink,
  ReportInnerDiv,
} from "./ReportButton.styles";

const ReportButton = (props: ReportButtonTypes) => {
  const { icon1, label, icon2, icon3, options, activeSider } = props;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ReportDiv active={activeSider}>
      <DropdownHeader onClick={handleClick} active={activeSider}>
        <ReportInnerDiv active={activeSider}>
          <DropDownDiv>
            <DropDownIcon>{icon1}</DropDownIcon>
            <DropDownText>{label}</DropDownText>
          </DropDownDiv>
          <DropDownArrow>
            {isOpen === true ? <>{icon2}</> : <> {icon3}</>}
          </DropDownArrow>
        </ReportInnerDiv>
      </DropdownHeader>

      {isOpen && (
        <DropDownOptions>
          {options.map((option) => (
            <ReportLink key={option.label} to={option.link} >
              <li style={{color: location.pathname=== option.link? "#313131": "#979797"}}>
                {option.label}
              </li>
            </ReportLink>
          ))}
        </DropDownOptions>
      )}
    </ReportDiv>
  );
};

export default ReportButton;
