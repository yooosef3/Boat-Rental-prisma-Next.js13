"use client";

import Boats from "../home/BoatsList/Boats";
import FilterBox from "./FilterBox";
import ModalBox from "./ModalBox";
import React from "react";

const modals = [
  { id: 1, label: "مهمان ها" },
  { id: 2, label: "تاریخ رزرو" },
];
const filters = [
  {
    id: 1,
    options: [
      "Choose Yacht",
      "Kamalaya",
      "Christina",
      "Solandge Yacht",
      "La Datch",
      "Coco Bean",
      "Comet",
      "Utopia",
      "Serenity Blue",
      "Cross Ocean",
      "Bavaria",
      "Montana",
    ],
  },
  {
    id: 2,
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
];
const BoatList = ({  boats, currentUser }: any) => {

  return (
    <div className="h-full bg-[#F6F6F6] md:overflow-y-scroll py-8 px-5">
      <input
        className="border mb-3 shadow rounded-md outline-none h-12 pr-5 w-full"
        type="text"
        placeholder="موقعیت"
      />
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {filters.map((item) => (
          <FilterBox key={item.id} {...item} />
        ))}
        {modals.map((item) => (
          <ModalBox key={item.id} {...item} />
        ))}
      </div>
      <div className="bg-white py-7 mt-5 px-5">
        <h2 className="bold text-xl mb-5 text-slate-900">
          یک قایق روی نقشه پیدا کن
        </h2>
        <Boats boats data={boats} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default BoatList;
