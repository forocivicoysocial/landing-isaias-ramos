import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/content/site";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.libro.titulo} — ${site.autor.nombre}`,
  description: site.libro.sinopsis,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
