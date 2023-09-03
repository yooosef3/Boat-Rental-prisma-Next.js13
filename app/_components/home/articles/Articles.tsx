"use client"

import Blogs from './Blogs';
import Info from '../../Info';
import React from 'react';

const Articles = () => {
    const desc = 'جالب ترین مقالات از محبوب ترین دسته بندی ها را در این وب سایت جامع اجاره بررسی کنید'
    return (
        <div className='section'>
            <Info title='آخرین مقالات' subject='در اخبار' description={desc} articles />
            <Blogs />
        </div>
    );
};

export default Articles;