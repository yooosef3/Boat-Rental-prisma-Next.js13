"use client"

import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import LeftMenu from "./LeftMenu";

const MenuButton = () => {
    const [close, setClose] = useState(true)

    return (
        <div className="lg:hidden">
            <GiHamburgerMenu onClick={() => setClose(false)} className='hover:text-[#998363] text-xl cursor-pointer duration-200'/>
            <LeftMenu close={close} setClose={setClose} />
        </div>
    );
};

export default MenuButton;