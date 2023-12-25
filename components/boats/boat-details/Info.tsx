"use client";

import React, { useContext } from "react";

import Availability from "./Availability";
import BoatDescription from "./BoatDescription";
import { ListingContext } from "./Details";
import Reviews from "./Reviews";
import ShipDetails from "./ShipDetails";
import dynamic from "next/dynamic";
import useCountries from "@/hooks/useCountries";

const Map = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});
const Info = () => {
  const { locationValue }:any = useContext(ListingContext);
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="lg:col-span-2">
      <BoatDescription />
      <ShipDetails />
      <Map center={coordinates} />
      <Availability />
      <Reviews />
    </div>
  );
};

export default Info;
