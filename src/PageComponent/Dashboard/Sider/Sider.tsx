import React from "react";
import { RxDashboard } from "react-icons/rx";
import {
  SiderLogoDiv,
  SiderMainDiv,
  SiderButtonLabel,
  LogoutSetting,
  SettingDiv,
  SiderIcon,
  SiderDiv,
  SiderLogoName,
  SiderLogoHeader,
  SiderLogoSubHeader,
  SiderButtonTitle,
} from "./Sider.Style";
import SiderButton from "../../../Components/SiderButton/SiderButton";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { title } from "process";
import { RiArrowDropDownLine } from "react-icons/ri";
import DashboardButton from "../../../Components/DashboardButton/DashboardButton";
import { AiFillPrinter } from "react-icons/ai";
import ReportButton from "../../../Components/ReportButton/ReportButton";
import { siderToggle } from "../../../Pages/states/NavBar.state";

export default function Sider() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const { openSider } = siderToggle();
  return (
    <SiderDiv openSider={openSider}>
      <SiderLogoDiv>
        <SiderIcon>
          <img
            src="/assets/logo.png"
            alt="LOGO"
            style={{ width: "52px", height: "52px" }}
          />
        </SiderIcon>
        <SiderLogoName>
          <SiderLogoHeader>KPOP</SiderLogoHeader>
          <SiderLogoSubHeader>Restaurant</SiderLogoSubHeader>
        </SiderLogoName>
      </SiderLogoDiv>

      <SiderMainDiv>
        <SiderButtonLabel>
          <SiderButtonTitle>analytics</SiderButtonTitle>
          <Link to="/home" style={{ color: "#090909", textDecoration: "none" }}>
            <DashboardButton
              icon={<RxDashboard size={25} />}
              title={"dashboard"}
            />
          </Link>
          <ReportButton />
          <Link to="/menu" style={{ color: "#090909", textDecoration: "none" }}>
            <DashboardButton icon={<RxDashboard size={25} />} title={"Menu"} />
          </Link>
        </SiderButtonLabel>

        <LogoutSetting>
          <SettingDiv onClick={handleLogout}>
            <SiderIcon>
              <HiOutlineLogout fontSize="1.4rem" />
            </SiderIcon>
            <span>Logout</span>
          </SettingDiv>
        </LogoutSetting>
      </SiderMainDiv>
    </SiderDiv>
  );
}
