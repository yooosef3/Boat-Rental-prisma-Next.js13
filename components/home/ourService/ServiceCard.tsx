"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/libs/motion";
import { useInView } from "react-intersection-observer";

interface ServiceProps {
  image: any;
  title: string;
  info: string;
  index: number;
}
const ServiceCard: React.FC<ServiceProps> = ({ image, title, info, index }) => {
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
      transition={{ delay: index * animationDelay, duration: 1 }} className="grid grid-cols-1 md:grid-cols-5">
      <Image
        className="md:col-span-1 mx-auto"
        src={image}
        alt={title}
        width={120}
        height={120}
      />
      <div className="text-center md:col-span-4 md:text-right mt-4">
        <h2 className="text-[#0A1B40] mb-4 bold text-lg">{title}</h2>
        <p className="text-gray-500 max-w-md">{info}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
