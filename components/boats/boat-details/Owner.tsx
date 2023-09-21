"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "../../../public/images/boat/owner.jpeg";

const Owner = () => {
  return (
    <div className="bg-[#BFA888] py-10 flex flex-col lg:flex-row gap-7 lg:items-center lg:gap-14 px-10 lg:px-32">
      <Image
        className="rounded-full border-4 border-[#937240] w-[150px] h-[150px]"
        alt="owner"
        src={user}
        width={1000}
        height={1000}
      />
      <div className="text-white">
        <h2 className="text-5xl medium mb-4">Luca Foggia</h2>
        <p className="">
          از شما برای بررسی قایق های من متشکرم! من بسیار منظم هستم و یک آپارتمان
          بسیار تمیز نگه دارم. من عاشق سفر، ملاقات و تعامل با افراد جدید از نقاط
          مختلف جهان هستم. من در استراتژی تجارت الکترونیک دیجیتال و جهانی در شهر
          نیویورک کار می‌کنم و عاشق تجربه همه چیزهای عالی این شهر هستم، از
          رستوران‌های خوشمزه و نوآورانه و موزه‌های عالی، تا پیاده‌روی از محل کار
          به خانه در امتداد خط برجسته.
        </p>
        <Link href="tel:09226308183">
          <h2 className="border rounded-full medium px-5 py-1 mt-7 w-fit hover:bg-white hover:text-[#BFA888] duration-200">
            تماس با مالک
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Owner;
