import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: "First ZK proof",
    detail: "Produced on Starknet in July 2024, via a Garaga implementation.",
  },
  {
    value: "~1s",
    detail: "Measured proof generation on an iPhone; this is a performance benchmark, not a protocol invariant.",
  },
  {
    value: "~5¢",
    detail: "Current product cost benchmark, heading toward a <2¢ target.",
  },
  {
    value: "Outer-wrapped Groth16",
    detail:
      "The selected implementation decouples the primary and secondary proofs, then recursively verifies them in one outer proof.",
  },
  {
    value: "USDC via CCTP",
    detail:
      "Current product scope is cross-chain USDC over CCTP-supported networks; the core transaction model remains asset-scoped.",
  },
  {
    value: "Reserve-scoped exits",
    detail:
      "In-protocol transfers can share the protocol set; withdrawal privacy and compliance scope follow the Reserve holding the asset.",
  },
];

export default function ProofPointsSection() {
  return (
    <section className="border-t border-ink bg-ink py-16 text-baby md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Technical proof points"
          title="Numbers, not adjectives."
          intro="Measured milestones from the protocol's operating history."
        />
        <div className="grid gap-px border border-misty bg-misty md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.value} className="bg-ink p-7">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-baby">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm text-baby/70">{stat.detail}</p>
            </article>
          ))}
          <article className="flex items-center justify-center bg-ink p-7 md:col-span-2 lg:col-span-3">
            <p className="max-w-[42ch] text-sm font-semibold text-baby">
              Benchmarks, targets, product scope, and protocol design are labeled separately so integrators can tell what is live, measured, or planned.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
