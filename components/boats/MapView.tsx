import BoatsMap from './BoatsMap';
import Map from '../Map';
import React from 'react';

const MapView = () => {
    return (
        <div className='w-full h-full md:h-full bg-gray-400'>
            <BoatsMap />
        </div>
    );
};

export default MapView;