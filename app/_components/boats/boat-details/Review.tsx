"use client";

import { BiSolidStar } from "react-icons/bi";
import Image from "next/image";
import React from "react";
import user from "../../../../public/images/boat/captain-60x60.jpeg";

const Review = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 lg:justify-between lg:items-center lg:flex-row">
        <div className="flex items-center gap-5">
          <Image
            className="rounded-full"
            src={user}
            width={70}
            height={70}
            alt="review"
          />
          <div className="flex flex-col justify-start">
            <h3 className="bold text-lg">یوسف</h3>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-500 mb-3 gap-1">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
              </div>
              <span className="text-gray-600">(5 از 5)</span>
            </div>
          </div>
        </div>
        <h4 className="text-gray-600">25 ابان 1402</h4>
      </div>

      <p className="text-gray-700 mt-4">
        فقط عالی - مردم بسیار دوستانه و خوب. خدمه عالی، سفر عالی، قایق عالی!
      </p>
    </div>
  );
};

export default Review;
