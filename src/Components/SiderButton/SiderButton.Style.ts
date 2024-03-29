import styled from "@emotion/styled";

export const MainCard=styled('div')`
/* max-width: 224px;
height: 170px;
background-color:#f2eded ;
border-top-left-radius: 13px;
border-top-right-radius: 13px; */

`
export const TitleCard=styled('div')`
width: 224px;
height: 51px;
background-color:black;
border-top-left-radius: 13px;
border-top-right-radius: 13px;
display: flex;
justify-content: space-between;
`
export const SidebarContent=styled('div')`
width: 224px;
height: 51px;
/* background-color:black; */
border-top-left-radius: 13px;
border-top-right-radius: 13px;

`
export const TitleIcon=styled('image')`
color: white;
cursor: pointer;
font-size: larger;
margin-left: 15px;
margin-top: 8px;

`
export const ChildrenIcon=styled('image')`
color: white;
cursor: pointer;
margin-left: 35px;
margin-top: -10px;
font-size: 40px;
/* margin-bottom: 55px; */
&:hover{
    /* transform: rotate(180deg );
    transition: 0.2s;
     */
}

`
export const Title =styled('p')`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 22px;
color:white;
align-items: center;
display: flex;
margin-top: 15px;
margin-left: 35px;
`
export const Children =styled('ul')`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
`
export const ChildrenItem=styled('li')`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
`
export const ChildrenCard=styled('div')`
max-width: 224px;
height: 170px;
background-color:#f2eded ;
`

export const Dropdown = styled.div``;
