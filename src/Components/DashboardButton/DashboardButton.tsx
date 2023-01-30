import React, { useState } from "react";
import {
  DashboardButtonIcon,
  DashboardButtonMainDiv,
  DashboardButtonText,
  DashboardButtonInnerDiv,
} from "./DashboardButton.styles";

import { DashboardButtonTypes } from "../../Types/Components/DashboardButtonTypes";

const DashboardButton = (props: DashboardButtonTypes) => {
  const { icon, title, location } = props;

  return (
    <>
      <DashboardButtonMainDiv activeSider={location}>
        <DashboardButtonInnerDiv activeSider={location}>
          <DashboardButtonIcon>{icon}</DashboardButtonIcon>
          <DashboardButtonText>{title}</DashboardButtonText>
        </DashboardButtonInnerDiv>
      </DashboardButtonMainDiv>
    </>
  );
};

export default DashboardButton;
