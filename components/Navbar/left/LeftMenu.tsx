"use client";

import { IoMdCloseCircle } from "react-icons/io";
import MenuItems from "./MenuItems";
import React from "react";

interface LeftMenuProps {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const LeftMenu: React.FC<LeftMenuProps> = ({ close, setClose }) => {
  return (
    <div
      className={`fixed w-64 top-0 h-screen ${
        close ? "-left-64" : "left-0"
      } bg-[#282D33] duration-500`}
    >
      <div onClick={() => setClose(true)} className="p-4 w-fit text-lg text-white cursor-pointer hover:text-red-600 duration-300">
        <IoMdCloseCircle />
      </div>
      <MenuItems />
    </div>
  );
};

export default LeftMenu;
