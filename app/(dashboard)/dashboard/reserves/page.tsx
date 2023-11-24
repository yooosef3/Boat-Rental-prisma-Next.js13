import ListingItem from "@/components/dashboard/ListingItem";
import React from "react";
import ReserveItem from "@/components/dashboard/reserves/ReserveItem";

const Reserves = () => {
  return (
    <div>
      <h3 className="text-gray-800 text-xl bold m-4">رزرو شده</h3>
      <div className="bg-white flex items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5">
        <ReserveItem />
        <ReserveItem />
        <ReserveItem />
        <ReserveItem />
        <ReserveItem />
        <ReserveItem />
      </div>
    </div>
  );
};

export default Reserves;
