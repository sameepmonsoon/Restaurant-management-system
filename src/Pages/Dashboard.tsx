import DashboardLayout from '../Layout/DashboardLayout'
import {useNavigate} from "react-router-dom"
import { Navigate, Outlet, useLocation } from 'react-router';
import ActionButton from '../Components/ActionButton/ActionButton';
import { MdAdd } from 'react-icons/md';

function Dashboard() {
  const location=useLocation()
  function openDrawer(){

  }
  return (
    location.pathname==="/home"?<Navigate to={"/home/purchase"}/>:
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
