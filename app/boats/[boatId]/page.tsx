import Album from '@/app/_components/boats/boat-details/Album';
import Details from '@/app/_components/boats/boat-details/Details';
import Footer from '@/app/_components/footer/Footer';
import Owner from '@/app/_components/boats/boat-details/Owner';
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