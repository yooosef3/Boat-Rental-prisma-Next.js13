import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

interface LoggedProps {
  toggle: boolean;
}
const Logged = ({ toggle }: LoggedProps) => {
  return (
    <div
      className={`absolute text-slate-800 overflow-hidden bg-white top-10 inset-x-0 w-28 rounded-md shadow-md ${
        toggle ? "block" : "hidden"
      }`}
    >
      <Link href="/dashboard/favorites">
        <h3 className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3">
          حساب من
        </h3>
      </Link>
      <Link href="/dashboard/trips">
        <h3 className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3">
          سفرهای من
        </h3>
      </Link>
      <Link href="/dashboard/favorites">
        <h3 className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3">
          مورد علاقه ها
        </h3>
      </Link>
      <Link href="/dashboard/reserves">
        <h3 className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3">
          رزرو شده ها
        </h3>
      </Link>
      <hr className="border" />
      <h3
        onClick={() => signOut()}
        className="cursor-pointer pb-1 hover:bg-slate-100 duration-200 pr-3"
      >
        خروج
      </h3>
    </div>
  );
};

export default Logged;
