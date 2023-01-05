import React, { useEffect, useState } from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { toast } from 'react-toastify'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import { NavbarMainDiv } from '../PageComponent/Dashboard/Navbar/Navbar.styles'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import { InventoryDataType } from '../Types/Components/InventoryDataTpes'
import { HTTPMethods } from '../Utils/HTTPMock'
import { ChildrenDiv, InventoryCardContainerDiv, LayoutContainerDiv } from './DashboardLayout.style'
import { 

  DashboardMainDiv, 


} from './DashboardLayout.styles'

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
        </DashboardMainDiv>
    </>
  )
}


