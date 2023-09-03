"use client";

import Image, { StaticImageData } from "next/image";

import { BiSolidStar } from "react-icons/bi";
import React from "react";

interface CaptainProps {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
}
const CaptainCard: React.FC<CaptainProps> = ({ id, name, role, image }) => {
  return (
    <div className="group w-full  overflow-hidden rounded-md shadow-md group hover:shadow-lg duration-300">
      <div className="h-[250px]  overflow-hidden">
        <Image
          className="w-full rounded-md h-full object-cover group-hover:scale-105 duration-500"
          alt={name}
          src={image}
          width={300}
          height={200}
        />
      </div>
      <div className="p-5">
        <div className="flex text-yellow-500 mb-3">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <h3 className="text-[#0A1B40] cursor-pointer w-fit group-hover:text-[#D0AF8C] duration-300 medium text-xl mb-3">
          {name}
        </h3>
        <p className="text-gray-600 text-sm medium">{role}</p>
      </div>
    </div>
  );
};

export default CaptainCard;
