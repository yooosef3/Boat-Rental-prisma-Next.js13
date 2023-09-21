"use client";

import { FiPlus } from "react-icons/fi";
import { NavbarContext } from "../Navbar";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import useRegisterModal from "@/hooks/useRegisterModal";

const SignUp = () => {
  const path = usePathname();
  const {navbar} = useContext(NavbarContext);
  const registerModal = useRegisterModal();
  return (
    <div onClick={registerModal.onOpen} className={`flex ${path !== '/' && 'text-slate-900'} ${navbar && 'text-slate-900'} items-center gap-2`}>
      <FiPlus />
      <h2 className="hover:text-[#bfaa8a] cursor-pointer duration-200">ثبت نام</h2>
    </div>
  );
};

export default SignUp;
