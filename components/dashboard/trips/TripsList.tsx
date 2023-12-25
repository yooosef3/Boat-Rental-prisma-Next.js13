"use client";

import React, { useCallback, useEffect, useState } from "react";
import { SafeReservation, SafeUser } from "@/app/types";

import ListingItem from "../ListingItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface TripsProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}
const TripsList: React.FC<TripsProps> = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("رزرو شما لغو شد!");
          router.refresh();
        })
        .catch(() => {
          toast.error("خطایی رخ داده است!");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  useEffect(() => {
    router.refresh();
  }, [reservations.length, router]);
  return (
    <div>
      <h3 className="text-gray-800 text-xl bold m-4">سفرهای من</h3>
      <div className="bg-white flex flex-col md:flex-row items-center justify-start gap-5 flex-wrap rounded-md shadow-md p-5">
        {reservations.map((reservation): any => (
          <ListingItem
            key={reservation.id}
            //@ts-ignore
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="لغو رزرو"
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default TripsList;
