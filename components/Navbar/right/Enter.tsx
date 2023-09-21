"use client";

import React, { useContext, useState } from "react";

import BoatSubmit from "./BoatSubmit";
import Image from "next/image";
import Logged from "./Logged";
import Login from "./Login";
import { NavbarContext } from "../Navbar";
import SignUp from "./SignUp";

const Enter = () => {
  const { currentUser } = useContext(NavbarContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="hidden lg:flex items-center gap-8">
      <BoatSubmit />
      {currentUser ? (
        <>
          <div className="relative">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <Image
                className="rounded-full w-9 h-9"
                alt="user"
                src={currentUser?.image || "/images/boat/avatar.jpg"}
                width={50}
                height={50}
              />
              <h3 className="hover:text-[#bfaa8a] duration-200 italic pt-2 text-lg">
                {currentUser?.name}
              </h3>
            </div>
            <Logged toggle={toggle} />
          </div>
        </>
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
};

export default Enter;
