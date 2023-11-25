"use client";

import { ListingContext, ReservationContext } from "./Details";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { differenceInDays, eachDayOfInterval } from "date-fns";

import Button from "../../Button";
import Calendar from "@/components/inputs/Calendar";
import { IoCalendar } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Reserve = () => {
  const { price, id, guestCount }: any = useContext(ListingContext);
  const loginModal = useLoginModal();
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

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setLoading(true);
    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: id,
      })
      .then(() => {
        toast.success("رزرو شد!");
        setDateRange(initialDateRange);
        router.push("/dashboard/trips");
      })
      .catch(() => {
        toast.error("مشکلی رخ داده است!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [totalPrice, dateRange, id, router, currentUser, loginModal]);

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
    <div className="hidden lg:block">
      <h3 className="bg-[#BFA888] text-white text-xl medium text-center w-full py-3 rounded">
        هر شب{" "}
        {price
          .toLocaleString()
          .replace(/\d/g, (d: string | number) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
        دلار
      </h3>
      <div className="mt-5 rounded p-5 bg-white shadow-md">
        <div className="pr-4 my-4 h-14 w-full bg-white shadow-sm rounded-md flex items-center border gap-4">
          <IoCalendar className="text-[#BFA888] text-xl" />
          <h3 className="text-gray-500">تاریخ رزرو</h3>
        </div>
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => setDateRange(value.selection)}
        />
        <Button label="رزرو" onClick={onCreateReservation} />
        <div className="p-4 my-4 h-14 w-full bg-white shadow-sm rounded-md flex items-center justify-between border">
          <h3 className="text-gray-500">قیمت کل:</h3>
          <h3 className="text-gray-700 bold">
            {totalPrice
              .toLocaleString()
              .replace(/\d/g, (d: string | number) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
            دلار
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
