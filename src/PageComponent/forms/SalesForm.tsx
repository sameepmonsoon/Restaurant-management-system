import { useFormik } from 'formik'
import React from 'react'
import { TextField } from '../../Components/TextField'

export default function SalesForm() {
    const {values,errors,handleChange,handleSubmit}=useFormik({
        initialValues:{
            name:"",
            quantity:'',
            perPrice:'',
            netPrice:''
        },
        onSubmit:(values)=>{
            console.log("submit",values)
        }
    })
  return (
    <form onSubmit={handleSubmit}>
            <TextField name="Product" type='text' defaultValue="Product" placeholder='Product' error={errors.name} onChange={handleChange}/>
            <TextField name="Quantity" type='number' defaultValue="Quantity" placeholder='Quantity' onChange={handleChange}/>
    </form>
  )
}
