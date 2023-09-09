import "./globals.css";

import Footer from "./_components/footer/Footer";
import type { Metadata } from "next";
import Navbar from "./_components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Boat rent",
  description: "Rent our best boats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-[2520px] mx-auto bg-slate-50">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
