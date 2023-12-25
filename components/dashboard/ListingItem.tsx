"use client";

import React, { useCallback, useMemo } from "react";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Button from "@/components/Button";
import Image from "next/image";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/libs/motion";
import useCountries from "@/hooks/useCountries";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

interface ListingItemProps {
  data: SafeListing;
  reservation?: SafeReservation | null;
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

    //@ts-ignore
    const start = new Date(reservation.startDate);
    //@ts-ignore
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom}
      animate={inView ? "visible" : "hidden"}
      custom={1}
      transition={{ delay: 0, duration: 1 }} onClick={()=> router.push(`/boats/${data.id}`)} className="bg-gray-100 p-3 w-[285px] md:w-[288px] rounded-md border">
      <div className="w-full h-44 relative overflow-hidden rounded-md">
        <Image
          alt="listing"
          fill
          className="w-full h-full hover:scale-105 duration-200"
          src={data.imageSrc}
        />
      </div>
      <div className="pt-3">
        <h2 onClick={()=> router.push(`/boats/${data.id}`)} className="bold text-gray-700 hover:text-[#8C7552] duration-300 cursor-pointer">
          {location?.region}, {location?.label}
        </h2>
        <h2 className="medium text-gray-400 my-2">{reservationDate}</h2>
        <div className="flex flex-row items-center gap-1 mb-3">
          <div className="bold">
            {price.toLocaleString().replace(/\d/g, (d:string | number | any) => "۰۱۲۳۴۵۶۷۸۹"[d])} دلار
          </div>
          {!reservation && <div className="medium">هرشب</div>}
        </div>
        <Button label={actionLabel} onClick={handleCancel} />
      </div>
    </motion.div>
  );
};

export default ListingItem;
