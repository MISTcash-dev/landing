import type { Metadata } from "next";
import { Josefin_Sans, Sen } from "next/font/google";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mist.cash"),
  title: "MIST — Privacy infrastructure by your rules",
  description:
    "A multi-chain privacy framework for blockchain payments. Programmable ZK-proof protocol for private, auditable, compliant transfers across chains.",
  openGraph: {
    title: "MIST — Privacy infrastructure by your rules",
    description:
      "A programmable ZK-proof protocol for private settlement, compliance paths, and cross-chain privacy. Built for operators and integrators.",
    type: "website",
    siteName: "MIST",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mistcash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${sen.variable}`}>
      <body className="antialiased bg-baby text-ink">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
