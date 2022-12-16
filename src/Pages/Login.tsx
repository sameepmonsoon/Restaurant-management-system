import { TextField } from "../Components/TextField";
import { useFormik } from 'formik'
import * as yup from 'yup';
// import { LabelDiv } from "../Components/TextField.Style";
// import styled from '@emotion';
export function Login() {
  let schema =yup.object().shape({
email:yup.string().required("is required"),
password:yup.string().required("is required"),
  });
  const {values,handleSubmit,handleChange,errors}=useFormik({
    initialValues:{email:"",password:""},
    onSubmit:(values)=>{
      console.log("values",values)
    },
    validationSchema:schema
  })
  return (
    <>
      <div>
        <h1>Photo Page</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <TextField name ="email" onChange={handleChange}  error={errors.email} label={"Email"} placeholder="Enter your Email"></TextField>
            <TextField  name="password" onChange={handleChange} error={errors.password}label={"Password"} placeholder="Enter your Password"></TextField>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
