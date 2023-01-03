import {
  createBrowserRouter,
  RouterProvider} from "react-router-dom";
import { Login, Register } from "./Pages";
import Components from "./Pages/Components";
import Dashboard from "./Pages/Dashboard";
  import {
  Route,
  Link,
} from "react-router-dom";
import InventoryCard from "./Components/InventoryCard/InventoryCard";
import { TextField } from "./Components/TextField";
import {MdOutlineShoppingCart} from 'react-icons/md'

import Sider from "./PageComponent/Dashboard/Sider/Sider";
import Snackbar from "./Components/Snackbar/Snackbar";
import { ToastContainer } from "react-toastify";
import Table from "./PageComponent/Dashboard/Table/Table";
import Sales from "./Pages/Sales";
import Stocks from "./Pages/Stocks";
import Purchase from "./Pages/Purchase";


function App(props: any) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element:<Register/>,
    },
    {
      path:"/home",
      element:<Dashboard/>,
      children:[
        {
          path:"purchase",
          element:<Purchase/>
        },
        {
          path:"sales",
          element:<Sales/>
        },
        {
          path:"stocks",
          element:<Stocks/>
        }
      ]
    },  
    {
      path:"/home/purchase",
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
      path: "pagecomponent/sider",
      element: <Sider/>
    }

,
    {
      path: "*",
      element: <h1>page not found</h1>,
    },
  ]);
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router} />
    </>
   
  )
}

export default App;
