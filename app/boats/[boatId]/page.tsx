import Album from "@/components/boats/boat-details/Album";
import Details from "@/components/boats/boat-details/Details";
import Footer from "@/components/footer/Footer";
import Owner from "@/components/boats/boat-details/Owner";
import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  boatId?: string;
}
const BoatDetails = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  return (
    <div className="pt-[90px]">
      <Album image={listing?.imageSrc} />
      <Details
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
      <Owner user={currentUser} />
      <Footer />
    </div>
  );
};

export default BoatDetails;
