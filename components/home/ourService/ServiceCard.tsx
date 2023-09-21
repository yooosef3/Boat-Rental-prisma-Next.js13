"use client";

import Image from "next/image";
import React from "react";

interface ServiceProps {
  image: any;
  title: string;
  info: string;
  id: number;
}
const ServiceCard: React.FC<ServiceProps> = ({ image, title, info, id }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <Image
        className="md:col-span-1 mx-auto"
        src={image}
        alt={title}
        width={120}
        height={120}
      />
      <div className="text-center md:col-span-4 md:text-right mt-4">
        <h2 className="text-[#0A1B40] mb-4 bold text-lg">{title}</h2>
        <p className="text-gray-500 max-w-md">{info}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
