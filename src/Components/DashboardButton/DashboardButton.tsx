import React, { useState } from "react";
import {
  DashboardButtonIcon,
  DashboardButtonMainDiv,
  DashboardButtonText,
  DashboardButtonInnerDiv,
} from "./DashboardButton.styles";

import { DashboardButtonTypes } from "../../Types/Components/DashboardButtonTypes";

const DashboardButton = (props: DashboardButtonTypes) => {
  const { icon, title, location, disableTransition, ...rest } = props;

  return (
    <>
      <DashboardButtonMainDiv
        activeSider={location}
        {...rest}
        disableTransition={disableTransition}>
        <DashboardButtonInnerDiv
          activeSider={location}
          disableTransition={disableTransition}>
          <DashboardButtonIcon>{icon}</DashboardButtonIcon>
          <DashboardButtonText>{title}</DashboardButtonText>
        </DashboardButtonInnerDiv>
      </DashboardButtonMainDiv>
    </>
  );
};

export default DashboardButton;
