"use client";

import Image from "next/image";
import React from "react";
import album1 from "../../../../public/images/boat/yacht1.jpeg";
import album2 from "../../../../public/images/boat/yacht8-1170x690.jpeg";
import album3 from "../../../../public/images/boat/yacht_interior_3-1.jpeg";
import album4 from "../../../../public/images/boat/yacht_interior_4-1.jpeg";
import album5 from "../../../../public/images/boat/yacht_interior_5-1.jpeg";

const Album = () => {
  return (
    <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 ">
        <Image alt="album" className="h-full hover:opacity-90 duration-200" src={album2} />
        <Image alt="album" className="h-full hover:opacity-90 duration-200" src={album3} />
        <Image alt="album" className="h-full hover:opacity-90 duration-200" src={album4} />
        <Image alt="album" className="h-full hover:opacity-90 duration-200" src={album5} />
      </div>
      <Image alt="album" className="h-full hover:opacity-90 duration-200" src={album1} />
    </div>
  );
};

export default Album;
