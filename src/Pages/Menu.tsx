import React from "react";
import { Outlet } from "react-router-dom";
import MenuLayout from "../Layout/MenuLayout";

export default function Menu() {
  return (
    <>
      <MenuLayout>
                <div>
                    <img src="/assets/logo.png"  alt="logo" />
                    <h3>Coming Soon</h3>
                </div>
        <Outlet />
      </MenuLayout>
    </>
  );
}
