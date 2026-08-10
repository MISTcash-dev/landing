import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: "First privacy proof",
    detail: "Produced on Starknet in July 2024, via a Garaga implementation.",
  },
  {
    value: "~1s",
    detail: "Measured privacy-check generation on an iPhone; a benchmark, not a guarantee for every deployment.",
  },
  {
    value: "~5¢",
    detail: "Current product cost benchmark, heading toward a <2¢ target.",
  },
  {
    value: "One combined check",
    detail:
      "MIST can combine payment validity and partner rules into one check for settlement, with the final proving work handled by the selected deployment model.",
  },
  {
    value: "USDC via CCTP",
    detail:
      "Current product scope is cross-network USDC over CCTP-supported networks; each payment still uses one asset and one Reserve policy.",
  },
  {
    value: "Controlled disclosure",
    detail:
      "A reviewer can receive evidence for a specific transaction without receiving unrestricted access to the full payment flow.",
  },
];

export default function ProofPointsSection() {
  return (
    <section className="border-t border-ink bg-ink py-16 text-baby md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="What is measured"
          title="Evidence, not adjectives."
          intro="Benchmarks and milestones that show what the system can do."
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
              Benchmarks, targets, current product scope, and planned capabilities are labeled separately so partners can tell what is available today.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
