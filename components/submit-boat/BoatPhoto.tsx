import React, { useState } from "react";

import { HiPhotograph } from "react-icons/hi";
import ImageUpload from "../inputs/ImageUpload";
import Section from "./Section";
import SubTitle from "./SubTitle";
import Title from "./Title";

const BoatPhoto = ({ value, onChange }: any) => {
  return (
    <Section>
      <div className="flex mb-4 gap-2">
        <HiPhotograph className="text-[#998363]" />
        <div>
          <Title title="تصویری از قابق خود اضافه کنید!" />
          <SubTitle text="به مهمان‌ها نشان دهید که قایق شما چه شکلی است!" />
        </div>
      </div>
      <ImageUpload onChange={onChange} value={value} />
    </Section>
  );
};

export default BoatPhoto;
