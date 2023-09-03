"use client";

import React from "react";

type TitleProps = {
  title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="text-white text-lg medium mb-3">{title}</h2>;
};

export default Title;
