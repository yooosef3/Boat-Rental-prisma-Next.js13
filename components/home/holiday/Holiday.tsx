"use client";

import Cards from "./Cards";
import Info from "../../Info";
import React from "react";

const Holiday = () => {
  const description =
    "تعطیلات بی نظیر در سراسر اروپا، از کلوب های ساحلی شیک و برندهای لوکس موناکو گرفته تا سبک زندگی آرام و سواحل متروک جزایر یونان.";
  return (
    <div className="section">
      <Info
        title="برای تعطیلات خود برنامه ریزی کنید"
        subject="شهرهای معروف"
        description={description}
      />
      <Cards />
    </div>
  );
};

export default Holiday;
