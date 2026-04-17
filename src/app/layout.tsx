import type { Metadata } from "next";
import { Geist, Geist_Mono, Akaya_Kanadaka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const akaya = Akaya_Kanadaka({
  weight: "400",
  variable: "--font-akaya-kanadaka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Website",
  description: "My first project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${akaya.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col"><Navbar/>{children}</body>
    </html>
  );
}
