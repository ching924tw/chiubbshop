import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHIUBB Select",
  description: "Curated lifestyle & design selections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${geist.className} antialiased bg-white text-neutral-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
