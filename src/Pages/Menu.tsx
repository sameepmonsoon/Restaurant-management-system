import React from "react";
import { Outlet } from "react-router-dom";
import ComingSoon from "../Components/comingSoon/ComingSoon";
import MenuLayout from "../Layout/MenuLayout";

export default function Menu() {
  return (
    <>
      <MenuLayout>
                <ComingSoon/>
        <Outlet />
      </MenuLayout>
    </>
  );
}
