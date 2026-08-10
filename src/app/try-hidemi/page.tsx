import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Button from "@/components/landing/Button";
import Badge from "@/components/landing/Badge";
import SectionHeading from "@/components/landing/SectionHeading";
import CTASection from "@/components/landing/CTASection";

export const metadata: Metadata = {
  title: "Try Hidemi — Private transfers on MIST",
  description:
    "Hidemi is a consumer app built on the MIST protocol. Send and receive USDC privately across CCTP networks with ZK-proof privacy.",
  openGraph: {
    title: "Try Hidemi — Private transfers on MIST",
    description:
      "A consumer app on the MIST protocol. Send and receive USDC privately across CCTP networks.",
    url: "https://mist.cash/try-hidemi",
    type: "website",
    siteName: "MIST",
  },
  twitter: {
    card: "summary_large_image",
    title: "Try Hidemi — Private transfers on MIST",
    description:
      "Send and receive USDC privately across CCTP networks. Powered by MIST ZK proofs.",
    site: "@mistcash",
  },
};

const features = [
  {
    title: "Private by default",
    detail:
      "Every transfer proves validity with a ZK proof. No one — including the operator — sees sender, receiver, or amount.",
  },
  {
    title: "Cross-chain USDC",
    detail:
      "Send and receive USDC across every network CCTP supports, from a single interface.",
  },
  {
    title: "No signup, no history",
    detail:
      "There is no account to create and no wallet history to expose. The proof is the credential.",
  },
  {
    title: "Built on MIST",
    detail:
      "Hidemi runs on the MIST protocol: programmable ZK proofs, operator rules, and a settlement layer that stays auditable.",
  },
];

export default function TryHidemiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="border-b border-misty bg-baby">
          <div className="mist-section flex flex-col items-start gap-10 py-20 md:py-24 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Badge tone="cobalt">Consumer app</Badge>
              <h1
                className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send USDC privately across chains.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink/70">
                Hidemi is the consumer app built on the MIST protocol. No
                signup, no wallet history — just private, provable USDC
                transfers across CCTP networks.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="https://hidemi.mist.cash" size="lg" variant="primary">
                  Open Hidemi
                </Button>
                <Button href="/" size="lg" variant="secondary">
                  About MIST
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="Hidemi"
              title="What the consumer app does."
            />
            <div className="grid gap-px border border-misty bg-misty md:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="bg-white p-7">
                  <h2 className="mist-h3 text-ink">{feature.title}</h2>
                  <p className="mt-3 text-sm text-ink/70">{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="Try Hidemi."
          body="Hidemi is the consumer app built on MIST: send and receive USDC privately across CCTP networks, no signup, no wallet history."
          primary={{ label: "Open Hidemi", href: "https://hidemi.mist.cash" }}
          secondary={{ label: "Read the protocol docs", href: "https://docs.mist.cash" }}
        />
      </main>
      <Footer />
    </>
  );
}
