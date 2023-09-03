"use client";

import Info from "../../Info";
import React from "react";

const SectionInfo = () => {
  const description =
    "این بزرگترین بازار اجاره و اجاره قایق در جهان است که می توانید پیشنهادات جذابی برای برنامه ریزی تعطیلات بعدی خود پیدا کنید.";
  return (
    <Info
      subject="شرکت اجاره"
      title="اجاره قایق بادبانی از سال 2014"
      description={description}
    />
  );
};

export default SectionInfo;
