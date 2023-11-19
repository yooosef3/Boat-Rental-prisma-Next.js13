"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[2520px] mx-auto bg-slate-50">
      <ToasterProvider />
      <div className="grid grid-cols-1 pt-28 section md:grid-cols-8 md:gap-8">
        <div className="col-span-2 sticky top-28 h-fit">
          <Sidebar />
        </div>
        <div className="col-span-6">{children}</div>
      </div>
    </div>
  );
}
