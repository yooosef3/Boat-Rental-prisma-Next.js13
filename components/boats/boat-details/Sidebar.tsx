"use client";

import React, { useState } from "react";

import { BiSolidStar } from "react-icons/bi";
import MobileReserve from "./MobileReserve";
import Reserve from "./Reserve";

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
    {toggle && 
        <MobileReserve toggle={toggle} setToggle={setToggle} />
    }
      <div className="flex items-center bg-white p-5 fixed inset-x-0 bottom-0 shadow-lg justify-between lg:hidden">
        <div>
          <div className="flex text-yellow-500 mb-3 gap-1">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
          <h3 className="text-[#BFA888] text-xl medium">هر شب 500 دلار</h3>
        </div>
        <h3 onClick={()=> setToggle(true)} className="bg-[#BFA888] text-white rounded text-center py-1 px-7 hover:opacity-90 duration-200 cursor-pointer text-lg">
          رزرو
        </h3>
      </div>
      <div className="lg:col-span-1 sticky top-28 h-fit">
        <Reserve />
      </div>
    </>
  );
};

export default Sidebar;
