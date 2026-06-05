import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA | Premium Construction & Luxury Engineering Studio",
  description: "AURA delivers engineering excellence, spatial precision, and architectural innovation. We build premium residential, commercial, and industrial structures engineered for generations.",
  keywords: ["luxury construction", "premium architecture", "civil engineering", "commercial real estate", "high-end residential villas", "sustainable building design"],
  openGraph: {
    title: "AURA | Premium Construction & Engineering",
    description: "Creating tomorrow's architectural masterpieces today. From blueprints to high-rise towers.",
    url: "https://auraconstruction.com",
    siteName: "AURA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased bg-warm-white text-primary font-sans">
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppFloatingButton />
        </LenisProvider>
      </body>
    </html>
  );
}
