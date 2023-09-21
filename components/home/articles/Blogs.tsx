"use client"

import BlogCard from './BlogCard';
import React from 'react';
import blog1 from '@/public/images/home/blog1jpeg.jpeg';
import blog2 from '@/public/images/home/blog2.jpeg';
import blog3 from '@/public/images/home/blog3.jpeg';

const blogs = [
    {id:1,image:blog1 ,title: 'آنچه مهمانان هنگام اجاره قایق تفریحی می خواهند بدانند', subTitle: 'ایده های تعطیلات، مهمان نوازی', published: 'April 21, 2015'},
    {id:2,image:blog2 ,title: 'چگونه یک میزبان عالی برای اجاره کنندگان قایق بادبانی باشیم', subTitle: 'ایده های تعطیلات، مهمان نوازی', published: 'April 21, 2015'},
    {id:3,image:blog3 ,title: 'ارائه یک فضای پذیرایی کامل به دوستداران قایق', subTitle: 'ایده های تعطیلات، مهمان نوازی', published: 'April 21, 2015'}
] 
const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {blogs.map(blog => 
                <BlogCard key={blog.id} {...blog} />
                )}
        </div>
    );
};

export default Blogs;