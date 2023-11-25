"use client"

import BoatList from './BoatList';
import MapView from './MapView';
import React from 'react';

const Boats = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh] pt-[70px]'>
            <MapView />
            <BoatList />
        </div>
    );
};

export default Boats;