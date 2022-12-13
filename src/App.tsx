import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login, Register } from "./Pages";


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
      path:"*",
      element:(<h1>page not found</h1>)
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
