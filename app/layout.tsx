import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatPDF",
  description: "ChatGPT for your PDFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn("min-h-screen antialiased grainy", figtree.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
