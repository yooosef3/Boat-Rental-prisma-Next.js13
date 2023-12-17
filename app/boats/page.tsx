import getListings, { IListingsParams } from "../actions/getListings";

import Boats from "@/components/boats/Boats";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";

interface BoatsProps {
  searchParams: IListingsParams;
}
const BoatsList = async ({ searchParams }: BoatsProps) => {
  const listings = await getListings(searchParams);
  console.log(searchParams);
  const currentUser = await getCurrentUser();
  return <Boats boats={listings} currentUser={currentUser} />;
};

export default BoatsList;
