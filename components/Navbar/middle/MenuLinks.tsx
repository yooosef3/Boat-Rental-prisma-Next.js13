"use client";

import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MenuLinks = () => {
  const router = useRouter();
  const items = [
    { id: 1, name: "خانه", href: "/", slug: "/" },
    { id: 2, name: "قایق ها", href: "/boats", slug: "/boats" },
    { id: 3, name: "تماس با ما", href: "/", slug: "/call" },
  ];
  return (
    <div className="hidden lg:flex items-center gap-5">
      {items.map((item) => (
        <MenuItem key={item.id} slug={item.slug} name={item.name} onclick={() => router.push(item.href)} />
      ))}
    </div>
  );
};

export default MenuLinks;
