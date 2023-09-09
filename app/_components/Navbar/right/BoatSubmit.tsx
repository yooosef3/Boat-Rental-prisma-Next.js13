"use client"

import { usePathname } from "next/navigation";

const BoatSubmit = () => {
    const path = usePathname();
    
    return (
        <div className='bg-[#998363] text-white cursor-pointer duration-200 medium py-1 px-3 rounded-lg hover:bg-[#8c7552]'>
            ثبت قایق
        </div>
    );
};

export default BoatSubmit;