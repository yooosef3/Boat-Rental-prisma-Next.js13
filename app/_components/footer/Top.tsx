"use client";

import { AiFillHome, AiFillPhone, AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FiInstagram, FiMonitor } from "react-icons/fi";

import { GoMail } from "react-icons/go";
import React from "react";
import Title from "./Title";

const links = [
  { id: 1, name: "آنچه مهمانان هنگام اجاره قایق تفریحی می خواهند بدانند" },
  { id: 2, name: "چگونه یک میزبان عالی برای اجاره کنندگان قایق بادبانی باشیم" },
  { id: 3, name: "ارائه یک فضای پذیرایی کامل به دوستداران قایق" },
  { id: 4, name: "برای سفر بعدی خود الهام بگیرید" },
  { id: 5, name: "اجاره قایق بادبانی ایران برای تعطیلات بعدی شما" },
  { id: 6, name: "اجاره قایق بادبانی مدیترانه ای برای اجاره" },
];
const Top = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <Title title="درباره اجاره WP" />
        <p className="text-white">
          WP RENTALS متعهد به ارائه سطح بالایی از تخصص، خدمات مشتری و توجه به
          جزئیات به بازار اجاره قایق است. ما برجسته ترین قالب وردپرس را برای
          چنین پروژه ای می سازیم. تست کنید و خودتان را قانع کنید.
        </p>
      </div>
      <div>
        <Title title="آخرین خبرها" />
        <ul>
          {links.map((link) => (
            <li className="text-white hover:text-[#BFA98C] cursor-pointer mb-1 duration-200" key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Title title="تماس با ما"/>
        <div className="flex flex-col justify-center items-center md:items-start">
            <div className="flex text-white mb-3 items-center gap-2">
                <AiFillHome />
                <h3>تهران, تجریش</h3>
            </div>
            <div className="flex text-white mb-3 items-center gap-2">
                <AiFillPhone />
                <h3>(305) 555-4446</h3>
            </div>
            <div className="flex text-white mb-3 items-center gap-2">
                <GoMail />
                <h3>email@yourdomain.com</h3>
            </div>
            <div className="flex text-white mb-3 items-center gap-2">
                <FiMonitor />
                <h3>WP Rentals</h3>
            </div>
        </div>
        <div className="flex gap-5 justify-center md:justify-start items-center text-[#BFA888] text-xl mt-8">
            <BiLogoFacebook className='duration-200 hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full'/>
            <AiOutlineTwitter className='duration-200 hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full'/>
            <AiOutlineGooglePlus className='duration-200 hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full'/>
            <FiInstagram className='duration-200 hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full'/>
            <BiLogoLinkedin className='duration-200 hover:scale-110 cursor-pointer hover:ring-1 hover:ring-slate-400 rounded-full'/>
        </div>
      </div>
    </div>
  );
};

export default Top;
