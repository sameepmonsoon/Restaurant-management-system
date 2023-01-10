import styled from '@emotion/styled'
export const AllItemsDiv = styled('span')`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    gap:5px;
    /* margin-left: -20px; */
    padding: 0;
    color: #676767;
    width:100px;
  
`

export const Title = styled('span')`
order: 1;
flex: 1;
text-transform: uppercase;
font-weight: 500;
font-size: 15px;
line-height: 19px;
color: #676767;
`
export const TotalItemDiv = styled('span')`
background: #FFFFFF;
order: 2;
color: #676767;
flex: 2;
/* width: 70px; */
height: 30px;
display: flex;
padding: 0px 5px;
align-items: center;
justify-content: flex-start;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
padding-left: 5px;
    
`