"use client";

import React, { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import BathSearch from "./BathSearch";
import Button from "../../Button";
import { CountrySelectValue } from "@/components/inputs/CountrySelect";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import MapSearch from "./MapSearch";
import { Range } from "react-date-range";
import RoomSearch from "./RoomSearch";
import { formatISO } from "date-fns";
import qs from "query-string";

const BoatSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [map, setMap] = useState(false);
  const [date, setDate] = useState(false);
  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const searchHandler = useCallback(async () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/boats",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url)
  }, [
    location,
    router,
    guestCount,
    roomCount,
    dateRange,
    bathroomCount,
    params,
  ]);

  return (
    <div className="bg-gray-100 w-full rounded-md p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 lg:mt-10">
      <MapSearch map={map} setMap={setMap} setDate={setDate} location={location} setLocation={setLocation} />
      <DateSearch date={date} setDate={setDate} setMap={setMap} dateRange={dateRange} setDateRange={setDateRange} />
      <GuestSearch guestCount={guestCount} setGuestCount={setGuestCount} />
      <BathSearch
        bathroomCount={bathroomCount}
        setBathroomCount={setBathroomCount}
      />
      <RoomSearch roomCount={roomCount} setRoomCount={setRoomCount} />
      <Button label="جستجو" onClick={searchHandler} />
    </div>
  );
};

export default BoatSearch;
