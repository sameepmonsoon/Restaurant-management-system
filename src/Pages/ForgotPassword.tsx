import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { MainDiv } from "./Forgot.Style";
import { Image } from "./Forgot.Style";
import { Caption } from "./Forgot.Style";
import { FormDiv } from "./Forgot.Style";
import { TextField } from "../Components/TextField";
import { Button } from "./Forgot.Style";
const ForgotPassword = () => {
  let schema= yup.object().shape({
    newpassword:yup.string().min(6).required("required"),
    confirmnewpassword:yup.string().min(6).required("required"),
  });
  const {values,handleSubmit,handleChange,errors,touched}=useFormik({
    initialValues:{newpassword:"",confirmnewpassword:""},
    onSubmit:(values)=>{
        
    }
  })

  return (
    <>
      <MainDiv>
        <Image>
          <img className="img-fluid image" src={"/src/assets/KBLimage.jpg"} />
          <Caption>Welcome to Kpop Dashboard</Caption>
        </Image>
        <FormDiv>
          <form>
            <TextField name="newpassword" label="New Password"></TextField>
            <TextField name="confirmnewpassword" label=" Confirm New Password"></TextField>
            <Button type="submit">Sign in</Button>
          </form>
        </FormDiv>
     
      </MainDiv>
    </>
  );
};

export default ForgotPassword;
