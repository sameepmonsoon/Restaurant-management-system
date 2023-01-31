import React, { useState } from "react";
import {
  DashboardButtonIcon,
  DashboardButtonMainDiv,
  DashboardButtonText,
} from "./DashboardButton.styles";

import { DashboardButtonTypes } from "../../Types/Components/DashboardButtonTypes";

const DashboardButton = (props: DashboardButtonTypes) => {
  const { icon, title, location } = props;

  return (
    <>
      <DashboardButtonMainDiv activeSider={location}>
        <DashboardButtonIcon>{icon}</DashboardButtonIcon>
        <DashboardButtonText>{title}</DashboardButtonText>
      </DashboardButtonMainDiv>
    </>
  );
};

export default DashboardButton;
