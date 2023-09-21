"use client";

import BoatSearch from "./BoatSearch";
import React from "react";
import boat from "../../../public/images/home/header_overview.jpeg";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${boat.src})`, height: "100vh" }}
      className="relative bg-center bg-cover bg-no-repeat w-full"
    >
      <div className="absolute bg-slate-800 inset-0 opacity-40"></div>
      <div className="flex flex-col gap-7 lg:gap-10 items-center lg:items-start justify-center text-white mt-16 absolute inset-0 px-10 lg:px-20 xl:px-32">
        <h1 className="bold text-3xl lg:text-5xl xl:text-6xl">
          سفری هیجان انگیز
        </h1>
        <p className="text-center lg:text-right max-w-2xl lg:text-lg medium leading-7">
          برای تعطیلات خود یک سوپر قایق تفریحی می خواهید؟ آیا می خواهید قایق
          عالی را اجاره کنید؟ و در اطراف جزایر مورد علاقه خود بادبانی کنید؟ ما
          هوای شما را داریم!
        </p>
        <BoatSearch />
      </div>
    </div>
  );
};

export default Banner;
