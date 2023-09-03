"use client"

import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MenuLinks = () => {
    const router = useRouter()
    return (
        <div className="hidden lg:flex items-center gap-5">
            <MenuItem name='خانه' onclick={() => router.push('/')} />
            <MenuItem name='قایق ها' onclick={() => router.push('/boats')} />
            <MenuItem name='بلاگ' onclick={() => router.push('/blogs')} />
            <MenuItem name='تماس با ما' onclick={() => router.push('/contact')} />
        </div>
    );
};

export default MenuLinks;