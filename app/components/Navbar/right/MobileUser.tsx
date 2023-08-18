"user client"

import { BiSolidUserCircle } from "react-icons/bi";
import React from 'react';

const MobileUser = () => {
    return (
        <div className="lg:hidden">
            <BiSolidUserCircle className='hover:text-[#998363] text-xl cursor-pointer duration-200'/>
        </div>
    );
};

export default MobileUser;