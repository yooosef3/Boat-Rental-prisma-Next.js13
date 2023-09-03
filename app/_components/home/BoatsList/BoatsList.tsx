"use client"

import Boats from './Boats';
import React from 'react';
import SectionInfo from './SectionInfo';

const BoatsList = () => {
    return (
        <div className='section'>
            <SectionInfo />
            <Boats />
        </div>
    );
};

export default BoatsList;