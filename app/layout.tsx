import "./globals.css";

import LoginModal from "../components/modals/LoginModal";
import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import RegisterModal from "../components/modals/RegisterModal";
import ToasterProvider from "../providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Boat rent",
  description: "Rent our best boats",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();
  
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-[2520px] mx-auto bg-slate-50">
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        <div>{children}</div>
      </body>
    </html>
  );
}
