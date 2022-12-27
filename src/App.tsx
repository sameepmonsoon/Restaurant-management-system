import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { TextField } from "./Components/TextField";
import SiderButton from "./Components/SiderButton/SiderButton";
import { Login, Register } from "./Pages";
import Components from "./Pages/Components";
import ForgotPassword from "./Pages/ForgotPassword";
import { FaBeer } from "react-icons/fa";
import DashboardLayout from "./Layout/DashboardLayout";

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
      element: <TextField />,
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
      path: "/ForgotPassword",
      element: <ForgotPassword />,
    },
 
    {
      path: "*",
      element: <h1>page not found</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
