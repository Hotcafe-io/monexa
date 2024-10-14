import type { Metadata } from "next";
import "./globals.css";
import Navbar from './Navbar'
import Footer from './Footer'

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
        className={`antialiased bg-gray-900 min-h-screen flex flex-col flex-1 font-mono`}
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
