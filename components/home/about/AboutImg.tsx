"use client"

import Image from "next/image";
import React from 'react';
import about from "../../../public/images/home/yacht_vertical2-1.jpeg";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/libs/motion";
import { useInView } from "react-intersection-observer";

const AboutImg = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          variants={slideInFromLeft(0.1)}
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          transition={{ delay: 1, duration: 1 }}className="md:flex-1 hidden md:block">
            <Image className="mx-auto w-[80%] rounded-lg" alt='boat' src={about} width={400} height={450} />
        </motion.div>
    );
};

export default AboutImg;