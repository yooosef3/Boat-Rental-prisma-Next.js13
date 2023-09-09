"use client"

import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <div className='bg-white p-7 my-7 rounded-md shadow-md'>
            <h3 className='text-lg mb-5 text-slate-900 bold'>نظرات</h3>
            <Review />
        </div>
    );
};

export default Reviews;