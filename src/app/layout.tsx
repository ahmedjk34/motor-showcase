import type { Metadata } from "next";
import "./globals.scss";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Motor Showcase",
  description: "A premier platform to explore and showcase the finest cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ position: "relative" }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
