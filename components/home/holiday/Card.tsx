"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/libs/motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
  image: any;
  city: string;
  index: number;
}
const Card: React.FC<CardProps> = ({ image, city, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 1 }} className='lg:h-[378px] relative cursor-pointer'>
      <Image alt={city} src={image} className="h-full rounded-md" />
      <div className='absolute inset-0 z-10 text-white rounded-md bg-gradient-to-b from-transparent via-black to-black opacity-20 duration-300 hover:opacity-0 '></div>
      <div className='absolute inset-0 p-2 flex justify-end text-white bold'>{city}</div>
    </motion.div>
  );
};

export default Card;
