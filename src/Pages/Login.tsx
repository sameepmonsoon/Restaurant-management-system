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
import { Link } from "react-router-dom";
import "./Login";

export function Login() {
  let schema = yup.object().shape({
    email: yup.string().email().required(" Email is required"),
    password: yup.string().min(6).required(" Password is required"),
  });
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log("values", values);
    },
    validationSchema: schema,
  });
  // const Responsive = ()=>{
  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: '(min-width: 1224px)'
  // })

  return (
    <>
      <MainLoginDiv>
        <Image>
          <img className="img-fluid image" src={"/src/assets/KBLimage.jpg"} />
          <Caption>Welcome to Kpop Dashboard</Caption>   
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
