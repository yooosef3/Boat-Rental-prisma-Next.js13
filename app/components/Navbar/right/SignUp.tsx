"use client";

import { FiPlus } from "react-icons/fi";

const SignUp = () => {
  return (
    <div className="flex items-center gap-2">
      <FiPlus className="mt-2 " />
      <h2 className="hover:text-[#bfaa8a] cursor-pointer duration-200">ثبت نام</h2>
    </div>
  );
};

export default SignUp;
