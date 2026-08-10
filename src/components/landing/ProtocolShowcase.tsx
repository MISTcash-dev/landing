import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    title: "Private settlement",
    mechanism:
      "ZK proofs validate transfers without revealing sender, receiver, or amount.",
    payoff:
      "Protocols settle stablecoin and crypto payments without exposing any party's position.",
  },
  {
    title: "Custom middleware rules",
    mechanism:
      "Operators insert their own rules into the proving pipeline between deposit and withdrawal.",
    payoff:
      "Limits, allowlists, and policy logic run without a centralized operator seeing the data.",
  },
  {
    title: "Compliance paths",
    mechanism:
      "Proof-of-innocence and selective disclosure satisfy KYC and travel rule checks on demand.",
    payoff:
      "Regulated institutions keep privacy while meeting reporting obligations.",
  },
  {
    title: "Cross-chain privacy",
    mechanism:
      "Private assets move across supported chains with a single unlinkable proof set.",
    payoff:
      "Users hold one private position across networks instead of fragmenting liquidity.",
  },
  {
    title: "Programmable escrow",
    mechanism:
      "ZK-TLS claims attest off-chain events, so funds release only on verified conditions.",
    payoff:
      "Escrow that executes on proof, not on trust in a counterparty's word.",
  },
];

export default function ProtocolShowcase() {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Protocol showcase"
          title="Built for protocols."
          intro="MIST is infrastructure first. Operators and integrators compose these capabilities into their own products."
        />
        <div className="grid gap-px border border-misty bg-misty md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <article key={cap.title} className="bg-white p-7">
              <h3 className="mist-h3 text-ink">{cap.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{cap.mechanism}</p>
              <p className="mt-3 border-t border-misty pt-3 text-sm font-semibold text-ink">
                {cap.payoff}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
