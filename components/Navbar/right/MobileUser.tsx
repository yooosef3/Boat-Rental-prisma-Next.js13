"user client";

import React, { useContext, useState } from "react";

import { BiSolidUserCircle } from "react-icons/bi";
import Image from "next/image";
import Logged from "./Logged";
import { NavbarContext } from "../Navbar";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

const MobileUser = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [toggle, setToggle] = useState(false);
  const { currentUser }: any = useContext(NavbarContext);

  if (currentUser) {
   return <div className="relative lg:hidden">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <Image className="rounded-full w-8 h-8" alt="user" src={currentUser?.image || '/images/boat/avatar.jpg'} width={50} height={50} />
        <h3 className="hover:text-[#bfaa8a] duration-200 italic pt-2 text-md">
          {currentUser?.name.split(' ')[0]}
        </h3>
      </div>
      <Logged toggle={toggle} />
    </div>;
  }
  return (
    <div className="relative lg:hidden">
      <div onClick={() => setToggle(!toggle)}>
        <BiSolidUserCircle className="hover:text-[#998363] text-xl cursor-pointer duration-200" />
      </div>
      <div
        className={`absolute text-slate-800 overflow-hidden bg-white top-10 inset-x-0 w-28 rounded-md shadow-md ${
          toggle ? "block" : "hidden"
        }`}
      >
        <h3
          onClick={loginModal.onOpen}
          className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3"
        >
          ورود
        </h3>
        <h3
          onClick={registerModal.onOpen}
          className="cursor-pointer pb-1 hover:bg-slate-100 duration-200 pr-3"
        >
          ثبت نام
        </h3>
      </div>
    </div>
  );
};

export default MobileUser;
