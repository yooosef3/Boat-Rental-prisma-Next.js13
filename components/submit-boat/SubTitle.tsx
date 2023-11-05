"use client";

import React from 'react';

export type Props = {
  text: string  
}
const SubTitle = ({text}:Props) => {
    return (
        <p className="text-xs mt-1 text-gray-500">{text}</p>
    );
};

export default SubTitle;