"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import pic from "../../../public/images/boat/yacht1.jpeg";

const ListingItem = () => {
  return (
    <div className="bg-gray-100 p-3 w-[285px] rounded-md border">
      <div className="w-full h-44 overflow-hidden rounded-md">
        <Image
          alt="listing"
          className="w-full h-full hover:scale-105 duration-200"
          src={pic}
        />
      </div>
      <div className="pt-3">
        <h2 className="bold text-gray-700">انگلیس, اروپا</h2>
        <h3 className="text-gray-500 text-sm my-2">150 دلار/ هر شب</h3>
        <Button label="حذف از لیست" onClick={() => {}} />
      </div>
    </div>
  );
};

export default ListingItem;
