"use client";

import React, { useCallback, useMemo } from "react";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Button from "@/components/Button";
import Image from "next/image";
import { format } from "date-fns";
import pic from "../../public/images/boat/yacht1.jpeg";
import useCountries from "@/hooks/useCountries";
import { useRouter } from "next/navigation";

interface ListingItemProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}
const ListingItem: React.FC<ListingItemProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div className="bg-gray-100 p-3 w-[285px] rounded-md border">
      <div className="w-full h-44 relative overflow-hidden rounded-md">
        <Image
          alt="listing"
          fill
          className="w-full h-full hover:scale-105 duration-200"
          src={data.imageSrc}
        />
      </div>
      <div className="pt-3">
        <h2 className="bold text-gray-700">
          {location?.region}, {location?.label}
        </h2>
        <h2 className="medium text-gray-400 my-2">{reservationDate}</h2>
        <div className="flex flex-row items-center gap-1 mb-3">
          <div className="bold">
            {price.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])} دلار
          </div>
          {!reservation && <div className="medium">هرشب</div>}
        </div>
        <Button label={actionLabel} onClick={handleCancel} />
      </div>
    </div>
  );
};

export default ListingItem;
