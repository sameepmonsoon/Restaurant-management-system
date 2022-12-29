import React from 'react'
import { SiderMainDiv, SiderButtonLabel, LogoutSetting, SettingDiv,
          SiderIcon
} from './Sider.Style'
import SiderButton from '../../../Components/SiderButton/SiderButton'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineLogout} from 'react-icons/hi'
import {useNavigate} from "react-router-dom";

import { title } from 'process'


export default function Sider() {
  const navigate = useNavigate();
  const handleLogout =()=>{
    navigate("/")
  }
  return (
    <div>
      <SiderMainDiv>
          <SiderButtonLabel>
              <h6>ANALYTICS</h6>
              <section> SiderButton </section>
              {/* <SiderButton titleIcon={<RiArrowDropDownLine/>} title={"Dashboard"} /> */}
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
      
    </div>

  )
}
