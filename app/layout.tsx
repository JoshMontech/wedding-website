import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "B&J Montgomery Wedding 2025",
  description: "Josh and Bekah Montgomery Wedding 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}`}>
        <NavBar />
        <main className="flex min-h-[calc(100vh-100px)]">{children}</main>
      </body>
    </html>
  );
}
