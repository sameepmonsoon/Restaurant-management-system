import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import { SiderLogoDiv, SiderMainDiv, SiderButtonLabel, LogoutSetting, SettingDiv,
          SiderIcon,
          SiderDiv,
          SiderLogoName,
          SiderLogoHeader,
          SiderLogoSubHeader,
          SiderButtonTitle
} from './Sider.Style'
import SiderButton from '../../../Components/SiderButton/SiderButton'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineLogout} from 'react-icons/hi'
import {Link, useNavigate} from "react-router-dom";

import { title } from 'process'
import { RiArrowDropDownLine } from 'react-icons/ri'
import DashboardButton from '../../../Components/DashboardButton/DashboardButton'
import { AiFillPrinter } from 'react-icons/ai'
import ReportButton from '../../../Components/ReportButton/ReportButton'


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
              <SiderButtonTitle>analytics</SiderButtonTitle>
              <DashboardButton icon={<RxDashboard/>} title={"dashboard"} />
              <ReportButton />
          </SiderButtonLabel>
        

          <LogoutSetting>
            <SettingDiv  onClick={handleLogout}>
                <SiderIcon>  <HiOutlineLogout fontSize="1.4rem"/> </SiderIcon>
                <span>Logout</span>
            </SettingDiv>
          </LogoutSetting>

      </SiderMainDiv>
      
    </SiderDiv>


  )
}
