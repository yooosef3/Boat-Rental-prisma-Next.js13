import { usePathname, useRouter } from "next/navigation";

import { FaFolderOpen } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import React from "react";
import user from '@/public/images/boat/user.jpeg'

const items = [
  { id: 1, slug: "", name: "داشبورد", link: "/", icon: <MdDashboard /> },
  {
    id: 2,
    slug: "/dashboard/favorites",
    name: "مورد علاقه ها",
    link: "/dashboard/favorites",
    icon: <FaHeart />,
  },
  {
    id: 3,
    slug: "/dashboard/mylisting",
    name: "لیست من",
    link: "/dashboard/mylisting",
    icon: <IoLocationSharp />,
  },
  {
    id: 4,
    slug: "/dashboard/reserves",
    name: "رزرو شده",
    link: "/dashboard/reserves",
    icon: <FaFolderOpen />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-4 bg-white p-2 rounded-md shadow-md">
      <div className="flex border-b py-6 flex-col items-center gap-3">
        <Image className="rounded-full" alt='user' src={user} width={90} height={90} />
        <h2 className="text-gray-500">یوسف خدری</h2>
      </div>
      {items.map((item) => (
        <div
          onClick={() => router.push(item.link)}
          key={item.id}
          className={`flex group hover:bg-slate-100 ${
            pathname === item.slug
              ? "bg-slate-100 text-[#998363]"
              : "text-gray-700"
          } p-2 rounded-md cursor-pointer items-center gap-3`}
        >
          <span className="text-[#998363] text-xl">{item.icon}</span>
          <span className="text-lg group-hover:text-[#998363] duration-200 cursor-pointer">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;