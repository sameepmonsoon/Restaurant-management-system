import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { MainDiv } from "./Forgot.Style";
import { Image } from "./Forgot.Style";
import { Caption } from "./Forgot.Style";
import { FormDiv } from "./Forgot.Style";
import { TextField } from "../Components/TextField";
import { Button } from "./Forgot.Style";
import { FormError } from "./Forgot.Style";
import { Title } from "./Forgot.Style";
const ForgotPassword = () => {
  let schema = yup.object().shape({
    newpassword: yup.string().min(6).required("required"),
    confirmnewpassword: yup
      .string()
      .required()
      .oneOf([yup.ref("newpassword"), null], "Password must match"),
  });
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { newpassword: "", confirmnewpassword: "" },
    onSubmit: (values) => {
      console.log("values", values);
    },
    validationSchema: schema,
  });

  return (
    <>
      <MainDiv>
        <Image>
          <img className="img-fluid image" src={"/src/assets/KBLimage.jpg"} />
          <Caption>Welcome to Kpop Dashboard</Caption>
        </Image>
        <FormDiv>
          {/* <Title>
            <p> Forgot Password</p>
          </Title> */}

          {/* <p>Forgot Password</p> */}
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              name="newpassword"
              label="New Password"
              value={values.newpassword}></TextField>
            {errors.newpassword && touched.newpassword ? (
              <FormError>{errors.newpassword}</FormError>
            ) : null}

            <TextField
              onChange={handleChange}
              name="confirmnewpassword"
              label=" Confirm New Password"
              value={values.confirmnewpassword}></TextField>
            {errors.confirmnewpassword && touched.confirmnewpassword ? (
              <FormError>{errors.confirmnewpassword}</FormError>
            ) : null}

            <Button type="submit">Sign in</Button>
          </form>
        </FormDiv>
      </MainDiv>
    </>
  );
};

export default ForgotPassword;
