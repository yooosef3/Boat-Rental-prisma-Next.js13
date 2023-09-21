"use client";

import CaptainCard from "./CaptainCard";
import Info from "../../Info";
import React from "react";
import captain1 from "../../../public/images/home/owner.jpeg";
import captain2 from "../../../public/images/home/owner2.jpeg";
import captain3 from "../../../public/images/home/captain.jpg";

const captains = [
  { id: 1, name: "James Popeye", role: "صاحب قایق و کاپیتان", image: captain1 },
  { id: 2, name: "Rebecca Noir", role: "صاحب قایق و کاپیتان", image: captain2 },
  { id: 3, name: "Luca Foggia", role: "صاحب قایق و کاپیتان", image: captain3 },
];
const Captains = () => {
  const desc =
    "شما از ملوانان حرفه‌ای اجاره می‌کنید که می‌توانند به هر سؤالی درباره قایق تفریحی یا خدماتی که همراه اجاره شما است پاسخ دهند.";
  return (
    <div className="section">
      <Info
        title="با کاپیتان ها آشنا شوید"
        subject="ملوانان حرفه ای"
        description={desc}
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {captains.map((captain) => (
          <CaptainCard key={captain.id} {...captain} />
        ))}
      </div>
    </div>
  );
};

export default Captains;
