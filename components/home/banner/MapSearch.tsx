"use client";

import CountrySelect, {
  CountrySelectValue,
} from "@/components/inputs/CountrySelect";
import React, { useMemo, useState } from "react";

import dynamic from "next/dynamic";

const MapSearch = ({ location, setLocation, setDate, map, setMap }:any) => {
 
  const Map = useMemo(
    () =>
      dynamic(() => import("../../Map"), {
        ssr: false,
      }),
    [location]
  );
  const toggleHandler = () => {
    setMap(!map);
    setDate(false)
  }
  return (
    <div className="relative">
      <div
        onClick={toggleHandler}
        className="rounded-md shadow-md p-2 bg-white hover:bg-slate-50 duration-200 hover:shadow-lg"
      >
        <h2 className="text-black medium">نام کشور</h2>
        <p className="text-gray-400">{location?.label ? location.label : 'london'}</p>
      </div>
      <div className={`${map ? "block" : "hidden"} absolute top-20 w-full md:w-96 bg-gray-100 z-50 text-black p-5 rounded-md shadow-md`}>
        <CountrySelect
          value={location}
          onChange={(value) => setLocation(value as CountrySelectValue)}
        />
        <hr />
        <Map center={location?.latlng || [51, -0.09]} />
      </div>
    </div>
  );
};

export default MapSearch;
