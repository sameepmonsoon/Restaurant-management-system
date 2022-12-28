import React from "react";

export type ActionButtonProps = {
    icon: React.ReactNode;
    label: String,
    onClick: (e: React.MouseEvent<HTMLElement>)=> void

  }