"use client"

import Bottom from './Bottom';
import React from 'react';
import Top from './Top';

const Footer = () => {
    
    return (
        <div className='section text-center md:text-right bg-[#0A1B40]'>
            <Top />
            <Bottom />
        </div>
    );
};

export default Footer;