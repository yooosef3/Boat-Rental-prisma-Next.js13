import Enter from "./right/Enter";
import Logo from "./left/Logo";
import MenuButton from "./left/MenuButton";
import MenuLinks from "./middle/MenuLinks";
import MobileUser from "./right/MobileUser";
import React from "react";

const Navbar = () => {
  return (
      <div className="flex fixed top-0 inset-x-0 z-30 justify-between items-center text-white medium p-5 px-10 lg:px-20 xl:px-32 bg-[#282D33] lg:bg-opacity-0">
        <MobileUser />
        <Enter />
        <Logo />
        <MenuLinks />
        <MenuButton />
      </div>
  );
};

export default Navbar;
