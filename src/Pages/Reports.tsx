import React from 'react'
import { MdAdd } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import ActionButton from '../Components/ActionButton/ActionButton'
import DashboardLayout from '../Layout/DashboardLayout'
import ReportLayout from '../Layout/ReportLayout'

export default function Reports() {
  return (  
    <ReportLayout>
        <Outlet />
    </ReportLayout>
  )
}
