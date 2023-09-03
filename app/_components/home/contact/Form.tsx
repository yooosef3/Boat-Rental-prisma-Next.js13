"use client";

import Button from "../../Button";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex gap-5">
        <div className="flex flex-1 flex-col">
          <label className="text-[#D1BFA8] bold">نام</label>
          <input
            className="h-12 px-2 rounded-md outline-none border focus:border-blue-600 border-slate-50"
            type="text"
            placeholder="نام"
            {...register("نام", { required: true })}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label className="text-[#D1BFA8] bold">ایمیل</label>
          <input
            className="h-12 px-2 rounded-md outline-none border focus:border-blue-600 border-slate-50"
            type="text"
            placeholder="ایمیل"
            {...register("ایمیل", { required: true })}
          />
        </div>
      </div>
      <div className="md:flex gap-5">
        <div className="flex flex-1 flex-col">
          <label className="text-[#D1BFA8] bold">ورود</label>
          <input
            className="h-12 px-2 rounded-md outline-none border focus:border-blue-600 border-slate-50"
            type="text"
            placeholder="ورود"
            {...register("ورود", { required: true })}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <label className="text-[#D1BFA8] bold">خروج</label>
          <input
            className="h-12 px-2 rounded-md outline-none border focus:border-blue-600 border-slate-50"
            type="tel"
            placeholder="خروج"
            {...register("خروج", { required: true })}
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-[#D1BFA8] bold">پیام</label>
        <textarea
          placeholder="پیام"
          rows={5}
          className="w-full px-2 rounded-md outline-none border focus:border-blue-600 border-slate-50"
        />
      </div>
      <Button label="ارسال ایمیل" onClick={() => {}} />
    </form>
  );
}
