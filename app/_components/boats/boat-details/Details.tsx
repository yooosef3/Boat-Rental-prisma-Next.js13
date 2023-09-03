import Info from './Info';
import React from 'react';
import Sidebar from './Sidebar';

const Details = () => {
    return (
        <div className='section grid grid-cols-1 lg:grid-cols-3'>
            <Info />
            <Sidebar />
        </div>
    );
};

export default Details;