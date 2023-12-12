"use client";

import { ListingContext, ReservationContext } from "./Details";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { differenceInDays, eachDayOfInterval } from "date-fns";

import Calendar from "../../inputs/Calendar";
import { useRouter } from "next/navigation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};
const Availability = () => {
  const { price, id, guestCount }: any = useContext(ListingContext);

  const router = useRouter();
  const { reservations, currentUser } = useContext(ReservationContext);
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(price);
  const [dateRange, setDateRange] = useState(initialDateRange);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
      if (dayCount && price) {
        setTotalPrice(dayCount * price);
      } else {
        setTotalPrice(price);
      }
    }
  }, [dateRange, price]);

  return (
    <div className="mt-7">
      <h3 className="text-lg text-slate-900 bold">زمان های در دسترس</h3>
      <div className="p-7 bg-white rounded-md shadow-md">
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    </div>
  );
};

export default Availability;
