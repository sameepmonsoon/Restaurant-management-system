import { TextField } from "../Components/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "../Components/TextField.Style";
import {
  Image,
  FormDiv,
  MainLoginDiv,
  PasswordContainer,
  ToggleIcon,
  Title,
  PasswordField,
  FormError,
  Caption,
  ForgetPassword,
  RemembermeDiv,
  ImageTitleDiv,
  EmailContainer,
} from "./Login.Style";
import MediaQuery from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { HTTPMethods } from "../Utils/HTTPMock";
import { useNavigationAfterTokenCheck } from "../Hooks/useNavigateToLogin";
import { ResponseType } from "../Types/Utils/ResponseTypes";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// import Toast from "../Components/Snackbar/Snackbar";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  // use state for password toggle button
  const [type, setType] = useState("password");
  const [isLoading, setIsLoading] = useState(false)
  //  @ts-ignore
  const [eyeIcon, setEyeIcon] = useState(AiOutlineEye);
  //  function for toggle password
  function togglePassword() {
    if (type === "password") {
      setType("text");
      setEyeIcon(AiOutlineEyeInvisible);
    } else {
      setType("password");
      setEyeIcon(AiOutlineEye);
    }
  }

  // const redirect=useNavigationAfterTokenCheck()
  const navigate = useNavigate();
  // redirect()

  let schema = yup.object().shape({
    email: yup.string().email().required(" Email is required"),
    password: yup.string().min(6).required(" Password is required"),
  });

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      setIsLoading(true)
      HTTPMethods.post("/auth/login", values)
        .then(async function (resp: any) {
          console.log(resp.data);
          const { payload } = resp.data;
          const { token } = payload;
          localStorage.setItem("token", token);
          setIsLoading(false)

          // Success Message
          toast.success("successfull login", {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
            toastId: "log1",
          });

          return navigate("/home/purchase");
        })
        .catch(function (err) {
          // Error Message
          toast.error(err.response.data, {
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
            toastId: "log1",
          });
          setIsLoading(false)
        });
    },
    validationSchema: schema,
  });

  return (
    <>
      <MainLoginDiv>
        <Image>
          <ImageTitleDiv>
            <h1>Welcome to KPOP Dashboard</h1>
            <h2>&nbsp; </h2>
            <h3>Login to access your account</h3>
          </ImageTitleDiv>
        </Image>
        <FormDiv onSubmit={handleSubmit}>
          <Title>
            <p>Login</p>
          </Title>
        <EmailContainer>
          <TextField
              name="email"
              onChange={handleChange}
              // error={errors.email}
              label={"Email"}
              placeholder="Enter Your Email"
              defaultValue={" "}></TextField>
        </EmailContainer>
        {errors.email && touched.email ? (
              <FormError>{errors.email}</FormError>
            ) : null}
         
          <PasswordContainer>
            <TextField
              name="password"
              type={type}
              onChange={handleChange}
              // error={errors.password}
              label={"Password"}
              placeholder="Enter your Password"
              defaultValue={""}></TextField>
            <ToggleIcon>
              {type === "password" ? (
                <AiOutlineEyeInvisible size={20} onClick={togglePassword} />
              ) : (
                <AiOutlineEye size={20} onClick={togglePassword} />
              )}
            </ToggleIcon>
          </PasswordContainer>
          {errors.password && touched.password ? (
            <FormError>{errors.password}</FormError>
          ) : null}
          <PasswordField>
            <RemembermeDiv>
              <input type="checkbox" />
              Rembember Me
            </RemembermeDiv>
            <ForgetPassword to="ForgotPassword">Forgot Password</ForgetPassword>
          </PasswordField>

          <Button type="submit" onClick={() => handleSubmit()} disabled={isLoading} >
            {isLoading? "Loading" : "Sign In"} 
          </Button>
        </FormDiv>
      </MainLoginDiv>
    </>
  );
}
