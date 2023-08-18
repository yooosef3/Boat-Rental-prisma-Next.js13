"use client";

import Button from "../Button";
import { CiSearch } from "react-icons/ci";
import Guests from "./Guests";
import React from "react";
import Select from "./Select";

const BoatSearch = () => {
  return (
    <div className="bg-gray-100 w-full rounded-md p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:mt-10">
      <Select name="نام شهر" />
      <Select name="تاریخ ورود" />
      <Select name="تاریخ خروج" />
      <Guests />
      <Button label="جستجو" onClick={() => {}} />
    </div>
  );
};

export default BoatSearch;
