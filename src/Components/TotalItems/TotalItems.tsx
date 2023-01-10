import React from 'react'
import { AllItemsDiv, Title, TotalItemDiv } from './TotalItems.styles'
import {FaCartArrowDown} from 'react-icons/fa'
import { TotalItemTypes } from '../../Types/Components/Filters'

const Cart = (props:TotalItemTypes) => {
    const{totalItems} = props
  return (
  <>
  <AllItemsDiv>
   {<FaCartArrowDown size={15}/>}
   <Title>all</Title>
   <TotalItemDiv>{totalItems}</TotalItemDiv>
  </AllItemsDiv>
  </>
    )
}

export default Cart
