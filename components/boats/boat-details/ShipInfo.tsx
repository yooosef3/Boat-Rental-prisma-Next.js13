"use client";

import { ListingContext } from "./Details";
import { useContext } from "react";

const ShipInfo = () => {
  const { roomCount, bathroomCount, title, price }: any =
    useContext(ListingContext);

  const info = [
    { id: 1, key: "قیمت هر شب", value: "$" + price },
    { id: 2, key: "شناسه قایق", value: "1927" },
    { id: 3, key: "اتاق های خواب", value: roomCount },
    { id: 4, key: "طول", value: "41.76m" },
    { id: 5, key: "نام قایق", value: title },
    { id: 6, key: "سیاست سوخت", value: "مالک پرداخت می کند" },
    { id: 7, key: "ظرفیت پردازنده", value: "8" },
    { id: 8, key: "تعداد کابین", value: "3" },
    { id: 9, key: "مدل", value: "45" },
    { id: 10, key: "سازنده", value: "Mondomarine" },
    { id: 11, key: "مصرف سوخت موتور اصلی", value: "790 lt/hr" },
    { id: 12, key: "اتاق ها", value: roomCount },
    { id: 13, key: "حمام ها", value: bathroomCount },
    { id: 14, key: "نوع موتور قایق", value: "Sail" },
    { id: 15, key: "عرض", value: "8.18m" },
    { id: 16, key: "تعداد اسکله", value: "3" },
    { id: 17, key: "سال", value: "2006" },
    { id: 18, key: "سرعت", value: "13 گره کروز / 15 گره حداکثر" },
    { id: 19, key: "ژنراتورها", value: "3 X Volvo Penta D16C-AMG1800 RPM" },
    { id: 20, key: "لغو", value: "در حد متوسط" },
  ];

  return (
    <div className="p-7 bg-white my-7 rounded-md shadow-md">
      <h3 className="bold text-[#BFA888] text-lg mb-5">جزئیات کشتی</h3>
      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-0">
        <div className="flex-1">
          {info.slice(0, 10).map((item) => (
            <div key={item.id} className="flex items-center mb-1 gap-1">
              <h2 className="bold text-slate-800">{item.key}:</h2>
              <h2 className="medium text-slate-700">{item.value}</h2>
            </div>
          ))}
        </div>
        <div className="flex-1">
          {info.slice(11, 20).map((item) => (
            <div key={item.id} className="flex items-center mb-1 gap-1">
              <h2 className="bold text-slate-800">{item.key}:</h2>
              <h2 className="medium text-slate-700">{item.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipInfo;
