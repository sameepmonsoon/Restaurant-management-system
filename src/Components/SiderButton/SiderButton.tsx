import React from "react";
import { MainCard } from "./SiderButton.Style";
import { TitleCard } from "./SiderButton.Style";
import { Icon } from "./SiderButton.Style";
import { Icon2 } from "./SiderButton.Style";
import { FaBeer } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Title } from "./SiderButton.Style";
// import items from "../SideBar/data.json"
type card = {
  titleIcon: React.ReactNode;
  title: string;
  childrenIcon?: React.ReactNode;
  children?:JSX.Element
};
const SiderButton = (props: card) => {
  const {titleIcon,title,childrenIcon,children}=props
  console.log("title",title)
  return (
    <>
      <MainCard>
        <TitleCard>
          <Icon>{titleIcon}</Icon>
          <Title>{title}</Title>
          {
            childrenIcon && 
            <Icon2>
              <RiArrowDropDownLine />
            </Icon2>
          }
          

        </TitleCard>
        {
          children
        }
      </MainCard>
    </>
  );
};

export default SiderButton;
