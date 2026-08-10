import SectionHeading from "./SectionHeading";

const layers = [
  {
    name: "Chamber",
    role: "State engine",
    detail:
      "Chamber stores transaction notes, nullifiers, and middleware state roots. It proves and updates ownership state, but never holds assets.",
  },
  {
    name: "Middleware",
    role: "Custom logic",
    detail:
      "Middleware proofs extend private transactions with policy, state-map lookups, exit conditions, and contract-specific payloads.",
  },
  {
    name: "Reserve",
    role: "Isolated asset custody",
    detail:
      "A Reserve is specialized middleware with an asset-holding contract and its own entry, private-flow, and exit rules.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="border-t border-misty bg-white py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Architecture"
          title="One state engine, isolated asset pools, programmable rules."
          intro="MIST separates transaction state from custom logic and asset custody. Chamber governs movement; Reserves hold assets; Middleware and Reserve proofs add rules."
        />
        <div className="mx-auto flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
          {layers.map((layer, i) => (
            <div key={layer.name} className="flex flex-1 flex-col gap-8 md:flex-row md:items-stretch">
              <article className="flex-1 border border-misty bg-baby p-6">
                <h3 className="mist-h3 text-ink">{layer.name}</h3>
                <p className="mist-eyebrow mt-1 text-cobalt">{layer.role}</p>
                <p className="mt-3 text-sm text-ink/70">{layer.detail}</p>
              </article>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/60">
          A deposit calls Chamber, which moves assets into a Reserve and adds a
          note. An in-protocol transfer updates notes and nullifiers without
          moving assets. A withdrawal updates Chamber and calls the Reserve to
          send assets to the specified public destination.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink/60">
          Each transaction uses one asset and one Chamber/Reserve boundary. The
          current product scope is USDC over CCTP on supported networks; the
          core transaction model does not itself specify cross-chain movement.
          USDT over usdt0 is on the roadmap.
        </p>
      </div>
    </section>
  );
}
