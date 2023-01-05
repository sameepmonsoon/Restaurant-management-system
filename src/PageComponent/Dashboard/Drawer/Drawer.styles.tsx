import styled from "@emotion/styled";

export const DrawerMainDiv = styled('form')`
  display  :flex ;
  flex-flow:column nowrap;
  width: 490px; 
  height: 1024px;
  justify-content:flex-start;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 1px 10px 25px rgba(0, 0, 0, 0.47);
  border-radius: 30px 0px 0px 30px;
`;




export const DrawerTitleDiv = styled('div')`
order: 1;
position: relative;
display: flex;
align-items: center;
top:3%;
justify-content: space-between;
width: 422px;
height: 39px;
font-family: 'Inter';
font-style: normal;
border-bottom:  1px solid #B5B5B5;

`;

export const DrawerTitleDivTitle =styled('div')`
margin-left: 20px;
width: 145px;
height: 19px;
font-weight: 500;
font-size: 18px;
line-height: 19px;
line-height: 19px;
text-transform: uppercase;
color: #000000;
`;


export const DrawerTitleCancelButton = styled('div')`
color: #000000;
margin-right: 20px;
border: 0px;
background: transparent;
`;

export const DrawerInputContentDiv = styled('div')`
margin-top:15% ;
order: 2;
display:flex;
flex-flow: column nowrap;
row-gap: 20px;
/* background-color: black  ; */
`

// export const DrawerInputPriceDiv = styled('div')`margin: 0;
// order: 2;
// padding: 0;
// display: flex;
// flex-flow: column wrap;
// column-gap:30px;
// width: 397.49px;
// height: 68px;
// `; 


export const DrawerButtonDiv = styled('div')`
order: 3    ;
display:flex;
margin-top:10%;
flex-flow:row nowrap;
column-gap:50px;
width: 185px;

`;
