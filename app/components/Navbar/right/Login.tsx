"use client";

import { AiFillLock } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex items-center gap-2">
      <AiFillLock className='mt-2' />
      <h2 className='hover:text-[#bfaa8a] cursor-pointer duration-200'>ورود</h2>
    </div>
  );
};

export default Login;
