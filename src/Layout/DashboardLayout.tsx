import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {BiPurchaseTag} from 'react-icons/bi'
import {FaBoxes} from 'react-icons/fa'
import InventoryCard from '../Components/InventoryCard/InventoryCard'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import Table from '../PageComponent/Dashboard/Table/Table'
import DashboardHeaderLayout from './DashboardHeaderLayout'
import { 
  DashboardBodyComponents, 
  DashboardInventoryCardDiv, 
  DashboardMainDiv, 
  DashboardNavbarBody, 
  DashboardSiderDiv,
  DashboardBodyTable,
  DashboardFilterComponent

} from './DashboardLayout.styles'

export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  return (
    <>
    <DashboardMainDiv>
        <DashboardSiderDiv>
        <div>logo Component here</div>
        <Sider/>  
        </DashboardSiderDiv>
        <DashboardNavbarBody>
        <Navbar navTitle={"Dashboard"} navbarCardName={"Purchase"} arrowIcon={true}/>
        <DashboardBodyComponents>
        <DashboardInventoryCardDiv>  
        <InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={false}/>
        <InventoryCard  title={"sales"} icon={<BiPurchaseTag size={30}/>} amount={"10,000"} cardType="sales" active={false}/>
        <InventoryCard  title={"stocks"} icon={<FaBoxes size={30}/>} amount={"10,000"} cardType="stock" active={false}/>
        <div><b>Add button component here</b></div>
        </DashboardInventoryCardDiv>
        <DashboardFilterComponent><b>Filters here</b></DashboardFilterComponent>
        <DashboardBodyTable>
          <div><b>Cart icon  cart-box</b></div>
        </DashboardBodyTable>
        
        <DashboardHeaderLayout>
        {renderActions} 
      
        </DashboardHeaderLayout>
        {renderFilters}
        {children}

        


        </DashboardBodyComponents>
        </DashboardNavbarBody>
        </DashboardMainDiv>
    </>
  )
}
