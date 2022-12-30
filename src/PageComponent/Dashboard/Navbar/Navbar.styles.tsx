import styled from "@emotion/styled";

// main navbar div
export const NavbarMainDiv = styled('div')`
background: #FFFFFF;
box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.08);
box-sizing: border-box;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:space-between;
align-items: center;

/*made FLEX 1 and padding added instead of width and height*/
flex:1;
padding: 15px;
/* width: 1439px;
height: 86px; */
`;



//navbar bar icon-left
export const NavbarItemIcon = styled('div')`
order:1;
/* margin-top:1%; */
/* margin-left:0px; */
/* position updated to relative */
position:relative;
left: -15px;
top: -7px;
width:25px;
height:30px;
color: #7D7C7C;
align-self: flex-start;
background: #FFFFFF;
box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.08);
`;



//navbar text--dashboard>
export const NabarItemTextContainer = styled('div')`
line-height: 19px;
order: 2;
display: flex;
flex: 1;
height: 19px;
flex-wrap: wrap;
flex-direction: row;
gap:10;
`;



// for items inside nabar text like dashboard purchase
export const NavbarItemTextElementOne = styled('div')`
order:3;
align-items: center;
padding-left:2%;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #313131;
text-transform: uppercase;
`;



//for items inside navbar --item arrow // for //only visible when clicked
export const NavbarItemTextElementsArrow = styled('span')`
order:4;
position: relative;
bottom:10%;
margin-left:10px;
color: #7D7C7C;
`;



// for item inside navbar text after selection
export const NavbarItemTextElementThree = styled('div')`
order:5;
align-items: center;
padding-left:1%;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #313131;
text-transform: uppercase;
`;




//navbar--inner logo Container div
export const  NavbarLogoContainer = styled('div')`
order:6;
display:flex;
align-items: center;
justify-content: flex-end;
padding-right: 20px;
`;



//navbar notification
export const NavbarIconNotification = styled('div')`
order: 7;
flex: 1;
color: #7D7C7C;
margin-right:30%;
align-items: flex-start;
`;



//navbar--inside--logo--container logo icon
export const NavbarLogoIcon = styled('image')`
order:8;
flex: 1;
padding: 10px;
border-radius: 50%;
&{
align-items: flex-start;
background-color:yellowgreen;
}`;



//navbar--inside--logo--container icon dropdown
export const NavbarIconDropdown = styled('div')`
order:9;
color: #7D7C7C;
flex: 1;
margin-left:10%;
align-items: flex-start;
`;
