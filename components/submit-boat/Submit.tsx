"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";

import BoatPhoto from "./BoatPhoto";
import BoatPrice from "./BoatPrice";
import Button from "../Button";
import Counter from "../inputs/Counter";
import { FaSailboat } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import Input from "../inputs/Input";
import Location from "./Location";
import Section from "./Section";
import SubTitle from "./SubTitle";
import Title from "./Title";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Submit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("لیست شما ساخته شد!");
        router.refresh();
        reset();
      })
      .catch(() => {
        toast.error("مشکلی پیش آمده است.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col lg:items-center section justify-center">
      <h2 className="text-right medium lg:bold text-xl lg:text-2xl text-slate-800 my-5">
        قایق خود را ثبت کنید
      </h2>
      <Location
        value={location}
        onChange={(value: any) => setCustomValue("location", value)}
      />
      <Section>
        <div className="flex gap-2">
          <GiBathtub className="text-[#998363]" />
          <div>
            <Title title="کمی راجبه قایق بنویس!" />
            <SubTitle text="چه امکانات رفاهی دارید؟" />
          </div>
        </div>
        <div className="grid mt-7 grid-cols-1 gap-5 md:gap-14 md:grid-cols-2 lg:grid-cols-3">
          <Counter
            onChange={(value) => setCustomValue("guestCount", value)}
            value={guestCount}
            title="مهمان"
            subtitle="به چه تعداد مهمان اجازه می دهید؟"
          />
          <Counter
            onChange={(value) => setCustomValue("roomCount", value)}
            value={roomCount}
            title="اتاق"
            subtitle="چه تعداد اتاق دارید؟"
          />
          <Counter
            onChange={(value) => setCustomValue("bathroomCount", value)}
            value={bathroomCount}
            title="حمام"
            subtitle="چه تعداد حمام دارید؟"
          />
        </div>
      </Section>
      <BoatPhoto
        onChange={(value: any) => setCustomValue("imageSrc", value)}
        value={imageSrc}
      />
      <Section>
        <div className="flex gap-2">
          <FaSailboat className="text-[#998363]" />
          <div>
            <Title title="قایق خود را چگونه توصیف میکنید؟" />
            <SubTitle text="مختصر و مفید!" />
          </div>
        </div>
        <div className="flex flex-col mt-5 md:flex-row items-center gap-5">
          <Input
            id="title"
            label="عنوان"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="description"
            label="توضیحات"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </Section>
      <BoatPrice isLoading={isLoading} register={register} errors={errors} />
      <div className="mt-4">
        <Button
          label="ثبت قایق"
          disabled={isLoading}
          small
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default Submit;
