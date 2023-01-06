import { useFormik } from 'formik'
import React from 'react'
import { TextField } from '../../Components/TextField'
import { Button, LabelDiv } from '../../Components/TextField.Style'
import { DrawerButtonDiv } from '../Dashboard/Drawer/Drawer.styles'
import * as yup from "yup"
import { HTTPMethods } from '../../Utils/HTTPMock'
import { useDrawer } from '../../Pages/states/Drawer.state'
import { toast } from 'react-toastify'
export default function SalesForm() {
const {open,toggleDrawer} = useDrawer();

  let schema = yup.object().shape({
    item_name:yup.string().required("is required"),
    quantity:yup.number().required("is requuired").positive().integer(),
    per_piece:yup.number().required("is required").positive().integer(),
    date:yup.date().required("is required"),
    status:yup.string().required("is required")
  })
    const {values,errors,handleChange,handleSubmit,handleReset,resetForm}=useFormik({
        initialValues:{
            item_name:"",
            quantity:'',
            per_piece:'',
            status:"",
            date:""
        },
        onSubmit:(values)=>{
          console.log("I am data",values)
           HTTPMethods.post("/new_sales/create",values)
           .then(function(resp){
            handleReset
            toggleDrawer()
            
           })
           .catch(function(err){
             toast.success("Error in purchase creation",{
                theme: "colored",
                hideProgressBar: true,
                autoClose: 1000
              })
            })
        },
        validationSchema:schema
    })
  return (
    <form onSubmit={handleSubmit}>
            <TextField name="item_name" type='text' defaultValue="" placeholder='Product' error={errors.item_name} onChange={handleChange} label="Items name"/>
            <TextField name="quantity" type='number' defaultValue={""} placeholder='Quantity' onChange={handleChange} error={errors.quantity} label="Quantity"/>
            <TextField name="per_piece" type='number' defaultValue={""} placeholder='1000' onChange={handleChange} error={errors.per_piece}  label="Per Price"/>
            
            <div style={{display:"flex", flexDirection:"column"}}>
                {
                    <LabelDiv error={errors.status} >
                        {errors.status || "Status" }
                    </LabelDiv>
                }
            <select name="status" onChange={handleChange}>
              <option></option>
                <option>Card</option>
                <option>Fonepay</option>
                <option>Cash</option>
                <option>Due</option>
           </select>
            </div><br />
            <TextField name="date" type="date" placeholder='date' onChange={handleChange} error={errors.date} label="Sales date"/>
            <DrawerButtonDiv>
           <Button type='submit' onClick={(e)=>{
            e.preventDefault()
            handleSubmit()
           }}>add</Button>
           <Button onClick={handleReset}>clear</Button>
    </DrawerButtonDiv>
    </form>
  )
}
