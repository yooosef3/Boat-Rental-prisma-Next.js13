"use client";

import AboutImg from "./AboutImg";
import Info from "./Info";
import React from "react";
import bg from "../../../public/images/home/bg.png";

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="section bg-cover bg-no-repeat bg-fixed md:flex items-center justify-between"
    >
     <Info />
     <AboutImg /> 
    </div>
  );
};

export default About;
