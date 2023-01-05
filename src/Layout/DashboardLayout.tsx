import React, { useEffect, useState } from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { toast } from 'react-toastify'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import { InventoryDataType } from '../Types/Components/InventoryDataTpes'
import { HTTPMethods } from '../Utils/HTTPMock'
import { ChildrenDiv, InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
// import {InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
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
  const [purchases, setPurchase] = useState<InventoryDataType>()
  useEffect(()=>{
    HTTPMethods.get('/total/readTotal')
    .then(async (res) => {
        setPurchase(res.data)
    })
    .catch(async (err) => {
        
      toast.info("Server is down to display the data.",{
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
        toastId: 'info1'
      })
    })
  },[])
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
            <InventoryCard  title={"Purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={`Rs. ${purchases?.totalpurchase}`} cardType="purchase" active={false}/>
            <InventoryCard  title={"Sales"} icon={<MdOutlineShoppingCart size={30}/>} amount={`Rs. ${purchases?.total_sales}`} cardType="purchase" active={false}/>
            <InventoryCard  title={"Stocks"} icon={<MdOutlineShoppingCart size={30}/>} amount={`${purchases?.totalpurchase} products`} cardType="purchase" active={false}/>
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


