"use client";

import Image from "next/image";
import React from "react";

interface CardProps {
  image: any;
  city: string;
  id: number;
}
const Card: React.FC<CardProps> = ({ image, city, id }) => {
  return (
    <div className='lg:h-[378px] relative cursor-pointer'>
      <Image alt={city} src={image} className="h-full rounded-md" />
      <div className='absolute inset-0 z-10 text-white rounded-md bg-gradient-to-b from-transparent via-black to-black opacity-20 duration-300 hover:opacity-0 '></div>
      <div className='absolute inset-0 p-2 flex justify-end text-white bold'>{city}</div>
    </div>
  );
};

export default Card;
