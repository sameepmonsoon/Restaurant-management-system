import styled from "@emotion/styled";

type PropType={
    showDisplayFlex:boolean
}

export const MainDiv=styled('div')<PropType> `
display:${({showDisplayFlex})=>showDisplayFlex?"flex":"block"};
`

export const LabelDiv=styled('label')`

`