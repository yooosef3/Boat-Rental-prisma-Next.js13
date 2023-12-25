"use client";

import React, { useCallback, useState } from "react";
import { SafeReservation, SafeUser } from "@/app/types";

import ListingItem from "../ListingItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ReservationsProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}
const ReservationsList: React.FC<ReservationsProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("رزرو لغو شد!");
          router.refresh();
        })
        .catch(() => {
          toast.error("مشکلی رخ داده است!");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <>
      <h3 className="text-gray-800 text-xl bold m-4">رزرو شده</h3>
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
            actionLabel="لغو رزرو مهمان"
            currentUser={currentUser}
          />
        ))}
      </div>
    </>
  );
};

export default ReservationsList;
