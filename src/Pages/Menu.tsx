import React from "react";
import { Outlet } from "react-router-dom";
import MenuLayout from "../Layout/MenuLayout";

export default function Menu() {
  return (
    <>
      <MenuLayout>
        <Outlet />
      </MenuLayout>
    </>
  );
}
