import { FaCalendarDays } from "react-icons/fa6";
import { HiUser } from "react-icons/hi";
import React from "react";

interface ModalProps {
  id: number;
  label: string;
}

const ModalBox: React.FC<ModalProps> = ({ id, label }) => {
  return (
    <div className="h-14 pr-5 cursor-pointer w-full relative bg-white shadow-md rounded-lg flex items-center border">
        {id === 1 ? <HiUser className='text-[#BFA888] absolute left-3 text-xl' /> : <FaCalendarDays className='text-[#BFA888] absolute left-3 text-xl' />}
        <span className="">{label}</span>
    </div>
  );
};

export default ModalBox;
