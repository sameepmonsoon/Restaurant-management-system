import { useFormik } from 'formik'
import React from 'react'
import { TextField } from '../Components/TextField'
import * as yup from 'yup';


export default function Components() {
    let schema = yup.object().shape({
        name: yup.string().required(),
      });

const {values,handleSubmit,handleChange,errors}=useFormik({
    initialValues:{name:""},
    onSubmit:(values)=>{
        console.log("values",values)
    },
    validationSchema:schema
})
function onSumbit(e:any){
    e.preventDefault()
    console.log("submitted",errors)
}
  return (
    <>
    <div>Components</div>
    <form onSubmit={handleSubmit}>
        <TextField name="name"  onChange={handleChange} error={errors.name} />
    <button type='submit'>Submdit</button>
    </form>
    </>
  )
}
