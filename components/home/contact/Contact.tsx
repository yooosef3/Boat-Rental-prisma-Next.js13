"use client";

import Form from "./Form";
import Image from "next/image";
import Info from "../../Info";
import React from "react";
import contact from "../../../public/images/home/man.png";

const Contact = () => {
  const desc =
    "برای برنامه ریزی تعطیلات بعدی خود در مکان مورد علاقه خود در اروپا با ما تماس بگیرید. ما بی درنگ به همه پیام ها پاسخ می دهیم.";
  return (
    <div className="lg:flex lg:gap-16 pb-28 lg:pb-0 pt-28 px-10 lg:px-20 xl:px-32 bg-[#F4EBE4]">
      <div>
        <Info
          contact
          subject="ارتباط با ما"
          title="برای تعطیلات خود برنامه ریزی کنید"
          description={desc}
        />
        <Form />
      </div>
      <Image
        className="hidden lg:block"
        alt="contact"
        src={contact}
        width={600}
        height={700}
      />
    </div>
  );
};

export default Contact;
