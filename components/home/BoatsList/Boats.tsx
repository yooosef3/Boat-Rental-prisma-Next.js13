"use client";

import BoatCard from "./BoatCard";
import React from "react";
import { SafeUser } from "@/app/types";

interface BoatsProps {
  data?: boolean;
  currentUser?: SafeUser | null
}
const Boats: React.FC<BoatsProps> = ({ data, currentUser }) => {
  
  return (
    <div className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 `}>
      {
        //@ts-ignore
        data?.map((boat) => (
          <BoatCard key={boat.id} data={boat} currentUser={currentUser}/>
        ))
      }
    </div>
  );
};

export default Boats;
