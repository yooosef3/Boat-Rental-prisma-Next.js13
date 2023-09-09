"use client"

import Availability from "./Availability";
import { BiSolidStar } from "react-icons/bi";
import BoatDescription from "./BoatDescription";
import React from "react";
import Reviews from "./Reviews";
import ShipDetails from "./ShipDetails";

const Info = () => {
  return (
    <div className="lg:col-span-2">
      <BoatDescription />
      <ShipDetails />
      <Availability />
      <Reviews />
    </div>
  );
};

export default Info;
