"use client"

import React, { useContext } from "react";

import { BiSolidStar } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GiCaptainHatProfile } from "react-icons/gi";
import { IoMan } from "react-icons/io5";
import { ListingContext } from "./Details";
import { RiSailboatLine } from "react-icons/ri";
import useCountries from "@/hooks/useCountries";

const BoatDescription = () => {
  const {title, description, guestCount, locationValue}:any = useContext(ListingContext);
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <div>
      <div className="flex text-yellow-500 mb-2">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
      </div>
      <h3 className="text-gray-700 text-2xl bold mb-2">{title}</h3>
      <div className="flex items-center gap-5 flex-wrap mb-6">
        <div className="flex items-center gap-2 ">
          <RiSailboatLine className="text-[#BFA888] text-xl" />
          <span className="text-gray-500 medium">قایق بادبانی</span>
        </div>
        <div className="flex items-center gap-2 ">
          <GiCaptainHatProfile className="text-[#BFA888] text-xl" />
          <span className="text-gray-500 medium">با کاپیتان</span>
        </div>
        <div className="flex items-center gap-2 ">
          <IoMan className="text-[#BFA888] text-xl" />
          <span className="text-gray-500 medium">{guestCount}</span>
        </div>
        <div className="flex items-center gap-2 ">
          <FaLocationDot className="text-[#BFA888] text-xl" />
          <span className="text-gray-500 medium">{location?.label}</span>
        </div>
      </div>
      <h3 className="text-lg medium text-gray-700 mb-3">توضیحات کشتی</h3>
      <p className="text-gray-500">
        {description}
      </p>
      <p className="text-gray-500 mt-7 mb-4">
        می‌توانید از هیجان‌های پیمایش در امواج بریتانی یا آب‌های شفاف سیشل لذت
        ببرید، یا در دریای مدیترانه با شکوه سفر کنید، جایی که بیشترین غلظت
        قایق‌های بادبانی اجاره‌ای را خواهید یافت. مجموعه گسترده قایق‌های ما را
        از اجاره‌کنندگان حرفه‌ای در سراسر جهان مرور کنید و شروع به برنامه‌ریزی
        ماجراجویی قایقرانی بعدی خود کنید. تیم مشاوران متخصص ما به شما کمک می
        کنند تا قایق مناسب را در مقصد رویایی خود با بهترین قیمت پیدا کنید!
      </p>
      <video controls className="w-full">
        <source
          src="/video/In Conversation With _ The Experts behind 70M_229'08 Benetti ALFA Yacht for sale.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default BoatDescription;
