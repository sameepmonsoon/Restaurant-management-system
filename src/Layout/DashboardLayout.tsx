import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {BiPurchaseTag} from 'react-icons/bi'
import {FaBoxes} from 'react-icons/fa'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import { NavbarMainDiv } from '../PageComponent/Dashboard/Navbar/Navbar.styles'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import { ChildrenDiv, FilterComponentDiv, InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
import { 

  DashboardMainDiv, 


} from './DashboardLayout.styles'

import DrawerC from '../PageComponent/Dashboard/Drawer/Drawer'
export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  function closeDrawer(){

  }
  return (
    <>
    <DashboardMainDiv>
         <Sider/>  
       <LayoutContainerDiv>
         <Navbar navTitle={"Dashboard"} navbarCardName={"Purchase"} arrowIcon={true}/>
         <InventoryCardContainerDiv>
          <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
          <InventoryCard  title={"sales"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="sales" active={false}/>
          <InventoryCard  title={"stock"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="stock" active={false}/>
             {renderActions}
          </InventoryCardContainerDiv>
        <FilterComponentDiv>
                  {renderFilters}
                  </FilterComponentDiv> 
                  <ChildrenDiv>
                  {children}
                  </ChildrenDiv>
                </LayoutContainerDiv>
          <DrawerC open={true} closeDrawer={closeDrawer} cardtitle={"Purchase"}/>      
        </DashboardMainDiv>
    </>
  )
}
