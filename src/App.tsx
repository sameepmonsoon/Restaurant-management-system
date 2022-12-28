import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import InventoryCard from "./Components/InventoryCard/InventoryCard";
import { TextField } from "./Components/TextField";
import {MdOutlineShoppingCart} from 'react-icons/md'
import {BiPurchaseTag} from 'react-icons/bi'
import {CiBoxes} from 'react-icons/ci'
import { Login, Register } from "./Pages";
import Components from "./Pages/Components";
import Dashboard from "./Pages/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import { FaBeer } from "react-icons/fa";
import {MdAdd} from "react-icons/md";
import ActionButton from "./Components/ActionButton/ActionButton";
import SiderButton from "./Components/SiderButton/SiderButton";



function App(props: any) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/components",
      element: <Components />,
    },
    {
      path: "/components/textfield",
      element:<TextField/>,
      
    },
    {
      path: "/components/siderbutton",
      element:<SiderButton titleIcon={<FaBeer/>} title="Title" childrenIcon={<FaBeer/>}>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
         </SiderButton>,
    },
    {
      path:"/home",
      element:<Dashboard/>
    },
    {
      path:"/components/inventorycard",
      element:<InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={true}/>
    } , 
   
    {
      path: "/components/actionButton",
      element: <ActionButton icon={<MdAdd  fontSize="1.4em"/>} label={"ADD PURCHASE"} onClick={(e: React.MouseEvent<HTMLElement>) => console.log("Clicked")} />
    },
    {
      path: "*",
      element: <h1>page not found</h1>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;
