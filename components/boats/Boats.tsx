"use client";

import BoatList from "./BoatList";
import MapView from "./MapView";
import React from "react";

const Boats = ({ boats, currentUser }: any) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] md:overflow-hidden pt-[50px] md:pt-[70px]">
      <MapView />
      <BoatList boats={boats} currentUser={currentUser} />
    </div>
  );
};

export default Boats;
