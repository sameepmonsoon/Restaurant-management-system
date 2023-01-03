import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import { NavbarMainDiv } from '../PageComponent/Dashboard/Navbar/Navbar.styles'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import { ChildrenDiv, InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
import { 

  DashboardMainDiv, 


} from './DashboardLayout.styles'

export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  return (
    <>
    <DashboardMainDiv>
         <Sider/>  
       <LayoutContainerDiv>
         <Navbar navTitle={"Dashboard"} navbarCardName={"Purchase"} arrowIcon={true}/>
         <InventoryCardContainerDiv>
          <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
          <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
          <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
             {renderActions}
          </InventoryCardContainerDiv>
          {renderFilters}
          {children}
        </LayoutContainerDiv>
        </DashboardMainDiv>
    </>
  )
}
