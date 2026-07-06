import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIST - Private compliant transactions",
  description: "Cross-chain transfer application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
