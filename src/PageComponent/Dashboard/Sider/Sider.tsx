import React from "react";
import { RxDashboard } from "react-icons/rx";
import {
  SiderLogoDiv,
  SiderMainDiv,
  SiderButtonLabel,
  SettingDiv,
  SiderIcon,
  SiderDiv,
  SiderLogoName,
  SiderLogoHeader,
  SiderLogoSubHeader,
  SiderButtonTitle,
} from "./Sider.Style";
import SiderButton from "../../../Components/SiderButton/SiderButton";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { HiOutlineDocumentReport, HiOutlineLogout } from "react-icons/hi";
import { Link, useNavigate, useLocation, matchPath } from "react-router-dom";

import { title } from "process";
import { GiRoundTable } from "react-icons/gi";
import DashboardButton from "../../../Components/DashboardButton/DashboardButton";
import { AiFillPrinter } from "react-icons/ai";
import ReportButton from "../../../Components/ReportButton/ReportButton";
import { siderToggle } from "../../../Pages/states/NavBar.state";
export default function Sider() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const { pathname } = useLocation();
  const isPath = matchPath("/home/*", pathname);
  const { openSider } = siderToggle();
  function getStatus() {
    if (location.pathname.includes("/home")) {
      return true;
    } else {
      return false;
    }
  }

  function getLocation() {
    if (location.pathname.includes("/report")) {
      return true;
    } else {
      return false;
    }
  }

  function getReport() {
    if (location.pathname.includes("/tables")) {
      return true;
    } else {
      return false;
    }
  }
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
              location={getStatus()}
            />
          </Link>
          <Link
            to="/tables"
            style={{ color: "#090909", textDecoration: "none" }}>
            <ReportButton
              icon1={<GiRoundTable size={30} />}
              label={"Table"}
              icon2={<IoIosArrowUp size={25} />}
              icon3={<IoIosArrowDown size={25} />}
              activeSider={getReport()}
              options={[
                { label: "1st Floor", link: "/tables/floorFirst" },
                { label: "2nd Floor", link: "/tables/floorSecond" },
              ]}
            />
          </Link>

          <Link to="/menu" style={{ color: "#090909", textDecoration: "none" }}>
            <DashboardButton
              icon={<RxDashboard size={25} />}
              title={"Menu"}
              location={location.pathname === "/menu"}
            />
          </Link>

          <Link
            to="/customer"
            style={{ color: "#090909", textDecoration: "none" }}>
            <DashboardButton
              icon={<RxDashboard size={25} />}
              title={"Customer"}
              location={location.pathname === "/customer"}
            />
          </Link>

          <Link
            to="/weborder"
            style={{ color: "#090909", textDecoration: "none" }}>
            <DashboardButton
              icon={<RxDashboard size={25} />}
              title={"Web Order"}
              location={location.pathname === "/weborder"}
            />
          </Link>
          <Link
            to="/report/purchase"
            style={{ color: "#090909", textDecoration: "none" }}>
            <ReportButton
              icon1={<HiOutlineDocumentReport size={30} />}
              label={"Report"}
              icon2={<IoIosArrowUp size={25} />}
              icon3={<IoIosArrowDown size={25} />}
              activeSider={getLocation()}
              options={[
                { label: "Purchase", link: "/report/purchase" },
                { label: "Sell", link: "/report/sales" },
                { label: "Stock", link: "/report/stocks" },
                { label: "Profit Analysis", link: "/report/profitanalysis" },
              ]}
            />
          </Link>

          <SettingDiv onClick={handleLogout}>
            <HiOutlineLogout fontSize="2rem" />
            <span>Logout</span>
          </SettingDiv>
        </SiderButtonLabel>
      </SiderMainDiv>
    </SiderDiv>
  );
}
