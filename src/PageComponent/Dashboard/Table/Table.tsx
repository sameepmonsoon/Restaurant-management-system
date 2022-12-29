import React from 'react'
import { MainDiv } from '../../../Components/TextField.Style'
import { MainTableDiv, TableBody, TableData, TableHeader,TableHeadData, TableRow } from './Table.styles'

const Table = () => {
  return (
  <>
  <MainTableDiv>
    <TableHeader><TableHeadData> <input type="checkbox" name="" id="" /> Data</TableHeadData>
    <TableHeadData>Data</TableHeadData><TableHeadData>Data</TableHeadData>
    <TableHeadData>Data</TableHeadData><TableHeadData>Data</TableHeadData><TableHeadData>Data</TableHeadData>
    <TableHeadData>Data</TableHeadData> 
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
        
            <TableData>Row data</TableData>
            <TableData>Row data</TableData>
        </TableRow>
    </TableBody>
  </MainTableDiv>
  </>
  
    )
}

export default Table