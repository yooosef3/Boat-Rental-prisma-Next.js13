"use client"

import React from 'react';

interface SelectProps {
    name: string
}

const Select:React.FC<SelectProps> = ({name}) => {
    return (
        <div className='rounded-md shadow-md p-2 bg-white' >
            <h2 className='text-black font-semibold'>{name}</h2>
            <p className='text-gray-400'>london</p>
        </div>
    );
};

export default Select;