import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { TextField } from "./Components/TextField";
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
      path: "/components",
      element:<Components/>,
    },  
    {
      path: "/components/textfield",
      element:<TextField/>,
    },
    {
      path:"/home",
      element:<Dashboard/>
    } , 
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
