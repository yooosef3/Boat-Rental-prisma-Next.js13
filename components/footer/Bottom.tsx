"use client"

import React from 'react';

const Bottom = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 mt-20 text-white items-center justify-between'>
            <p className=''>کپی رایت. تمامی حقوق محفوظ است.</p>
            <div className='flex gap-6'>
                <h3 className='cursor-pointer hover:text-[#BFA888] duration-200'>شرایط و ضوابط</h3>
                <h3 className='cursor-pointer hover:text-[#BFA888] duration-200'>مخاطب</h3>
            </div>
        </div>
    );
};

export default Bottom;