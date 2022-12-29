import { TextField } from "../Components/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "../Components/TextField.Style";
import { MainLoginDiv } from "./Login.Style";
import { Image } from "./Login.Style";
import { FormDiv } from "./Login.Style";
import { Title } from "./Login.Style";
import { PasswordField } from "./Login.Style";
import { FormError } from "./Login.Style";
import { Caption } from "./Login.Style";
import MediaQuery from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { HTTPMethods } from "../Utils/HTTPMock";
import { useNavigationAfterTokenCheck } from "../Hooks/useNavigateToLogin";
import { ResponseType } from "../Types/Utils/ResponseTypes";

// import Toast from "../Components/Snackbar/Snackbar";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  // const redirect=useNavigationAfterTokenCheck()
  const navigate=useNavigate()
  // redirect()

  const popUpHandle =()=>{

    toast.success("successfull login",{
      theme: "colored",
      hideProgressBar: true,
      autoClose: 1000
    })

  }

  
  let schema = yup.object().shape({
    email: yup.string().email().required(" Email is required"),
    password: yup.string().min(6).required(" Password is required"),
  });


  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
    
      HTTPMethods.post("/auth/login",values)
      .then(async function(resp:any){
        console.log(resp.data)
        const {payload}=resp.data 
        const {token}=payload
        localStorage.setItem("token",token)

      // Success Message
        toast.success("successfull login",{
          theme: "colored",
          hideProgressBar: true,
          autoClose: 1000
        })
      
      return navigate("/home")
      })
      .catch(function(err){
        // Error Message
        console.log("error is",err)
      })  
      },
    validationSchema: schema,
  });

  return (
    <>
      <MainLoginDiv>
        <Image>
          <img className="img-fluid image" src={"/assets/KBLimage.jpg"} />
          <p>Welcome to kpop Dashboard</p>
        </Image>
        <FormDiv>
          <form onSubmit={handleSubmit}>
            <Title>
              <p>Login</p>
            </Title>

            <TextField
              name="email"
              onChange={handleChange}
              // error={errors.email}
              label={"Email"}
              placeholder="Enter your Email"
              defaultValue={"ashwon2000bajracharya@gmail.com"}
              
            ></TextField>
              {errors.email && touched.email ? (
              <FormError>{errors.email}</FormError>
            ) : null}

            <TextField
              name="password"
              onChange={handleChange}
              // error={errors.password}
              label={"Password"}
              placeholder="Enter your Password"
              defaultValue={"123123"}
            ></TextField>
             {errors.password && touched.password ? (
              <FormError>{errors.password}</FormError>
            ) : null}

            <PasswordField>
              <div>
                <input type="checkbox" />
                Rembember Me
              </div>
            
              <Link to="ForgotPassword" style={{ color: "black" }}>
                Forgot Password
              </Link>
            </PasswordField>

            <Button type="submit" onClick={()=>handleSubmit()}>Sign in</Button>
          </form>
        </FormDiv>
      </MainLoginDiv>
      
    </>
  );
}
