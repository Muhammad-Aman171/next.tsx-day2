import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Footer from "./(components)/footer/footer";
// import Navbar from "./(components)/navbar/navbar"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "convert",
  description: "simple todoapp for learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
