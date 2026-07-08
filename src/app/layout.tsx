import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mist.cash"),
  title: "MIST.cash — Private, Compliant USDC Transfers",
  description:
    "Send and receive USDC privately across 6 blockchains. No transaction history, no wallet tracking. Powered by ZK proofs. Free to use.",
  openGraph: {
    title: "MIST.cash — Private, Compliant USDC Transfers",
    description:
      "Your wallet is a window. Everyone's watching. MIST.cash lets you send and receive USDC privately across chains.",
    type: "website",
    siteName: "MIST.cash",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_mistcash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-navy-950 text-slate-100">
        <a href="#main-content" className="skip-nav">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
