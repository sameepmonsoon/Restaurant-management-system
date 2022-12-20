import { TextField } from "../Components/TextField";
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Button } from "../Components/TextField.Style";
import { MainLoginDiv } from "./Login.Style";
import { Image } from "./Login.Style";
import {FormDiv } from "./Login.Style";
import { Title } from "./Login.Style";
import MediaQuery from 'react-responsive'
import "./Login";


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
// const Responsive = ()=>{
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
// })

  return (
    <>
    <MainLoginDiv>
     
      <Image>
      <img className="img-fluid image" src={"/src/assets/KBLimage.jpg"}/>
      <p>Welcome to kpop Dashboard</p>
      </Image>
       
        
        
        <FormDiv>
          <form onSubmit={handleSubmit}>
            {/* <h1>Login</h1> */}
            <Title>
            <p>Login</p>
            </Title>
            
            <TextField name ="email" onChange={handleChange}  error={errors.email} label={"Email"} placeholder="Enter your Email"></TextField>
            <TextField  name="password" onChange={handleChange} error={errors.password}label={"Password"} placeholder="Enter your Password"></TextField>
            {/* <button type="submit">Submit</button> */}
            <div> 
            <input type ="checkbox" />Remember me
            {/* <p>Forgot password</p> */}
            </div>
            <Button type="submit">Sign in</Button>
          </form>
        </FormDiv>
        
   
      </MainLoginDiv>
    </>
  );
}
