"use client"

import Image from "next/image";
import React from 'react';
import about from "../../../public/images/home/yacht_vertical2-1.jpeg";

const AboutImg = () => {
    return (
        <div className="md:flex-1 hidden md:block">
            <Image className="mx-auto w-[80%] rounded-lg" alt='boat' src={about} width={400} height={450} />
        </div>
    );
};

export default AboutImg;