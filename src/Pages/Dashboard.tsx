import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar'

export default function Dashboard() {
  return (
  <DashboardLayout
    renderActions={
      // Please make a button as a component which can be reusable in future  inside a Component directory which accepts Icon,Title and and OnClick props
      // And place it over here by replacing below code 
        <div>Add purchase button</div>
    }
    renderFilters={
      <div>Filters</div>
    }
  >
      <h1>Dashboard Homepage</h1>
  </DashboardLayout>
)
}
