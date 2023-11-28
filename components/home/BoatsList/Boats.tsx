"use client";

import BoatCard from "./BoatCard";
import React from "react";
import { SafeUser } from "@/app/types";

interface BoatsProps {
  data?: boolean;
  boats?: boolean;
  currentUser?: SafeUser | null
}
const Boats: React.FC<BoatsProps> = ({ data, currentUser, boats }) => {
  
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${!boats && 'lg:grid-cols-3'} grid-cols-1 `}>
      {
        //@ts-ignore
        data?.map((boat) => (
          <BoatCard key={boat.id} boats={boats} data={boat} currentUser={currentUser} />
        ))
      }
    </div>
  );
};

export default Boats;
