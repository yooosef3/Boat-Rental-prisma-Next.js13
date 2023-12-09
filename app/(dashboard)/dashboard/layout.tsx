import Sidebar from "@/components/dashboard/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="max-w-[2520px] mx-auto bg-slate-50">
      <ToasterProvider />
      <div className="grid grid-cols-1 pt-28 section md:grid-cols-8 md:gap-8">
        <div className="col-span-2 md:sticky md:top-28 h-fit">
          <Sidebar user={currentUser} />
        </div>
        <div className="col-span-6">{children}</div>
      </div>
    </div>
  );
}
