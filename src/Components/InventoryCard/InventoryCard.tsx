import React, { useState } from 'react';
import {
    MainDivInventory,
    IconDiv,
    InventoryCardText,
    InventoryCardAmount,
    InventoryCardTextAmountDiv,    
} from './InventoryCard.styles';


// for inventory card titles
type InventoryTitles = {
  title:String,
  icon: React.ReactNode,
  amount:String
  cardType:String,
  active:boolean
}

 

  const InventoryCard = (props:InventoryTitles) => {
  const{title,icon,amount,cardType,active}=props
    
  return (
    // @ts-ignore
    <MainDivInventory cardType={cardType} active={active}>
        <IconDiv> 
      {icon}
        </IconDiv>
        <InventoryCardTextAmountDiv>
        <InventoryCardText>
        {title}     
        </InventoryCardText>
        <InventoryCardAmount>
          Rs.  {amount}
        </InventoryCardAmount>
        </InventoryCardTextAmountDiv>
    </MainDivInventory>
    )
}

export default InventoryCard