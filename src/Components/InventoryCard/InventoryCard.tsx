import React, { useEffect, useState } from 'react';
import { InventoryTitles } from '../../Types/Components/InventoryCardTypes';
import { HTTPMethods } from '../../Utils/HTTPMock';
import {
    MainDivInventory,
    IconDiv,
    InventoryCardText,
    InventoryCardAmount,
    InventoryCardTextAmountDiv,    
} from './InventoryCard.styles';

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
            {amount}
        </InventoryCardAmount>
        </InventoryCardTextAmountDiv>
    </MainDivInventory>
    )
}

export default InventoryCard