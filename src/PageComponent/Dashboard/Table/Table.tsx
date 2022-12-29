import React from 'react'
import { MainDiv } from '../../../Components/TextField.Style'
import { MainTableDiv, TableBody, TableData, TableHeader, TableRow } from './Table.styles'

const Table = () => {
  return (
  <>
  <MainTableDiv>
    <TableHeader><TableData>Data</TableData></TableHeader>
    <TableBody>
        <TableRow>
            <TableData>Row data</TableData>
        </TableRow>
        <TableRow>
            <TableData>Row data</TableData>
        </TableRow>
        <TableRow>
            <TableData>Row data</TableData>
        </TableRow>
    </TableBody>
  </MainTableDiv>
  </>
  
    )
}

export default Table