"use client"

import MenuItem from './MenuItem';
import React from 'react';
import { useRouter } from "next/navigation";

const MenuItems = () => {
    const router = useRouter();
    return (
        <div className='mt-5'>
            <MenuItem label='خانه' onclick={() => router.push('/')} />
            <MenuItem label='قایق ها' onclick={() => router.push('/boats')} />
            <MenuItem label='بلاگ' onclick={() => router.push('/blogs')} />
            <MenuItem label='تماس با ما' onclick={() => router.push('/contact')} />
        </div>
    );
};

export default MenuItems;