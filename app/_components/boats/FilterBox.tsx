"use client";

import { AiFillHome } from "react-icons/ai";
import { IoMdBoat } from "react-icons/io";
import React from "react";

interface FilterProps {
  id: number;
  options: string[];
}
const FilterBox: React.FC<FilterProps> = ({ id, options }) => {
  return (
    <div className="h-14 w-full relative bg-white shadow-md rounded-lg flex items-center border">
      <select className="h-full w-full outline-none border pr-5">
        {options.map((item, i) => (
          <option  key={i}>{item}</option>
          ))}
      </select>
      {id === 1 ? <IoMdBoat className='text-[#BFA888] absolute left-3 text-xl' /> : <AiFillHome className='text-[#BFA888] absolute left-3 text-xl' />}
    </div>
  );
};

export default FilterBox;
