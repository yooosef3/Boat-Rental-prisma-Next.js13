import "./globals.css";

import ClientOnly from "./components/ClientOnly";
import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";

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
      <body className="bg-gray-400 max-w-[2520px] mx-auto">
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div>{children}</div>
      </body>
    </html>
  );
}
