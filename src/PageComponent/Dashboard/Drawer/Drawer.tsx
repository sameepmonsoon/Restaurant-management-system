import React, { useState } from 'react'
// @ts-ignore
import Drawer from 'react-modern-drawer'
import { TextField } from '../../../Components/TextField'
import { useFormik } from 'formik'
import { LabelDiv, MainDiv,Input,Button} from '../../../Components/TextField.Style';
import { 
    DrawerButtonDiv,
     DrawerMainDiv,
    DrawerTitleCancelButton,
     DrawerTitleDiv,
      DrawerTitleDivTitle,
      DrawerInputContentDiv } from './Drawer.styles'


import 'react-modern-drawer/dist/index.css'

type DrawerTitles = {
    cardtitle:string,
}
const DrawerC = (props:DrawerTitles) => {
    const{cardtitle} = props
    const [open,setOpen]=useState(false)
    // const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    //     initialValues:{name:"Noodles",quantity:"10",perprice:"1000",netprice:"5000",status:"completed",date:"new date():"},
    //     onSubmit:(values)=>{alert(values)}
    // })
    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }   

  return (
  <>
   <Drawer
                open={open}
                onClose={toggleDrawer}
                size={460}
                direction='right'
                className='bla bla bla'
            >
  <DrawerMainDiv >
   <DrawerTitleDiv>
         <DrawerTitleDivTitle>{cardtitle}</DrawerTitleDivTitle>
   <DrawerTitleCancelButton>
        <button onClick={()=>setOpen(false)}>X</button>
   </DrawerTitleCancelButton>
   </DrawerTitleDiv>
    <DrawerInputContentDiv>
     <TextField name="Product" type='text' defaultValue="Product" placeholder='Product' />
     <TextField name="Quantity" type='number' defaultValue="Quantity" placeholder='Quantity'/>
     <TextField name="per price" type='number' defaultValue="perprice" placeholder='1000'/>
     <TextField name='net price' type='number' defaultValue="netprice" placeholder='5000'/>
    {/* <select>
        <option>complete</option>
        <option>pending</option>
        <option>cancelled</option>
        <option>processing</option>
    </select> */}
    {/* <p>Purchase Date</p>
 <input type="date" name="name" id="" /> */}


<TextField name="date" type='date'/>
    
    </DrawerInputContentDiv>
    <DrawerButtonDiv>
           <Button>add</Button><Button>clear</Button>
    </DrawerButtonDiv>
  </DrawerMainDiv>
  </Drawer>
<button onClick={()=>setOpen(true)}>Drawer</button>
 </>
    )
}

export default DrawerC