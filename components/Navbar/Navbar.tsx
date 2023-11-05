"use client";

import React, { createContext, useEffect, useState } from "react";

import Enter from "./right/Enter";
import Logo from "./left/Logo";
import MenuButton from "./left/MenuButton";
import MenuLinks from "./middle/MenuLinks";
import MobileUser from "./right/MobileUser";
import { SafeUser } from "@/app/types";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}
export const NavbarContext = createContext();
const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const path = usePathname();
  const [navbar, setNavbar] = useState<boolean>(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  if (path === "/")
    return (
      <NavbarContext.Provider value={{ navbar, currentUser }}>
        <div
          className={`flex fixed top-0 inset-x-0 z-50 justify-between items-center  medium p-5 px-10 lg:px-20 xl:px-32 ${
            navbar
              ? "lg:bg-white lg:shadow-md lg:text-slate-900"
              : " lg:bg-opacity-0 "
          } bg-[#282D33] text-white`}
        >
          <MobileUser />
          <Enter />
          <Logo />
          <MenuLinks />
          <MenuButton />
        </div>
      </NavbarContext.Provider>
    );

  return (
    <NavbarContext.Provider value={{ navbar, currentUser }}>
      <div
        className={`flex fixed top-0 inset-x-0 z-30 justify-between items-center  medium p-5 px-10 lg:px-20 xl:px-32 lg:bg-white text-white lg:text-slate-900 shadow-md bg-[#282D33] `}
      >
        <MobileUser />
        <Enter />
        <Logo />
        <MenuLinks />
        <MenuButton />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
