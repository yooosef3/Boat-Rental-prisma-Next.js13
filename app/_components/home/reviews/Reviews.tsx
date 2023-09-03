"use client";

import Info from "../../Info";
import React from "react";
import Slider from "./Slider";

const Reviews = () => {
    const description ='ما متعهد هستیم که مشتریان خود را از خدمات خود راضی کنیم. نظرات مشتریان گواهی بر کیفیت خدماتی است که روزانه ارائه می کنیم.'
  return (
    <div className="section">
      <Info subject="نظرات" title="نظرات مشتریان" description={description} />
      <Slider />
    </div>
  );
};

export default Reviews;
