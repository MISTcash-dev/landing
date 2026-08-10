import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    title: "Private transfers",
    mechanism:
      "MIST verifies that a transfer is funded, authorized, and balanced without publishing the underlying payment details.",
    payoff:
      "Partners can move value between private balances without exposing their full payment position on-chain.",
  },
  {
    title: "Your rules, in the payment flow",
    mechanism:
      "Operators can add limits, approval requirements, and release conditions to transfers and withdrawals.",
    payoff:
      "Your policy stays part of the transaction rather than becoming a manual review after the fact.",
  },
  {
    title: "Compliance with controlled disclosure",
    mechanism:
      "A transaction can carry evidence of KYC status, jurisdiction, audit approval, or amount limits without publishing the underlying record.",
    payoff:
      "Authorized reviewers can receive the evidence for a specific transaction instead of getting unrestricted access to the whole flow.",
  },
  {
    title: "Clear asset boundaries",
    mechanism:
      "Each transfer accounts for one asset within one Chamber and Reserve combination.",
    payoff:
      "Funds governed by different policies remain separated, making ownership and compliance responsibilities easier to define.",
  },
  {
    title: "Built for integration",
    mechanism:
      "Withdrawals can carry instructions for the receiving contract, with the transaction binding those instructions before settlement.",
    payoff:
      "Partners can connect private payments to their existing products without giving a relayer room to change the requested action.",
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
