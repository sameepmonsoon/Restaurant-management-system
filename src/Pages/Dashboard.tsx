import DashboardLayout from '../Layout/DashboardLayout'
import {useNavigate} from "react-router-dom"
import { Navigate, Outlet, useLocation } from 'react-router';
import ActionButton from '../Components/ActionButton/ActionButton';
import { MdAdd } from 'react-icons/md';
import { useDrawer } from './states/Drawer.state';

function Dashboard() {
  const location=useLocation()
  const {open,toggleDrawer}=useDrawer()
  function openDrawer(){
    console.log("inside open drawer",open)
    toggleDrawer()
  }

  function actionLabel() {
    if(location.pathname==="/home/purchase")
    return "Add Purchase"
    
    if(location.pathname==="/home/sales")
    return "Add Sales"

  }
  return (
    location.pathname==="/home"?<Navigate to={"/home/purchase"}/>:
  <DashboardLayout
    renderActions={
      // Please make a button as a component which can be reusable in future  inside a Component directory which accepts Icon,Title and and OnClick props
      // And place it over here by replacing below code 
        
        <ActionButton
            icon={<MdAdd fontSize="1.4em" />}
            label={actionLabel()}
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
