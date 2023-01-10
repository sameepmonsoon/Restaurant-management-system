import styled from "@emotion/styled";

export const FilterComponentDiv = styled('form')`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 981px;
    height: 45px;
    justify-content:flex-start;
    column-gap:30px;
    label{
        width: 53px;
        height: 19px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        color: #000000;
    }
`

export const InputDiv = styled('div')`
    display: flex;
    align-items:center;
    justify-content:flex-start;
    flex-flow: row nowrap;
    padding: 0px 0.5em;
    gap:5px;
    color: #676767;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 379px;
    height: 45px;
    text-transform: capitalize;
    input{
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #676767;
        border: none;
        width: 375px;
        height: 42px;
        background: transparent;
    }
     input:focus{
        outline: none;
    }
`

export const IconDiv = styled('div')`

`

export const DateAndSelectDiv= styled('div')`
text-transform: capitalize;
width: 232px;
height: 45px;
display: flex;
align-items: center;
justify-content:flex-start;
padding: 0px 0.5em;
gap:5px;
color: #676767;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
select{
        border: none;
        width: 375px;
        height: 42px;
        color: #676767;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
}
input{
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #676767;
        border: none;
        width: 195px;
        height: 42px;
        background: transparent;
    }
    input:focus{
        outline: none;
    }
`


export const OptionDiv = styled('div')`
    width: 232px;
    height: 45px;
    color: #676767;
`

