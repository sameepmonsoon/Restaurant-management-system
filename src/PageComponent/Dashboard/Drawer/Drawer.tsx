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
    cardtitle: string,
    open:boolean,
    closeDrawer:()=>void,
    children?:JSX.Element |JSX.Element[]
}
const DrawerC = (props:DrawerTitles) => {
    const{cardtitle,open,closeDrawer,children} = props

  return (
   <Drawer
                open={open}
                onClose={closeDrawer}
                size={460}
                direction='right'
                className='bla bla bla'
            >
  <DrawerMainDiv >
   <DrawerTitleDiv>
         <DrawerTitleDivTitle>{cardtitle}</DrawerTitleDivTitle>
   <DrawerTitleCancelButton>
        <button onClick={(e)=>{
            e.preventDefault()
            closeDrawer()
        }}>X</button>
   </DrawerTitleCancelButton>
   </DrawerTitleDiv>
    <DrawerInputContentDiv>
        {
            children
        }
    
    </DrawerInputContentDiv>

  </DrawerMainDiv>
  </Drawer>
    )
}

export default DrawerC