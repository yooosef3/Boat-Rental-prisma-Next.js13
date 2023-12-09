"use client";

import { SafeListing, SafeUser } from "@/app/types";

import BoatCard from "./BoatCard";
import React from "react";

interface BoatsProps {
  data?: SafeListing;
  boats?: boolean;
  currentUser?: SafeUser | null
}
const Boats: React.FC<BoatsProps> = ({ data, currentUser, boats }) => {

  
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${!boats && 'lg:grid-cols-3'} grid-cols-1 `}>
      {!boats ? (
        //@ts-ignore
        data?.slice(0,6).map((boat) => (
          <BoatCard key={boat.id} boats={boats} data={boat} currentUser={currentUser} />
        ))
      ):(
        //@ts-ignore
        data?.map((boat) => (
          <BoatCard key={boat.id} boats={boats} data={boat} currentUser={currentUser} />
        ))
      )}
    </div>
  );
};

export default Boats;