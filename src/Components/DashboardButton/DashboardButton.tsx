import React from "react";
import {
  DashboardButtonIcon,
  DashboardButtonMainDiv,
  DashboardButtonText,
} from "./DashboardButton.styles";

import { DashboardButtonTypes } from "../../Types/Components/DashboardButtonTypes";

const DashboardButton = (props: DashboardButtonTypes) => {
  const { icon, title } = props;
  return (
    <>
      <DashboardButtonMainDiv>
        {/* <RxDashboard size={20}/> */}
        <DashboardButtonIcon>{icon}</DashboardButtonIcon>
        <DashboardButtonText>{title}</DashboardButtonText>
      </DashboardButtonMainDiv>
    </>
  );
};

export default DashboardButton;
