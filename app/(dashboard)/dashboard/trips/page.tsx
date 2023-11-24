import React from "react";
import TripItem from "@/components/dashboard/ListingItem";
import TripsList from "@/components/dashboard/trips/TripsList";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

const Trips = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({
    userId: currentUser?.id,
  });
  if (reservations.length === 0) {
    return (
      <>
        <h3 className="text-gray-800 text-xl bold m-4">سفرهای من</h3>
        <div className="bg-white flex flex-col items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5">
          <h2 className="text-gray-800 text-lg bold">سفری یافت نشد!</h2>
          <h3 className="text-sm text-gray-600">ظاهرا سفری رزرو نکرده اید!</h3>
        </div>
      </>
    );
  }
  return <TripsList reservations={reservations} currentUser={currentUser} />;
};

export default Trips;
