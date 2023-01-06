import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import {InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
import { 
  DashboardMainDiv
} from './DashboardLayout.styles'
import DrawerC from '../PageComponent/Dashboard/Drawer/Drawer'
import { useDrawer } from '../Pages/states/Drawer.state'
import { TextField } from '../Components/TextField'
import { useLocation, useNavigate } from 'react-router-dom'
import PurchaseForm from '../PageComponent/forms/PurchaseForm'
import SalesForm from '../PageComponent/forms/SalesForm'

export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  const {open,toggleDrawer}=useDrawer()
  function closeDrawer(){
    toggleDrawer()
  }
  const location=useLocation ()
  function manageForm(){
    if(location.pathname==="/home/purchase"){
      return <PurchaseForm/>
    }
    if(location.pathname==="/home/sales"){
      return <SalesForm/>
    }

  }

  function manageTitle(){
    if(location.pathname==="/home/purchase"){
      return "Purchase"
    }
    if(location.pathname==="/home/sales"){
      return "Sales"
    }
    return "Title"
  }
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
          <DrawerC cardtitle={manageTitle()} open={open} closeDrawer={()=>closeDrawer()}>
              {manageForm()}
          </DrawerC>
        </DashboardMainDiv>
    </>
  )
}


