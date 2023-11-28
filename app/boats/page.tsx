import Boats from '@/components/boats/Boats';
import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

const BoatsList = async () => {
    const listings = await getListings();
    const currentUser = await getCurrentUser();
    return (
        <Boats boats = {listings} currentUser={currentUser}/>
    );
};

export default BoatsList;