"use client";

import React from 'react';

interface ChildrenProps {
    children: React.ReactNode
}
const Section:React.FC<ChildrenProps> = ({children}) => {
    return (
        <section className='p-7 my-5 w-full bg-slate-100 rounded-md shadow-lg'>
            {children}
        </section >
    );
};

export default Section;