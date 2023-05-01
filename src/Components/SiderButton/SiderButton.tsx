import React from "react";
import { Children, ChildrenCard, ChildrenItem, MainCard } from "./SiderButton.Style";
import { TitleCard } from "./SiderButton.Style";
import { TitleIcon } from "./SiderButton.Style";
import { ChildrenIcon } from "./SiderButton.Style";
import { FaBeer } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Title } from "./SiderButton.Style";

// import items from "../SideBar/data.json"

type card = {
  titleIcon: React.ReactNode;
  title: string;
  childrenIcon?: React.ReactNode;
  children?: JSX.Element;
};
const SiderButton = (props: card) => {
  const { titleIcon, title, childrenIcon, children } = props;
  return (
    <>
      <MainCard>
        <TitleCard>
          <TitleIcon>{titleIcon}</TitleIcon>
          <Title>{title}</Title>
          {
            childrenIcon && 
            <ChildrenIcon>
              <RiArrowDropDownLine />
            </ChildrenIcon>
          }
        </TitleCard>
        <ChildrenCard>
       <Children>
        <ChildrenItem>Purchase</ChildrenItem>
        <ChildrenItem>Sales</ChildrenItem>
        <ChildrenItem>Stock</ChildrenItem>
       </Children>
       </ChildrenCard>
      </MainCard>
    </>
  );
};

export default SiderButton;
