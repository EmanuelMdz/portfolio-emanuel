import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundGlow from "@/components/BackgroundGlow";
import Cursor from "@/components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Emanuel Mendoza — Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years building scalable, multi-tenant SaaS products with Next.js, TypeScript, tRPC, Prisma and Node.js.",
  metadataBase: new URL("https://emanuelmendoza.dev"),
  openGraph: {
    title: "Emanuel Mendoza — Software Engineer",
    description:
      "Full-Stack Software Engineer — Next.js, TypeScript, tRPC, Prisma, Node.js.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-white">
        <BackgroundGlow />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
