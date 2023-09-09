"use client"

import Button from '../../Button';
import { FaUser } from 'react-icons/fa6';
import { IoCalendar } from 'react-icons/io5';
import Link from 'next/link';
import React from 'react';

interface ReserveProps {
    toggle?: boolean
    setToggle?: any
}
const MobileReserve:React.FC<ReserveProps> = ({toggle, setToggle}) => {
    return (
        <div className={`${toggle ? 'fixed inset-x-5 top-28 lg:hidden' : 'hidden'} bg-white p-5 h-fit rounded-md shadow-md z-10`}>
            <span onClick={()=> setToggle(false)} className='text-white rounded-lg px-2 pt-2 bg-[#BFA888] hover:bg-red-600 duration-200 w-24 h-16 cursor-pointer'>X</span>
          <div className='mt-5'>
          <h3 className="bg-[#BFA888] text-white text-xl medium text-center w-full py-3 rounded">
            هر شب 500 دلار
          </h3>
          <div className="mt-5 rounded p-5 bg-white">
            <h3 className="text-lg mb-3 text-slate-900 bold">الان رزرو کن</h3>
            <div className="pr-4 h-14 w-full bg-white shadow-sm rounded-md flex items-center border gap-4">
              <FaUser className="text-[#BFA888] text-xl" />
              <h3 className="text-gray-500">مهمان ها</h3>
            </div>
            <div className="pr-4 my-4 h-14 w-full bg-white shadow-sm rounded-md flex items-center border gap-4">
              <IoCalendar className="text-[#BFA888] text-xl" />
              <h3 className="text-gray-500">تاریخ رزرو</h3>
            </div>
            <Button label="رزرو" onClick={() => {}} />
            <hr className="my-5" />
            <Link href="tel:09226308183">
              <h3 className="rounded-lg text-center py-3 w-full hover:bg-opacity-90 duration-200 bg-[#A9AFBB] text-white">
                تماس با مالک
              </h3>
            </Link>
          </div>
        </div>  
        </div>
        
    );
};

export default MobileReserve;