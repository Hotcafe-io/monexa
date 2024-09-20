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
          {/* Decorative elements */}
          <div className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-[#40E0D0] to-[#8A2BE2] z-50"></div>
          <div className="fixed top-0 right-0 w-1 h-screen bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0] z-50"></div>
          <div className="fixed bottom-0 left-0 w-screen h-1 bg-gradient-to-r from-[#40E0D0] via-[#8A2BE2] to-[#40E0D0] z-50"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
