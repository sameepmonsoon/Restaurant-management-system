import React from 'react'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'
import Sider from '../PageComponent/Dashboard/Sider/Sider'
import DashboardHeaderLayout from './DashboardHeaderLayout'

export default function DashboardLayout({children,renderActions,renderFilters}:{children:JSX.Element,renderActions?:JSX.Element,renderFilters?:JSX.Element}) {
  return (
    <>
        <Navbar/>
        <Sider/>
        
        <DashboardHeaderLayout>
        {renderActions} 
        </DashboardHeaderLayout>
        {renderFilters}
        {children}
    </>
  )
}
