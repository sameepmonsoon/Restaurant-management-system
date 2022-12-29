import React from 'react'
import logo  from '../../../../public/vite.svg'
import {FaBars} from 'react-icons/fa'
import {VscBellDot} from 'react-icons/vsc'
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowRightSLine} from 'react-icons/ri'
import { NavbarTitles } from '../../../Types/Components/PageComponentNavbar'
import {
    NavbarMainDiv,
    NavbarItemTextElementsArrow,
    NavbarItemIcon,
    NavbarLogoContainer,
    NavbarIconNotification,
    NavbarLogoIcon,
    NavbarIconDropdown,
    NavbarItemTextElementOne,
    NavbarItemTextElementThree,
    NabarItemTextContainer
} from './Navbar.styles'



const Navbar = (props:NavbarTitles) => {
  const{navTitle,navbarCardName,arrowIcon} = props
  return (
  
  <>
  <NavbarMainDiv>
  <NavbarItemIcon><FaBars/></NavbarItemIcon>
  <NabarItemTextContainer>
   <NavbarItemTextElementOne>{navTitle}</NavbarItemTextElementOne>
   {arrowIcon===true?
<NavbarItemTextElementsArrow><RiArrowRightSLine size={25}/>
</NavbarItemTextElementsArrow>:null}
<NavbarItemTextElementThree>{navbarCardName}</NavbarItemTextElementThree>
</NabarItemTextContainer>
    <NavbarLogoContainer>
      <NavbarIconNotification>
        <VscBellDot size={20}/>
      </NavbarIconNotification>
       <NavbarLogoIcon> 
        <img src={logo} alt="logo" />
       </NavbarLogoIcon>
       <NavbarIconDropdown>
        <RiArrowDownSLine size={30}/> 
       </NavbarIconDropdown>
    </NavbarLogoContainer>
  </NavbarMainDiv>
  
  </>
    )

}

export default Navbar




