"use client"

import { NavbarContext } from "../Navbar";
import { useContext } from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
    name: string
    onclick: () => void
}
const MenuItem:React.FC<MenuItemProps> = ({name, onclick}) => {
    const path = usePathname();
    const navbar = useContext(NavbarContext);
    return (
        <div className={`${path !== '/' && "hover:text-white"} ${navbar && 'hover:text-white'} hover:bg-[#998363] px-4 py-1 rounded-md cursor-pointer duration-200`} onClick={onclick}>
            {name}
        </div>
    );
};

export default MenuItem;