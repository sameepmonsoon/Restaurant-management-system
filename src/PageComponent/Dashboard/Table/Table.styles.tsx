import styled from "@emotion/styled";

export const MainTableDiv = styled('table')`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
box-sizing: border-box;
background: red;
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
border:1px solid red;
background: black;
`;
export const TableBody   = styled('tbody')`
background: yellow;
row-gap:10px;`;

export const TableRow = styled('tr')`
display: flex;
flex-direction:row;
flex-wrap: nowrap;
flex: 1;
`;

export const TableData = styled('td')`
flex: 1;
border:1px solid red;
`;
export const TableHeadData = styled('td')`
background-color:green;
border-right:2px solid whitesmoke;
border-start-end-radius:10px;
flex: 1;
padding-left: 20px;
`;