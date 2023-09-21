import React from 'react';
import {signOut} from 'next-auth/react'

interface LoggedProps  {
    toggle: boolean
}
const Logged = ({toggle}:LoggedProps) => {
    return (
        <div
          className={`absolute text-slate-800 overflow-hidden bg-white top-10 inset-x-0 w-28 rounded-md shadow-md ${
            toggle ? "block" : "hidden"
          }`}
        >
          <h3 className="cursor-pointer pt-2 hover:bg-slate-100 duration-200 pr-3">
            حساب من
          </h3>
          <hr className="border"/>
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