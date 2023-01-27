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
} from "./ReportButton.styles";

const ReportButton = (props: ReportButtonTypes) => {
    const {icon1, label, icon2, icon3, options} = props
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
                {icon1}
          </DropDownIcon>
          <DropDownText> 
                {label}
          </DropDownText>
        </DropDownDiv>
        <DropDownArrow>
          {isOpen === true ? (
            <div>{icon2} </div> 
          ) : (
            <div>{icon3}</div>
          )}
        </DropDownArrow>
       
      </DropdownHeader>

      {isOpen && (
        <DropDownOptions>
            {
                options.map(option =>(
                    <ReportLink key={option.label} to={option.link} className= {"link"}>
                        <li>{option.label}</li>
                    </ReportLink>
                ))
            }
          

          
        </DropDownOptions>
      )}
    </ReportDiv>
  );
};

export default ReportButton;
