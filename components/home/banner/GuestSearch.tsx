"use client";

import React from "react";

const GuestSearch = ({ guestCount, setGuestCount }: any) => {
  return (
    <div className="rounded-md shadow-md p-2 bg-white hover:bg-slate-50 duration-200 hover:shadow-lg">
      <h2 className="text-black medium">تعداد مهمان ها</h2>
      <input
        placeholder={guestCount}
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
        className="text-gray-400 w-full outline-none"
      />
    </div>
  );
};

export default GuestSearch;
