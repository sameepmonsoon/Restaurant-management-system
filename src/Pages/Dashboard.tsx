import DashboardLayout from '../Layout/DashboardLayout'
import { HTTPMethods } from "../Utils/HTTPMock";
import { useEffect, useState } from 'react';
import { productObjectType } from '../Types/Components/ProductListsType';
import { Outlet } from 'react-router';
import ActionButton from '../Components/ActionButton/ActionButton';
import { MdAdd } from 'react-icons/md';

function Dashboard() {
  function openDrawer(){

  }
  return (
  <DashboardLayout
    renderActions={
      // Please make a button as a component which can be reusable in future  inside a Component directory which accepts Icon,Title and and OnClick props
      // And place it over here by replacing below code 
        <ActionButton
            icon={<MdAdd fontSize="1.4em" />}
            label={"ADD PURCHASE"}
            onClick={(e: React.MouseEvent<HTMLElement>) =>openDrawer()  }
          />
    }
    renderFilters={
      <div>Filters</div>
    }
  >
    <Outlet />
  </DashboardLayout>
)
}

export default Dashboard;
