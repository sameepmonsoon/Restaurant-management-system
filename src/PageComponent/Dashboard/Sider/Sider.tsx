import React from 'react'
import { SiderLogoDiv, SiderMainDiv, SiderButtonLabel, LogoutSetting, SettingDiv,
          SiderIcon,
          SiderDiv,
          SiderLogoName,
          SiderLogoHeader,
          SiderLogoSubHeader
} from './Sider.Style'
import SiderButton from '../../../Components/SiderButton/SiderButton'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineLogout} from 'react-icons/hi'
import {useNavigate} from "react-router-dom";

import { title } from 'process'
import { RiArrowDropDownLine } from 'react-icons/ri'


export default function Sider() {
  const navigate = useNavigate();
  const handleLogout =()=>{
    navigate("/")
  }
  return (

    <SiderDiv>
      <SiderLogoDiv>
          <SiderIcon>
            <img src="/assets/logo.png" alt="LOGO"  style={{width: "52px", height: "52px"}}/>
          </SiderIcon>
          <SiderLogoName>
            <SiderLogoHeader>KPOP</SiderLogoHeader>
            <SiderLogoSubHeader>Restaurant</SiderLogoSubHeader>
          </SiderLogoName>

      </SiderLogoDiv>

      <SiderMainDiv>
          <SiderButtonLabel>
              <h6 style={{color:"#1E1E1E", fontWeight:"600"}}>ANALYTICS</h6>
              <section> DASHBOARD COMPONENT </section>
              
          </SiderButtonLabel>
          <LogoutSetting>
            <SettingDiv>
                <SiderIcon> <FiSettings fontSize="1.1rem"/></SiderIcon>
                <span>Settings</span>
            </SettingDiv>

            <SettingDiv  onClick={handleLogout}>
                <SiderIcon>  <HiOutlineLogout fontSize="1.4rem"/> </SiderIcon>
                <span>Logout</span>
            </SettingDiv>
          </LogoutSetting>

      </SiderMainDiv>
      
    </SiderDiv>


  )
}
