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
import { useState } from 'react'
import { HTTPMethods } from '../../../Utils/HTTPMock'

const StocksTable = (props:TableStatus) => {

  const {data}=props
    
  return (
  <>
  <MainTableDiv>

    <TableHeader><TableHeadData> <input type="checkbox" name="" id="" />id <HiChevronDown/> 
    </TableHeadData>
    <TableHeadData>items<HiChevronDown/></TableHeadData>
    <TableHeadData>quantity<HiChevronDown/></TableHeadData>
  
    </TableHeader>
    <TableBody>
        {
           data && data.map((product, index)=> 
           <TableRow >
                <TableData style={{ justifyContent: 'center'}}> { index+1}</TableData>
                <TableData>{product.name}</TableData>
                <TableData>{product.initial_quantity }</TableData>
               
            </TableRow>)
        }  
    
    </TableBody>
    

  </MainTableDiv>
  </>
  
    )
}

export default StocksTable