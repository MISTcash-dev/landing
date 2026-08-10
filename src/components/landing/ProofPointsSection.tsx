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
    value: "USDC via CCTP",
    detail:
      "Cross-chain USDC on every network CCTP supports. Scope is USDC today, not arbitrary assets.",
  },
  {
    value: "USDT via usdt0",
    detail: "Planned down the road, not live yet.",
  },
  {
    value: "Shared anonymity set",
    detail:
      "Designed so users across chains draw from one set, not a pool per chain. Size grows with usage, not live yet.",
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
            <p className="max-w-[30ch] text-sm font-semibold text-baby">
              Every figure is specified on-chain or in the protocol spec.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
