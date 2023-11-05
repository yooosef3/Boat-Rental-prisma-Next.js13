"use client";

import React, { createContext } from "react";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Info from "./Info";
import Sidebar from "./Sidebar";

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}
export const ListingContext = createContext(null);
export const ReservationContext = createContext(null);
const Details: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser,
}) => {
  return (
    <ListingContext.Provider value={listing}>
      <ReservationContext.Provider value={{reservations, currentUser}}>
        <div className="section grid grid-cols-1 lg:grid-cols-3 gap-14">
          <Info />
          <Sidebar />
        </div>
      </ReservationContext.Provider>
    </ListingContext.Provider>
  );
};

export default Details;
