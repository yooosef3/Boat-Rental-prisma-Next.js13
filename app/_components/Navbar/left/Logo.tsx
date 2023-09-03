"use client";

import Image from "next/image";
import logo from "../../../../public/images/home/logo.png";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
      <Image
        onClick={() => router.push("/")}
        className="cursor-pointer lg:order-2"
        src={logo}
        height={100}
        width={100}
        alt="Logo"
      />
  );
};

export default Logo;
