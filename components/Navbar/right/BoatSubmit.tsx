"use client";

import { useCallback, useContext } from "react";

import { NavbarContext } from "../Navbar";
import useLoginModal from "@/hooks/useLoginModal";
import { usePathname } from "next/navigation";

const BoatSubmit = () => {
  const path = usePathname();
  const { currentUser } = useContext(NavbarContext);
  const loginModal = useLoginModal();

  const rentHandler = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
  }, [currentUser, loginModal]);
  
  return (
    <div
      onClick={rentHandler}
      className="bg-[#998363] text-white cursor-pointer duration-200 medium py-1 px-3 rounded-lg hover:bg-[#8c7552]"
    >
      ثبت قایق
    </div>
  );
};

export default BoatSubmit;
