import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Try Hidemi — Private USDC Transfers by MIST.cash",
  description:
    "Send and receive USDC privately across 6 blockchains. No transaction history, no wallet tracking. Powered by ZK proofs. Free to use.",
  openGraph: {
    title: "Try Hidemi — Private USDC Transfers by MIST.cash",
    description:
      "Your wallet is a window. Everyone's watching. Hidemi lets you send and receive USDC privately across chains — powered by ZK proofs.",
    url: "https://mist.cash/try-hidemi",
    type: "website",
    siteName: "MIST.cash",
    images: [{ url: "/try-hidemi/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Try Hidemi — Private USDC Transfers",
    description:
      "Send USDC privately across 6 chains. No history. No tracking. Powered by ZK proofs.",
    site: "@mistcash",
    images: ["/try-hidemi/opengraph-image"],
  },
};

export default function Home() {
  redirect("/try-hidemi");
}
