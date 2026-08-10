import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: "First ZK proof",
    detail: "Produced on Starknet in July 2024, via a Garaga implementation.",
  },
  {
    value: "~1s",
    detail: "Proof generation on an iPhone — privacy that holds up on mobile.",
  },
  {
    value: "~5¢",
    detail: "Current cost per transaction, heading toward a <2¢ target.",
  },
  {
    value: "6 chains",
    detail: "Ethereum, Base, Arbitrum, Optimism, Polygon, and StarkNet.",
  },
  {
    value: "100k+",
    detail: "Anonymity set — the pool each proof draws its claim from.",
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
          <article className="flex items-center justify-center bg-ink p-7">
            <p className="max-w-[30ch] text-sm font-semibold text-baby">
              Every figure is specified on-chain or in the protocol spec.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
