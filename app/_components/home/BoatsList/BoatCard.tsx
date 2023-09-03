"use client";

import { BiSolidStar } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import React from "react";
import Slider from "../../Slider";

const BoatCard = () => {
  return (
    <div className="rounded-md shadow-md group hover:shadow-lg duration-300">
      <Slider />
      <div className="p-5">
        <div className="flex text-yellow-500 mb-3">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <div>
          <h3 className="text-[#0A1B40] cursor-pointer w-fit group-hover:text-[#D0AF8C] duration-300 semibold text-xl mb-3">
            Solandge Yacht
          </h3>
          <div className="flex text-gray-500 mb-1 items-center gap-1">
            <GoHome />
            <p className="medium text-sm">قایق بادبانی / با کاپیتان</p>
          </div>
          <div className="flex items-center text-sm gap-5">
            <div className="flex items-center text-gray-500 gap-2">
              <MdLocationPin />
              <span>ibiza</span>
            </div>
            <div className="flex items-center text-gray-500 gap-2">
              <span className="bold">ظرفیت:</span>
              <span>1</span>
            </div>
            <div className="flex items-center text-gray-500 gap-2">
              <span className="bold">کابین:</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
