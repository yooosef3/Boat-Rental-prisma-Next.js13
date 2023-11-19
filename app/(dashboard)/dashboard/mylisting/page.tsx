import ListingItem from "@/components/dashboard/mylisting/ListingItem";
import React from "react";

const MyListing = () => {
  return (
    <div>
      <h3 className="text-gray-800 text-xl bold m-4">لیست من</h3>
      <div className="bg-white flex items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5">
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
      </div>
    </div>
  );
};

export default MyListing;
