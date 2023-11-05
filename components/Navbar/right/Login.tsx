"use client";

import { useContext, useEffect } from "react";

import { AiFillLock } from "react-icons/ai";
import { NavbarContext } from "../Navbar";
import useLoginModal from "@/hooks/useLoginModal";
import { usePathname } from "next/navigation";

const Login = () => {
  const path = usePathname();
  const { navbar } = useContext(NavbarContext);
  const { onOpen, isOpen } = useLoginModal();
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
      <AiFillLock />
      <h2 className="hover:text-[#bfaa8a] cursor-pointer duration-200">ورود</h2>
    </div>
  );
};

export default Login;
