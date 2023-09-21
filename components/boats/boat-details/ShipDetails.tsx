"use client"

import React from 'react';
import ShipFeature from './ShipFeature';
import ShipInfo from './ShipInfo';

const ShipDetails = () => {
    return (
        <div>
            <ShipInfo />
            <ShipFeature />
        </div>
    );
};

export default ShipDetails;