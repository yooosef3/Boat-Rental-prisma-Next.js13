"use client";

import BoatCard from "./BoatCard";
import React from "react";

interface BoatsProps {
  data?: boolean;
}
const Boats: React.FC<BoatsProps> = ({ data }) => {
  
  return (
    <div className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 `}>
      {
        //@ts-ignore
        data?.map((boat) => (
          <BoatCard key={boat.id} data={boat} />
        ))
      }
    </div>
  );
};

export default Boats;
