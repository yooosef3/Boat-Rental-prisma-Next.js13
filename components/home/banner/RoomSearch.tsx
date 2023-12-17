"use client";

import React from "react";

const RoomSearch = ({roomCount, setRoomCount}:any) => {
  return (
    <div className="rounded-md shadow-md p-2 bg-white hover:bg-slate-50 duration-200 hover:shadow-lg">
      <h2 className="text-black medium">تعداد اتاق ها</h2>
      <input
        placeholder={roomCount}
        value={roomCount}
        onChange={(e) => setRoomCount(e.target.value)}
        className="text-gray-400 w-full outline-none"
      />{" "}
    </div>
  );
};

export default RoomSearch;
