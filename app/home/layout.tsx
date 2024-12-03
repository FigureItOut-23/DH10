import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BackGround from "@/components/main/hero2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <BackGround />
        {children}
      </body>
    </html>
  );
}