import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    title: "Private state transitions",
    mechanism:
      "The primary circuit proves note membership, ownership, value conservation, and nullifiers without exposing note contents.",
    payoff:
      "In-protocol transfers pool and redistribute notes; assets move only when a withdrawal calls a Reserve.",
  },
  {
    title: "Custom middleware rules",
    mechanism:
      "Middleware proofs extend Chamber transactions with private-flow rules, exit conditions, and state-map lookups.",
    payoff:
      "Operators can compose policy logic against committed state without exposing the values or indexes the proof accesses.",
  },
  {
    title: "Compliance paths",
    mechanism:
      "Secondary circuits can prove KYC membership, jurisdiction checks, auditor commitments, and amount constraints.",
    payoff:
      "Sensitive fields can be encrypted inside the proof, with a per-transaction disclosure key for an authorized operator or auditor.",
  },
  {
    title: "Asset-scoped settlement",
    mechanism:
      "Each transaction conserves one asset across two input notes, two output notes, or an optional withdrawal.",
    payoff:
      "The protocol keeps accounting and collateralization within one Chamber and Reserve boundary at a time.",
  },
  {
    title: "Programmable integration",
    mechanism:
      "A circuit-bound tx_payload can carry instructions for a contract withdrawal; its contents and meaning belong to the middleware.",
    payoff:
      "Integrators can connect private withdrawals to protocol-specific calls without letting a relayer alter the payload.",
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
          {capabilities.map((cap, i) => (
            <article
              key={cap.title}
              className={`bg-white p-7${i === capabilities.length - 1 ? " md:col-span-2" : ""}`}
            >
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
