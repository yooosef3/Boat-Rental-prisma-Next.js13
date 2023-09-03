"use client"

import BoatSubmit from './BoatSubmit';
import Login from './Login';
import React from 'react';
import SignUp from './SignUp';

const Enter = () => {
    return (
        <div className='hidden lg:flex items-center gap-8'>
            <BoatSubmit />
            <SignUp />
            <Login />
        </div>
    );
};

export default Enter;