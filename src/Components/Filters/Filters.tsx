import React, { useState } from 'react'
import { FilterTypes } from '../../Types/Components/Filters'
import {FilterComponentDiv,IconDiv, InputDiv,DateAndSelectDiv} from '../Filters/Filters.styles'
import { TextField } from '../TextField'
const Filters = (props:FilterTypes) => {
    const{title,icon,dateIcon,statusIcon}= props

  
  return (
  <>
    <FilterComponentDiv>
    <label htmlFor="filter">Filters</label>
    {`${title}`==="Stocks"?
    <>
    <InputDiv>
        <IconDiv>
        {icon}
        </IconDiv>
            <TextField type="text"  placeholder={`Search any item or product...`} />
  </InputDiv>
  </>
  :<>
  <InputDiv>
        <IconDiv>
        {icon}
        </IconDiv>
            <TextField type="text" placeholder={`Search any item or product...`} />
  </InputDiv>
  <DateAndSelectDiv>
   <IconDiv>
        {/* {dateIcon} */}
        </IconDiv>
 
  <TextField type='date' />
  </DateAndSelectDiv>
  <DateAndSelectDiv>
  <IconDiv>
    {statusIcon}
        </IconDiv>
    <select name="Status" id="status">
    {
    `${title}`==="Purchase"?
    <option selected disabled hidden>Payment</option>
    :<option selected disabled>Status</option>}
    <option value="">Pending</option>
    <option value="">Cancelled</option>
    <option value="">Pre-order</option>
    </select>
  </DateAndSelectDiv>
  </>
  }
  </FilterComponentDiv>
  </>
    )
}

export default Filters