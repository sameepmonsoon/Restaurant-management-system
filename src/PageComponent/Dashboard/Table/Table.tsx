import React, { useState, useEffect } from 'react'
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

const Table = (props:TableStatus) => {
    const {data}=props
    
  return (
  <>
  <MainTableDiv>
    <TableHeader><TableHeadData> <input type="checkbox" name="" id="" />id <HiChevronDown/> 
    </TableHeadData>
    <TableHeadData>product<HiChevronDown/></TableHeadData>
    <TableHeadData>quantity<HiChevronDown/></TableHeadData>
    <TableHeadData>per price<HiChevronDown/></TableHeadData>
    <TableHeadData>net price<HiChevronDown/></TableHeadData>
    <TableHeadData>status<HiChevronDown/></TableHeadData>
    <TableHeadData>date<HiChevronDown/></TableHeadData> 
    </TableHeader>
    <TableBody>
        {
           data && data.map((product, index)=> <TableRow >
                <TableData> { index+1}</TableData>
                <TableData>{product.name}</TableData>
                <TableData>{product.quantity}</TableData>
                <TableData>{product.per_piece}</TableData>
                <TableData>{product.net_price}</TableData>
                <TableData>{product.status}</TableData>

                <TableData>{product.purchased_date}
                   <TableDataForDate>
                    <HiDotsVertical size={20}/>
                   </TableDataForDate>
    
               </TableData>
            </TableRow>)
        }  
       
        
    
    
    </TableBody>
    

  </MainTableDiv>
  </>
  
    )
}

export default Table