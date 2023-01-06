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

const SalesTable = (props:TableStatus) => {
    const {data}=props
    
  return (
  <>
  <MainTableDiv>

    <TableHeader><TableHeadData> <input type="checkbox" name="" id="" />id <HiChevronDown/> 
    </TableHeadData>
    <TableHeadData>date<HiChevronDown/></TableHeadData> 
    <TableHeadData>items<HiChevronDown/></TableHeadData>
    <TableHeadData>quantity<HiChevronDown/></TableHeadData>
    <TableHeadData>per price<HiChevronDown/></TableHeadData>
    <TableHeadData>net price<HiChevronDown/></TableHeadData>
    </TableHeader>
    <TableBody>
        {
           data && data.map((product, index)=> 
           <TableRow >
               
                <TableData style={{ justifyContent: 'center'}}> { index+1}</TableData>
                <TableData>{product.date}
                  <TableDataForDate>
                  <HiDotsVertical size={20}/>
                  </TableDataForDate>
                </TableData>
                <TableData>{product.dish_name}</TableData>
                <TableData>{product.quantity }</TableData>
                <TableData>{product.per_price}</TableData>
                <TableData>{product.net_price}</TableData>
                
            </TableRow>)
        }  
    
    </TableBody>
    

  </MainTableDiv>
  </>
  
    )
}

export default SalesTable