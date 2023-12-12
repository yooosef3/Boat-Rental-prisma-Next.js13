"use client";

import Button from "../../Button";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/libs/motion";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);


  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.form
      ref={ref}
      initial="hidden"
      variants={slideInFromBottom}
      animate={inView ? "visible" : "hidden"}
      custom={1}
      transition={{ delay: 1, duration: 1 }} onSubmit={handleSubmit(onSubmit)}>
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
    </motion.form>
  );
}
