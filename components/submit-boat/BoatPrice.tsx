"use client";

import { AiFillDollarCircle } from "react-icons/ai";
import Input from "../inputs/Input";
import React from "react";
import Section from "./Section";
import SubTitle from "./SubTitle";
import Title from "./Title";

const BoatPrice = ({ isLoading, register, errors }: any) => {
  return (
    <Section>
      <div className="flex gap-2 mb-5">
        <AiFillDollarCircle className="text-[#998363] mt-1" />
        <div>
          <Title title="برای قایق خود قیمتی تعیین کنید!" />
          <SubTitle text="قیمت هر شب را وارد کنید!" />
        </div>
      </div>
      <Input
        id="price"
        label="قیمت"
        formatPrice
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </Section>
  );
};

export default BoatPrice;
