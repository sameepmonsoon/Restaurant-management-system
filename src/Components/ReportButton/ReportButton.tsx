import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  DropDownLabelDiv,
} from "./ReportButton.styles";

const ReportButton = (props: ReportButtonTypes) => {
  const {
    icon1,
    label,
    icon2,
    icon3,
    options,
    activeSider,
    openDropDown,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ReportDiv active={activeSider} {...rest}>
      <DropdownHeader onClick={handleClick} active={activeSider}>
        <ReportInnerDiv active={activeSider}>
          <DropDownDiv active={activeSider}>
            <DropDownIcon>{icon1}</DropDownIcon>
          </DropDownDiv>
          <DropDownLabelDiv>
            <DropDownText>{label}</DropDownText>

            <DropDownArrow>
              {isOpen === true ? <>{icon2}</> : <> {icon3}</>}
            </DropDownArrow>
          </DropDownLabelDiv>
        </ReportInnerDiv>
      </DropdownHeader>

      {isOpen && (
        <DropDownOptions>
          {options.map((option) => (
            <ReportLink key={option.label} to={option.link}>
              <li
                style={{
                  color:
                    location.pathname === option.link ? "#313131" : "#979797",
                }}>
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
