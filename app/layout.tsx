import React from "react";
import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Janope – Digitaalisia paikkoja, joilla on merkitystä",
  description:
    "Janope on yhteinen maailma digitaalisia paikkoja varten. Yksi perusta, monta merkityksellistä ympäristöä: yhteisöt, omaisuus, liikkuminen, paikallinen elämä, kestävyys ja löytäminen.",
  keywords: [
    "Janope",
    "digitaaliset alustat",
    "ohjelmistokehitys",
    "yhteisöt",
    "FinnVesta",
    "GameTable",
    "Voltteri",
    "Lähellä",
    "FinnVerdis",
  ],
  authors: [{ name: "Janope" }],
  icons: {
    icon: "/janope-logo.jpg",
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#2a2018",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className="bg-background">
      <body className={`${cinzel.variable} ${cormorant.variable} antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
