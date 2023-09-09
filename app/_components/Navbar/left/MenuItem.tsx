"use client"

import React from 'react';

interface MenuItemProps {
    label: string
    onclick: () => void
}
const MenuItem:React.FC<MenuItemProps> = ({
    label, onclick
}) => {
    return (
        <div onClick={onclick} className='p-4 border-b text-white border-gray-600 hover:bg-[#BFA888] cursor-pointer hover:text-gray-700 duration-300'>
            {label}
        </div>
    );
};

export default MenuItem;