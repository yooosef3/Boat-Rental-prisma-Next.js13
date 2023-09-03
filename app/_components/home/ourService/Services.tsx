"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import boat from "../../../../public/images/home/Capture-removebg-preview.png";
import captain from "../../../../public/images/home/captain.png";
import langar from "../../../../public/images/home/langar.png";
import weel from "../../../../public/images/home/weel.png";

const cards = [
  {
    id: 1,
    image: boat,
    title: "یک قایق بادبانی پیدا کنید",
    info: "جستجوی 15 قایق تفریحی آماده اجاره و اجاره در مقاصد برتر قایق رانی.",
  },
  {
    id: 2,
    image: captain,
    title: "سفر خود را رزرو کنید",
    info: "با یک پلتفرم رزرو با کاربری آسان به مالک پیام دهید و رزرو کنید.",
  },
  {
    id: 3,
    image: langar,
    title: "خدمات شخصی سازی شده",
    info: "می توانید یک قایق بادبانی با یا بدون کاپیتان یا با سایر امکانات اضافی رزرو کنید.",
  },
  {
    id: 4,
    image: weel,
    title: "از ماجراجویی خود لذت ببرید",
    info : "با راهنماهای محلی خبره یا اجاره های خودراهنما، تجربیات شخصی را دریافت کنید.",
  },
];
const Services = () => {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 section bg-[#F4EBE4]">
      {cards.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
};

export default Services;
