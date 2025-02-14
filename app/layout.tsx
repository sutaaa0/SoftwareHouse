import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Software House",
  description: "website company profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-visible-scrollbar">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Nav/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
