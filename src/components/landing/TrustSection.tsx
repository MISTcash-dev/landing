import {
  Lock,
  Scale,
  Cpu,
  Fingerprint,
  ShieldOff,
  Code,
} from "lucide-react";
import SectionCard from "./SectionCard";

const trustPillars = [
  {
    icon: Cpu,
    title: "ZK-Proof Architecture",
    description:
      "Transactions are verified using zero-knowledge proofs. The network confirms validity without ever seeing sender, receiver, or amount. Not obscurity \u2014 mathematical certainty.",
  },
  {
    icon: Scale,
    title: "Compliance-First Privacy Pools",
    description:
      "Uses the Privacy Pools model endorsed by Vitalik Buterin. Users prove innocence without revealing identity. Private and compliant \u2014 not a mixer, not Tornado Cash.",
  },
  {
    icon: Lock,
    title: "Non-Custodial Protocol",
    description:
      "MIST never holds user funds. All transactions go through on-chain smart contracts. Your keys, your coins \u2014 always.",
  },
  {
    icon: Fingerprint,
    title: "Passkey Authentication",
    description:
      "No passwords or seed phrases to hack or phish. Login with biometrics (fingerprint/face) via WebAuthn. Your biometric data never leaves your device.",
  },
  {
    icon: ShieldOff,
    title: "No Tracking, No Analytics",
    description:
      "Zero tracking cookies. Zero behavioral analytics. We don\u2019t collect what we don\u2019t need. Privacy extends beyond the blockchain.",
  },
  {
    icon: Code,
    title: "Open Protocol, Free to Use",
    description:
      "Built on proven cryptographic primitives with auditable smart contracts. Free to use \u2014 users only pay standard blockchain gas fees.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Architecture &amp; Security
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Built on verifiable architecture
          </h2>
        </div>

        {/* Trust pillars */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar) => (
            <SectionCard
              key={pillar.title}
              variant="cyan"
              icon={pillar.icon}
              iconStyle="boxed"
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
