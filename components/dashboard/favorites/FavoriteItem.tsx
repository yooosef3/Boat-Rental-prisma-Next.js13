"use client"

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import pic from "../../../public/images/boat/yacht1.jpeg";

const FavoriteItem = () => {
  return (
    <div className="rounded-md gap-8 flex flex-col md:flex-row justify-between items-center p-5 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-5 md:col-span-2 items-center">
        <Image className="rounded-md" width={250} height={150} alt="boat" src={pic} />
        <div>
          <h2 className="text-slate-900 text-xl bold">Christina Yacht</h2>
          <p className="text-gray-600">کشور انگلستان, اروپا</p>
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row md:col-span-2 items-center">
        <h2 className="bold text-gray-600">150 دلار</h2>
        <Button onClick={()=> {}} label="حذف از موردعلاقه ها" small />
      </div>
    </div>
  );
};

export default FavoriteItem;
