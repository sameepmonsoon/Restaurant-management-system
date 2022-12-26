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
import { useEffect } from "react";
import axios from "axios"
import { HTTPMethods } from "../Utils/HTTPMock";
import { useNavigationAfterTokenCheck } from "../Hooks/useNavigateToLogin";
export function Login() {
  const redirect=useNavigationAfterTokenCheck()
  const navigate=useNavigate()
  redirect()


  let schema = yup.object().shape({
    email: yup.string().email().required(" Email is required"),
    password: yup.string().min(6).required(" Password is required"),
  });
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      // NOTE : Currently we are using our token this token will be saved in localstorage after login response from backend
      localStorage.setItem("token","this is token")
      navigate("/home")
      // HTTPMethods.post("/login",values)
      // .then(function(resp){
        // NOTE : Save token localStorage.setItem("token",resp.token)
      //   console.log("response is",resp)
      // Navigate to "/home"
      // })
      // .catch(function(err){
      //   console.log("error is",err)
      // })  
      },
    validationSchema: schema,
  });

  return (
    <>
      <MainLoginDiv>
        <Image>
          <img className="img-fluid image" src={""} />
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
              value={values.email}
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
              value={values.password}
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

            <Button type="submit">Sign in</Button>
          </form>
        </FormDiv>
      </MainLoginDiv>
    </>
  );
}
