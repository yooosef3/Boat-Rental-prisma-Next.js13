"use client";

import React, { useState } from "react";

import Calendar from "@/components/inputs/Calendar";

const DateSearch = ({
  dateRange,
  setDateRange,
  setMap,
  date,
  setDate,
}: any) => {
  const toggleHandler = () => {
    setDate(!date);
    setMap(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleHandler}
        className="rounded-md shadow-md p-2 bg-white hover:bg-slate-50 duration-200 hover:shadow-lg"
      >
        <h2 className="text-black medium">تاریخ</h2>
        <p className="text-gray-400">10-20 December</p>
      </div>
      <div
        className={`${
          date ? "block" : "hidden"
        } absolute top-20 w-full md:w-96 z-50 bg-gray-100 p-5 rounded-md shadow-md`}
      >
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </div>
    </div>
  );
};

export default DateSearch;
