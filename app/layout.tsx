import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: '400' });

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
