import styled from "@emotion/styled";

export const MainTableDiv = styled('table')`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
box-sizing: border-box;
width: 1105px;
height: 407px;
`;

export const TableHeader = styled ('thead')`

display:flex;
flex-direction:row;
flex-wrap:nowrap;
align-items:center;
width: 1105px;
height: 46px;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
border-radius: 5px 5px 0px 0px;

`;


export const TableBody   = styled('tbody')`
row-gap:10px;

tr{
    margin-top: 20px;
    height: 62px;

}
`;




export const TableRow = styled('tr')`
/* margin-top:5px; */
display: flex;
flex-direction:row;
align-items: center;
flex-wrap: nowrap;
flex: 1;
background-color: aquamarine;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);


`;

export const TableData = styled('td')`
flex: 1;
display: flex;
flex-direction:row;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #424242;
padding-left: 10px;
text-transform: capitalize;
border-right:2px solid whitesmoke;
border-top: 10px;
`;


export const TableHeadData = styled('td')`
display: flex;
font-weight: 500;
font-size: 15px;
line-height: 19px;  
font-style: normal;
flex-direction: row;
column-gap: 15%;
text-transform: uppercase;
align-items:center;
border-right:2px solid whitesmoke;
flex: 1;
padding-left: 10px;
`;

export const TableDataForDate = styled('td')`
flex: 1;
align-items: center;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #424242;
padding-left: 20px;
text-transform: capitalize;
border-top: 10px;
`;


