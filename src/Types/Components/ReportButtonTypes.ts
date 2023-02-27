import React from "react";

export type ReportButtonTypes = {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
  label: string;
  openDropDown?: boolean;
  onClick?: () => void;
  options: Array<{ label: string; link: string }>;
  activeSider: boolean;
};
