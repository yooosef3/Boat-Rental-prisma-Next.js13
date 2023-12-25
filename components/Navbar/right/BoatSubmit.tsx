"use client";

import { useCallback, useContext } from "react";

import { NavbarContext } from "../Navbar";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const BoatSubmit = () => {
  const { currentUser }:any = useContext(NavbarContext);
  const loginModal = useLoginModal();
  const router = useRouter();
  const rentHandler = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    router.push('/submit-boat')
  }, [currentUser, loginModal, router]);
  
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
