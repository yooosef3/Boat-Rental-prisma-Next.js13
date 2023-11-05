"use client";

import React from 'react';

type Props = {
    title: string  
  }
const Title = ({title}:Props) => {
    return (
        <h3 className="bold text-lg text-gray-900">{title}</h3>
    );
};

export default Title;