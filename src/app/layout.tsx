import type { Metadata, Viewport } from "next";
import { CormorantGaramondRegular, Inter } from "@/styles/fonts";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kristina Kostova Portfolio",
  description:
    "Kristina Kostova is an artist and a painter specializing in painting, illustration and modern arts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1a1c1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Inter.variable} ${CormorantGaramondRegular.variable} scroll-smooth`}
    >
      <body>
        <Header />
        <main className="app-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
