"use client";

import { FiPlus } from "react-icons/fi";
import { NavbarContext } from "../Navbar";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const SignUp = () => {
  const path = usePathname();
  const navbar = useContext(NavbarContext);
  
  return (
    <div className={`flex ${path !== '/' && 'text-slate-900'} ${navbar && 'text-slate-900'} items-center gap-2`}>
      <FiPlus />
      <h2 className="hover:text-[#bfaa8a] cursor-pointer duration-200">ثبت نام</h2>
    </div>
  );
};

export default SignUp;
