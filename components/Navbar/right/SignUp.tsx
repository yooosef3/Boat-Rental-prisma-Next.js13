"use client";

import { useContext, useEffect } from "react";

import { FiPlus } from "react-icons/fi";
import { NavbarContext } from "../Navbar";
import { usePathname } from "next/navigation";
import useRegisterModal from "@/hooks/useRegisterModal";

const SignUp = () => {
  const path = usePathname();
  const { navbar } = useContext(NavbarContext);
  const { onOpen, isOpen } = useRegisterModal();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <div
      onClick={onOpen}
      className={`flex ${path !== "/" && "text-slate-900"} ${
        navbar && "text-slate-900"
      } items-center gap-2`}
    >
      <FiPlus />
      <h2 className="hover:text-[#bfaa8a] cursor-pointer duration-200">
        ثبت نام
      </h2>
    </div>
  );
};

export default SignUp;
