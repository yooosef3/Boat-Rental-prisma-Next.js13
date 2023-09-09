"use client";

import { GiCaptainHatProfile, GiPressureCooker } from "react-icons/gi";

import { CgSmartHomeCooker } from "react-icons/cg";
import { FaBed } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaShower } from "react-icons/fa";
import { FaSink } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaWaterLadder } from "react-icons/fa6";
import Feature from "./Feature";
import { GiElectric } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { GiPaddles } from "react-icons/gi";
import { GiRocketThruster } from "react-icons/gi";
import { HiRadio } from "react-icons/hi2";
import { LuRefrigerator } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { MdDeck } from "react-icons/md";
import { MdOutlineGpsFixed } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import React from "react";
import { TbFreezeRowColumn } from "react-icons/tb";
import { TbLayoutBoardSplit } from "react-icons/tb";

const info = [
  {
    id: 1,
    name: "موارد اضافی",
    items: [
      { label: "ملحفه", Icon: <FaBed /> },
      { label: "دوش", Icon: < FaShower />  },
      { label: "سرگرمی رسانه ای", Icon: < FaMobileAlt />  },
      { label: "تجهیزات غواصی", Icon: < FaSwimmer />  },
    ],
  },
  {
    id: 2,
    name: "آشپزخانه",
    items: [
      { label: 'میز غذاخوری', Icon: < MdTableBar />  },
      { label: 'فر / اجاق گاز', Icon: < GiPressureCooker />  },
      { label: 'سینک', Icon: < FaSink />  },
      { label: 'فریزر', Icon: < TbFreezeRowColumn />  },
      { label: 'یخچال', Icon: < FaSwimmer />  },
    ],
  },
  {
    id: 3,
    name: 'فعالیت های اوقات فراغت',
    items: [
      { label: 'تخته پارویی', Icon: < GiPaddles />  },
      { label: 'مناسب برای مهمانی ها', Icon: < GiGlassCelebration />  },
      { label: 'سکوی شنا جمع شونده', Icon: < FaSwimmingPool />  },
      { label: 'مناسب برای غواصی', Icon: < FaPersonSwimming />  },
    ],
  },
  {
    id: 4,
    name: 'تجهیزات ناوبری',
    items: [
      { label: "ملوان اتوماتیک", Icon: < GiCaptainHatProfile />  },
      { label: "صداگیر عمق", Icon: < LuTimer />  },
      { label: 'VHF', Icon: < HiRadio />  },
      { label: 'پیشران کمان', Icon: < GiRocketThruster />  },
      { label: 'GPS', Icon: < MdOutlineGpsFixed />  },
    ],
  },
  {
    id: 5,
    name: 'تجهیزات فضای باز',
    items: [
      { label: "نردبان حمام", Icon: < FaWaterLadder />  },
      { label: "عرشه آفتابی کمان", Icon: < MdDeck />  },
      { label: 'خارج از قایق', Icon: < TbLayoutBoardSplit />  },
      { label: 'چتر آفتابی', Icon: < FaUmbrellaBeach />  },
      { label: 'بادگیر برقی', Icon: < GiElectric />  },
      { label: 'موتور بیرونی', Icon: < PiEngineFill />  },
    ],
  }
];
const ShipFeature = () => {
  return (
    <div className="p-7 bg-white rounded-md shadow-md">
      <h3 className="bold text-[#BFA888] text-lg mb-5"> ویژگیهای کشتی</h3>
      <div className="flex flex-col">
        {info.map(item => 
          <div key={item.id} className="mb-5">
            <h3 className="text-lg mb-1 text-slate-700 bold">{item.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {item.items.map(feature => 
                <Feature key={feature.label} label={feature.label} Icon={feature.Icon} />
                )}
            </div>
          </div>
          )}
      </div>
    </div>
  );
};

export default ShipFeature;
