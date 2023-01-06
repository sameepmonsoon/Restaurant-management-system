import { MainDiv } from '../../../Components/TextField.Style'
import {HiChevronDown} from 'react-icons/hi'
import {HiDotsVertical} from 'react-icons/hi'
import { TableStatus } from '../../../Types/Components/DashbaordTable'
import { 
    MainTableDiv,
    TableBody,
    TableData,
    TableHeader,
    TableHeadData,
    TableRow,
    TableDataForDate,
    TableDataStatus } from './Table.styles'
import { useMenu } from '../../../Components/actionPopUp/ActionPopUp.state'
import ActionPopUp from '../../../Components/actionPopUp/ActionPopUp'
import { useState } from 'react'
import { useDrawer } from '../../../Pages/states/Drawer.state'
import { Button } from '@mui/material'
import { HTTPMethods } from '../../../Utils/HTTPMock'
import { toast } from 'react-toastify'

const PurchaseTable = (props:TableStatus) => {
    const {data}=props
    const {menuOpen,toggleMenu}=useMenu()
    const {open,toggleDrawer,setDrawerData}=useDrawer()
    const [clickedData,setClickedData]=useState(null)

   const openMenu=(data:any)=>{
    setClickedData(data)
    toggleMenu()
   }
   const closeMenu=()=>{
    setClickedData(null)
    toggleMenu()
   }
   const editPurchase=(data:any)=>{
    console.log("inside")
    setDrawerData({data,type:"purchase"})
    toggleDrawer()
   }  

   function deletePurchase(product:any){
    HTTPMethods.post(`/purchase/delete/${product.purchase_id}`,{})
    .then(function(resp){
      toast.success("delete successful",{
        theme: "colored",
        hideProgressBar: true,
        autoClose: 1000
      })
  
    })
    .catch(function(err){
      toast.success("Error in deletion",{
        hideProgressBar: true,
        autoClose: 1000
      })
    })  
   }
  return (
  <>
  <MainTableDiv>
    <TableHeader>

    <TableHeadData>S.N<HiChevronDown/></TableHeadData>

    <TableHeadData>product<HiChevronDown/></TableHeadData>
    <TableHeadData>quantity<HiChevronDown/></TableHeadData>
    <TableHeadData>per price<HiChevronDown/></TableHeadData>
    <TableHeadData>net price<HiChevronDown/></TableHeadData>
    <TableHeadData>status<HiChevronDown/></TableHeadData>
    <TableHeadData>date<HiChevronDown/></TableHeadData> 
    <TableHeadData>Actions<HiChevronDown/></TableHeadData> 

    </TableHeader>
    <TableBody>
        {
           data && data.map((product, index)=> 
           <TableRow>
                <TableData style={{ justifyContent: 'center'}}> { index+1}</TableData>
                <TableData>{product.name}</TableData>
                <TableData>{product.quantity + " packet"}</TableData>
                <TableData>{product.per_piece}</TableData>
                <TableData>{product.net_price}</TableData>
                <TableData>{product.status}</TableData>
                <TableData>{product.purchased_date}
                 
                  
               </TableData>
               <TableData style={{width:"500px", display:"flex", gap:"20px"}}>
               <Button variant="contained" onClick={()=>editPurchase(product)}>Edit</Button>
               <Button variant="contained" onClick={()=>deletePurchase(product)}>Delete</Button>

                </TableData>

               
            </TableRow>)
        }
         
    </TableBody>
    

  </MainTableDiv>
  </>
  
    )
}

export default PurchaseTable