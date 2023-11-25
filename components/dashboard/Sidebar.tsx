import { usePathname, useRouter } from "next/navigation";

import { FaFolderOpen } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import React from "react";
import user from '@/public/images/boat/user.jpeg'

const items = [
  { id: 1, slug: "/", name: "خانه", link: "/", icon: <FaHome /> },
  {
    id: 2,
    slug: "/dashboard/favorites",
    name: "مورد علاقه ها",
    link: "/dashboard/favorites",
    icon: <FaHeart />,
  },
  {
    id: 3,
    slug: "/dashboard/trips",
    name: "سفرهای من",
    link: "/dashboard/trips",
    icon: <IoLocationSharp />,
  },
  {
    id: 4,
    slug: "/dashboard/reservations",
    name: "رزرو شده",
    link: "/dashboard/reservations",
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
          className={`flex group hover:bg-slate-200 ${
            pathname === item.slug
              ? "bg-slate-200 text-[#998363]"
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
