"use client"

import Boats from './Boats';
import React from 'react';
import SectionInfo from './SectionInfo';

const BoatsList = ({boats}:any) => {
    
    return (
        <div className='section'>
            <SectionInfo />
            <Boats data={boats}/>
        </div>
    );
};

export default BoatsList;