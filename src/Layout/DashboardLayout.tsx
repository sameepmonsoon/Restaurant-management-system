import React from 'react'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import Table from '../PageComponent/Dashboard/Table/Table'
import DashboardHeaderLayout from './DashboardHeaderLayout'

export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  return (
    <>
        <Sider/>  
<br /><br /><br />
        <Navbar navTitle={"Dashboard"} navbarCardName={"Purchase"} arrowIcon={true}/>
        <br /><br />
        <Table/>
        <br />
        <DashboardHeaderLayout>
        {renderActions} 
        </DashboardHeaderLayout>
        {renderFilters}
        {children}
    </>
  )
}
