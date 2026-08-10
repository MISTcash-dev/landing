import Button from "./Button";
import Badge from "./Badge";

const proofPoints = [
  { value: "USDC", label: "via CCTP networks" },
  { value: "~1s", label: "privacy check on a phone" },
  { value: "<2¢", label: "target cost per transfer" },
  { value: "ZK", label: "privacy by mathematics" },
];

export default function HeroSection() {
  return (
    <section className="border-b border-misty bg-baby">
      <div className="mist-section flex flex-col items-start gap-10 py-20 md:py-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <Badge tone="cobalt">Protocol</Badge>
          <h1
            className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy infrastructure by your rules.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            MIST gives payment protocols a private way to move assets across
            networks. Partners can set their own transaction rules and provide
            evidence to authorized reviewers without putting sensitive details
            on a public ledger.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://docs.mist.cash" size="lg" variant="primary">
              Read the docs
            </Button>
            <Button href="/try-hidemi" size="lg" variant="secondary">
              Try Hidemi
            </Button>
          </div>
        </div>

        <dl className="grid w-full grid-cols-2 gap-px border border-misty bg-misty lg:w-[420px]">
          {proofPoints.map((point) => (
            <div key={point.label} className="bg-white p-5">
              <dd className="text-3xl font-bold text-ink">
                {point.value}
              </dd>
              <dt className="mt-1 text-sm text-ink/60">{point.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
