"use client";

import Image from "next/image";
import React from "react";

interface SlideProps {
  imageSource: any;
}
const Slide: React.FC<SlideProps> = ({ imageSource }) => {
  return (
    <div className="keen-slider__slide">
      <div className="h-[300px]">
        <Image
          className="w-full h-full rounded-t-md"
          alt="slide"
          src={imageSource}
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Slide;
