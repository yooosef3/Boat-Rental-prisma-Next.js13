import Album from '@/components/boats/boat-details/Album';
import Details from '@/components/boats/boat-details/Details';
import Footer from '@/components/footer/Footer';
import Owner from '@/components/boats/boat-details/Owner';
import React from 'react';

const BoatDetails = () => {
    return (
        <div className='pt-[90px]'>
            <Album />
            <Details />
            <Owner />
            <Footer />
        </div>
    );
};

export default BoatDetails;