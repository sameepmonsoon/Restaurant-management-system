import React from 'react'
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
    const{status}= props
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
        <TableRow>
            <TableData>01</TableData>
        
            <TableData>Mackeral Fish</TableData>
        
            <TableData>5 Packets</TableData>
            <TableData>1000</TableData>
        
            <TableData>5000</TableData>
        
            <TableData>
                <TableDataStatus status={status}>
                    {status}</TableDataStatus>
                </TableData>
            <TableData>22 Dec 2022
               <TableDataForDate>
                <HiDotsVertical size={20}/>
               </TableDataForDate>

           </TableData>
        </TableRow>
        
    
    
    </TableBody>
  </MainTableDiv>
  </>
  
    )
}

export default Table