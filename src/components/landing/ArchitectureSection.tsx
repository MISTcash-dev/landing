import SectionHeading from "./SectionHeading";

const layers = [
  {
    name: "Chamber",
    role: "Privacy state",
    detail:
      "Deposits and withdrawals are unlinkable. Leaves commit to notes in a Merkle tree; proofs validate without revealing which note was spent.",
  },
  {
    name: "Middleware",
    role: "Operator rules",
    detail:
      "Policy runs as a layer between Chamber and Reserve. Operators specify rules — limits, allowlists, compliance checks — as code.",
  },
  {
    name: "Reserve",
    role: "Settlement",
    detail:
      "The settlement layer holds the pooled assets and executes withdrawals. Proofs from Chamber plus middleware gate every release.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="border-t border-misty bg-white py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Architecture"
          title="One private state, three layers."
          intro="MIST separates where privacy lives from where rules run and where funds settle. Each layer is independently replaceable."
        />
        <div className="mx-auto flex max-w-3xl flex-col items-stretch gap-2 md:flex-row md:items-stretch">
          {layers.map((layer, i) => (
            <div key={layer.name} className="flex flex-1 flex-col gap-2 md:flex-row md:items-stretch">
              {i > 0 && (
                <div className="flex items-center justify-center px-0 text-ink/40 md:px-1" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              )}
              <article className="flex-1 border border-misty bg-baby p-6">
                <h3 className="mist-h3 text-ink">{layer.name}</h3>
                <p className="mist-eyebrow mt-1 text-cobalt">{layer.role}</p>
                <p className="mt-3 text-sm text-ink/70">{layer.detail}</p>
              </article>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/60">
          A transfer moves through the middleware, updates the Chamber, and
          settles against the Reserve. Every step is provable; nothing is
          visible by default.
        </p>
      </div>
    </section>
  );
}
