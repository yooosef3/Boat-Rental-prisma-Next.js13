"use client";

import BoatCard from "./BoatCard";
import React from "react";

interface BoatsProps {
  boats?: boolean;
}
const Boats: React.FC<BoatsProps> = ({ boats }) => {
  return (
    <div
      className={`grid gap-5 ${
        boats ? "lg:grid-cols-2" : 'lg:grid-cols-3'
      } grid-cols-1 `}
    >
      <BoatCard />
      <BoatCard />
      <BoatCard />
      <BoatCard />
      {!boats && (
        <>
          <BoatCard />
          <BoatCard />
        </>
      )}
    </div>
  );
};

export default Boats;
