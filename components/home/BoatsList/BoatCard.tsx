"use client";

import React, { useMemo } from "react";
import { SafeListing, SafeUser } from "@/app/types";

import { BiSolidStar } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import Slider from "../../Slider";
import { motion } from "framer-motion";
import useCountries from "@/hooks/useCountries";
import { useInView } from "react-intersection-observer";
import useLocation from "@/hooks/useLocation";
import { useRouter } from "next/navigation";

interface BoatProps {
  data: SafeListing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  boats?: boolean;
  index: number;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}
const BoatCard: React.FC<BoatProps> = ({ data, currentUser, boats, index }) => {
  const { getByValue } = useCountries();
  const router = useRouter();
  const location = getByValue(data.locationValue);
  const { setLocation }: any = useLocation();
  const price = useMemo(() => {
    return data.price;
  }, [data.price]);
  const imageSrc = data.imageSrc;
  const centerHandler = () => {
    setLocation(location?.latlng);
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const boatVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={boatVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 1 }}
      onMouseMove={centerHandler}
      className="rounded-md shadow-md group hover:shadow-lg hover:shadow-[#8c755292] duration-300"
    >
      <Slider
        imageSrc={imageSrc}
        boats={boats}
        price={price}
        id={data.id}
        currentUser={currentUser}
      />
      <div className="p-5">
        <div className="flex text-yellow-500 mb-3">
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
          <BiSolidStar />
        </div>
        <div>
          <h3
            onClick={() => router.push(`/boats/${data?.id}`)}
            className="text-[#0A1B40] cursor-pointer w-fit group-hover:text-[#D0AF8C] duration-300 semibold text-xl mb-3"
          >
            {data.title}
          </h3>
          <div className="flex text-gray-500 mb-1 items-center gap-1">
            <GoHome />
            <p className="medium text-sm">با کاپیتان</p>
          </div>
          <div className="flex items-center mt-2 text-sm gap-5">
            <div className="flex items-center text-gray-500 gap-2">
              <MdLocationPin className="text-lg" />
              <span className="-mb-1">
                {location?.region}, {location?.label}
              </span>
            </div>
            <div className="flex items-center text-gray-500 gap-2">
              <span className="bold">اتاق:</span>
              <span>{data.roomCount}</span>
            </div>
            <div className="flex items-center text-gray-500 gap-2">
              <span className="bold">حمام:</span>
              <span>{data.bathroomCount}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BoatCard;
