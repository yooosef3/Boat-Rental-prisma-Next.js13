import React from "react";
import ReservationsList from "@/components/dashboard/reserves/ReservationsList";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

const Reserves = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    <>
      <h3 className="text-gray-800 text-xl bold m-4">رزرو شده</h3>
      <div className="bg-white flex flex-col items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5">
        <h2 className="text-gray-800 text-lg bold">اجاره دسترسی ندارید!</h2>
        <h3 className="text-sm text-gray-600">لطفا وارد شوید!</h3>
      </div>
    </>;
  }

  const reservations = await getReservations({
    authorId: currentUser?.id,
  });
  if (reservations.length === 0) {
    return (
      <>
        <h3 className="text-gray-800 text-xl bold m-4">سفرهای من</h3>
        <div className="bg-white flex flex-col items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5 h-[86%]">
          <h2 className="text-gray-800 text-lg bold">سفری یافت نشد!</h2>
          <h3 className="text-sm text-gray-600">ظاهرا سفری رزرو نکرده اید!</h3>
        </div>
      </>
    );
  }

  return (
    <ReservationsList reservations={reservations} currentUser={currentUser} />
  );
};

export default Reserves;
