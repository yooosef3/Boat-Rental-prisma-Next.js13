"use client"

import Boats from './Boats';
import React from 'react';
import SectionInfo from './SectionInfo';

const BoatsList = ({boats, currentUser}:any) => {
    return (
        <div className='section'>
            <SectionInfo />
            <Boats data={boats} currentUser={currentUser}/>
        </div>
    );
};

export default BoatsList;