"use client";

import React, { useMemo } from "react";

import CountrySelect from "../inputs/CountrySelect";
import { IoLocationSharp } from "react-icons/io5";
import Section from "./Section";
import SubTitle from "./SubTitle";
import Title from "./Title";
import dynamic from "next/dynamic";

const Location = ({value, onChange}:any) => {
  
  
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [value]
  );
  

  return (
    <Section>
      <div className="flex gap-2 mb-5">
        <IoLocationSharp className="text-[#998363]" />
        <div>
          <Title title="قایق شما در کجا قرار گرفته است؟" />
          <SubTitle text="مهمان از این طریق شما رو پیدا میکنه!" />
        </div>
      </div>
        <CountrySelect
          value={value}
          onChange={onChange}
        />
        <div className="h-96">
          {/* @ts-ignore */}
          <Map center={value?.latlng} />
        </div>
    </Section>
  );
};

export default Location;