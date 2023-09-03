"use client";

import Image, { StaticImageData } from "next/image";

import { BiSolidStar } from "react-icons/bi";
import React from "react";

interface SlideProps {
  id: number;
  title: string;
  desc: string;
  name: string;
  country: string;
  image: StaticImageData;
}
const Slide: React.FC<SlideProps> = ({
  id,
  title,
  desc,
  country,
  image,
  name,
}) => {
  return (
    <div key={id} className="keen-slider__slide number-slide1 md:flex">
      <div className="md:w-[50%] p-14">
        <h2 className="mb-10 text-lg bold text-gray-900">{title}</h2>
        <p className="text-[#9F9F9F] medium mb-20">{desc}</p>
        <div className="flex text-yellow-500 mb-2">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <h3 className="text-[#BFA888] semibold text-lg">{name}</h3>
        <span className="text-[#c4baad] text-sm medium">{country}</span>
      </div>
      <div className="md:w-[50%] h-full hidden md:block">
        <Image
          alt={name}
          src={image}
          width={1000}
          height={1000}
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Slide;
