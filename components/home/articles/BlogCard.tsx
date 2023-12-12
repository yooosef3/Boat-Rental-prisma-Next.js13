"use client";

import Image, { StaticImageData } from "next/image";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlogProps {
  index: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
  published: string;
}
const BlogCard: React.FC<BlogProps> = ({
  index,
  title,
  image,
  published,
  subTitle,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const blogVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={blogVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 1 }} className="group w-full  overflow-hidden rounded-md shadow-md group hover:shadow-lg duration-300">
      <div className="h-[250px] relative overflow-hidden">
        <div className="absolute left-3 bottom-3 z-20 text-xs text-white medium">{published}</div>
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 duration-200"></div>
        <Image
          className="w-full rounded-t-md h-full object-cover"
          alt={title}
          src={image}
          width={300}
          height={200}
        />
      </div>
      <div className="p-5">
        <h3 className="text-[#0A1B40] cursor-pointer w-fit group-hover:text-[#D0AF8C] duration-300 medium text-xl mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{subTitle}</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
