import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './Navbar'
import Footer from './Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monexa - DeFi Trading Tool",
  description: "Your all-in-one safety tool for trading DeFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 min-h-screen flex flex-col flex-1 font-mono`}
      >
        <Navbar />
        <div className="container xl:!max-w-[1900px] mx-auto px-4 py-6 flex flex-col flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
