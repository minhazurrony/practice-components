import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practice Components",
  description: "This project is being built to crack frontend coding interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-5">
          <aside className="col-span-1 h-lvh overflow-scroll bg-slate-100 px-2 py-5">
            <Sidebar />
          </aside>
          <main className="col-span-4 flex items-center justify-center px-2 py-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
