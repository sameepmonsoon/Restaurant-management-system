import styled from "@emotion/styled";

type PropType={
    showDisplayFlex:boolean
}

export const MainDiv=styled('div')<PropType> `
display:${({showDisplayFlex})=>showDisplayFlex?"flex":"block"};
`

export const LabelDiv=styled('label')`
font-size: 1.25rem;
font-weight: 500;
font-style: normal;
color: #1E1E1E;
`
export const Input= styled('input')`
box-sizing: border-box;

border: 1.2px solid #000000;
border-radius: 10px;
width: 15.625rem;
height: 2.813rem;



`