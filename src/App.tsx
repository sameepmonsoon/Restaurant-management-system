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


function App(props:any) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <Login/>
      ),
    },
    {
      path: "/register",
      element:<Register/>,
    },
    {
      path:"/home",
      element:<Dashboard/>
    },  
    {
      path: "/components",
      element:<Components/>,
    }
    
    // ,  
    // {
    //   path: "/components/textfield",
    //   element:<TextField/>,
    // },
    // {
    //   path:"/components/inventorycard",
    //   element:<InventoryCard  title={"purchase"} icon={<MdOutlineShoppingCart size={30}/>} amount={"10,000"} cardType="purchase" active={true}/>
    // } 
    , 
   
    {
      path:"*",
      element:(<h1>page not found</h1>)
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
