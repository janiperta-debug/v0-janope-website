import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janope - Ohjelmistoratkaisuja yhteisöille ja organisaatioille",
  description:
    "Rakennamme digitaalisia alustoja jotka yhdistävät ihmisiä, dataa ja yhteisöjä. Pihapiiri, ChargeHub, GameDesk ja räätälöidyt ohjelmistoratkaisut.",
  keywords: [
    "Janope",
    "ohjelmistokehitys",
    "digitaaliset alustat",
    "yhteisöt",
    "Pihapiiri",
    "ChargeHub",
    "GameDesk",
  ],
  authors: [{ name: "Janope" }],
  icons: {
    icon: "/janope-logo.jpg",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#0a1128",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
