import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlantic",
  description: "Better deals than the other forest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <SessionProvider>
          <Navbar />
          <main className="m-auto w-full min-w-[300px] max-w-7xl grow p-4">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
