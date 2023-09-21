"use client"

import BoatList from './BoatList';
import Map from './Map';
import React from 'react';

const Boats = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh] pt-[90px]'>
            <Map />
            <BoatList />
        </div>
    );
};

export default Boats;