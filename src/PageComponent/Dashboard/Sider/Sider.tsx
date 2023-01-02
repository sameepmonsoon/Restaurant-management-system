import React from 'react'
import { SiderLogoDiv, SiderMainDiv, SiderButtonLabel, LogoutSetting, SettingDiv,
          SiderIcon,
          SiderDiv
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
            <img src="/assets/logo.png" alt="LOGO" />
          </SiderIcon>
          <div>
            <h4>KPOP</h4>
            <p>Restaurant</p>
          </div>

      </SiderLogoDiv>

      <SiderMainDiv>
          <SiderButtonLabel>
              <h6>ANALYTICS</h6>
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

    <div>
      I am sider .
    </div>

  )
}
