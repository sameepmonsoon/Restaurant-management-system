import React from 'react'
import { MainDiv } from '../../../Components/TextField.Style'
import {HiChevronDown} from 'react-icons/hi'
import {HiDotsVertical} from 'react-icons/hi'
import { MainTableDiv, TableBody, TableData, TableHeader,TableHeadData, TableRow,TableDataForDate } from './Table.styles'

const Table = () => {
  return (
  <>
  <MainTableDiv>
    <TableHeader><TableHeadData> <input type="checkbox" name="" id="" />id <HiChevronDown/> </TableHeadData>
    <TableHeadData>product<HiChevronDown/></TableHeadData>
    <TableHeadData>quantity<HiChevronDown/></TableHeadData>
    <TableHeadData>per price<HiChevronDown/></TableHeadData>
    <TableHeadData>net   price<HiChevronDown/></TableHeadData>
    <TableHeadData>status<HiChevronDown/></TableHeadData>
    <TableHeadData>date<HiChevronDown/></TableHeadData> 
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableData>01</TableData>
        
            <TableData>Macheral Fish</TableData>
        
            <TableData>5 Packets</TableData>
            <TableData>1000</TableData>
        
            <TableData>50000</TableData>
        
            <TableData>
                status here</TableData>
            <TableData>date here
               <TableDataForDate>                <HiDotsVertical size={20}/>
               </TableDataForDate>

           </TableData>
        </TableRow>
        <TableRow>
            <TableData>No.</TableData>
        
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
            <TableData>Row data
               <TableDataForDate>                <HiDotsVertical size={20}/>
               </TableDataForDate>

           </TableData>
        </TableRow>
    </TableBody>
  </MainTableDiv>
  </>
  
    )
}

export default Table