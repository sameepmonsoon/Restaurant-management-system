import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {BiPurchaseTag} from 'react-icons/bi'
import {FaBoxes} from 'react-icons/fa'
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
        <div>logo Component here</div>
        <Sider/>  
        <Navbar navTitle={"Dashboard"} navbarCardName={"Purchase"} arrowIcon={true}/>
        <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
        <InventoryCard  title={"sales"} icon={<BiPurchaseTag size={30}/>} amount={"10,000"} cardType="sales" active={false}/>
        <InventoryCard  title={"stocks"} icon={<FaBoxes size={30}/>} amount={"10,000"} cardType="stock" active={false}/>
        <div><b>Add button component here</b></div>
          <b>Filters here</b>
          <div><b>Cart icon  cart-box</b></div>
        
        {renderActions} 
      
        {renderFilters}
        {children}

        


        </DashboardMainDiv>
    </>
  )
}
