import styled from "@emotion/styled";

// props received from inventory card
type MainDivInventoryPropTypes = {
    cardType:String,
    active:String
}



// card elements(icons,title,amount)
export const MainDivInventory = styled('div')<MainDivInventoryPropTypes>`
display:flex;
height:150px;
width:281px;
border:0;
border-radius:10px;
flex-wrap:wrap;
flex-direction:column;
background: ${({active})=>active=="purchase"?"linear-gradient(351deg, rgba(120,240,186,1) 48%, rgba(150,230,192,1) 100%);":"sales"?"linear-gradient(351deg, rgba(255,172,50,1) 0%, rgba(255,227,176,1) 100%);":"linear-gradient(351deg, rgba(255,137,82,1) 0%, rgba(252,203,180,1) 100%);"} ;
filter: drop-shadow(0px 4px 4px #adb5bd);

&:hover{
    background:${({cardType})=>cardType=="purchase"?"linear-gradient(351deg, rgba(120,240,186,1) 48%, rgba(150,230,192,1) 100%);":"sales"?"linear-gradient(351deg, rgba(255,172,50,1) 0%, rgba(255,227,176,1) 100%);":"linear-gradient(351deg, rgba(255,137,82,1) 0%, rgba(252,203,180,1) 100%);"}  ;

}`; 




// for icons
export const IconDiv = styled('div')`
order:1;
align-self:flex-end;
/* border:1px solid black; */
padding:15px 30px;
@media (max-width: 500px) {
    & {
      align-self:flex-start;
      flex-direction:column;
    }
}
;`

// container for card text and amount
export const InventoryCardTextAmountDiv = styled('div')`
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
padding-left:20px;
margin-top:10px;
order:3;
row-gap:10px;
color:#313131;
font-family:Helvetica, sans-serif;
font-style: normal;

`;

// for card title
export const InventoryCardText = styled('div')`
// border:1px solid black;
text-transform: capitalize;
letter-spacing:1px;
font-weight: 300;
font-size: 15px;
line-height: 1em;
`;


// for amount
export const InventoryCardAmount = styled('div')`
// border:1px solid black;
letter-spacing:1px;
font-weight: bold;
font-size:23px;
line-height:20px;

`;
