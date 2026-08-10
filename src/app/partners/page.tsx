import type { Metadata } from "next";
import Button from "@/components/landing/Button";
import Badge from "@/components/landing/Badge";
import SectionHeading from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Partners — MIST",
  description:
    "Private asset state, Reserve-scoped compliance proofs, and selective disclosure for payment providers, trading desks, treasury teams, and compliance partners.",
  openGraph: {
    title: "Partners — MIST",
    description:
      "Private asset state and Reserve-scoped compliance proofs for regulated money movement. Apply for the pilot program.",
    url: "https://mist.cash/partners",
    type: "website",
    siteName: "MIST",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners — MIST",
    description:
      "Build confidential settlement for regulated money movement. Apply for the MIST pilot program.",
    site: "@mistcash",
  },
};

const audiences = [
  {
    title: "Payment service providers and processors",
    quote:
      "Settle on-chain without exposing merchant flows or transaction economics.",
    detail:
      "Competitors and counterparties can infer volumes, pricing, and merchant relationships from on-chain flow.",
  },
  {
    title: "OTC desks and prime brokers",
    quote:
      "Keep trade size and counterparties private while staying compliant.",
    detail:
      "Large trades leak size and counterparty on a public chain, creating market impact and front-running risk.",
  },
  {
    title: "Payroll platforms",
    quote: "Pay employees on-chain without exposing compensation data.",
    detail:
      "Compensation data is sensitive by default, and customer trust depends on keeping it that way.",
  },
  {
    title: "Corporate treasury and intercompany finance",
    quote:
      "Move funds internally without signaling cash position or counterparties.",
    detail:
      "Cash positions and internal transfers signal strategy and liquidity to anyone watching the chain.",
  },
  {
    title: "Banks and fintechs doing stablecoin payments",
    quote: "Use public-chain settlement with private transaction data.",
    detail:
      "Want the efficiency of public chain settlement without exposing customer transaction data.",
  },
];

const settlementFeatures = [
  "Private note contents and transaction fields stay out of the clear, while an authorized operator or auditor can derive a key for selective per-transaction disclosure.",
  "Fixed-width encrypted records keep input notes, beneficiary data, and discovery data from revealing record counts or reserve shape on-chain.",
  "Secondary circuits can carry KYC membership, jurisdiction checks, auditor commitments, and amount constraints into the primary Chamber proof.",
  "Chamber proves value conservation and nullifiers; a Reserve moves assets only when the proof authorizes an on-chain withdrawal.",
  "Contract withdrawals can carry a circuit-bound payload for protocol-specific calls; the middleware defines its meaning.",
  "Proof generation has been measured at about one second on an iPhone, while current product cost is about five cents with a lower target.",
  "Current product scope is USDC over CCTP-supported networks; the core transaction model remains single-asset per transaction.",
];

const reserveFeatures = [
  "Deploy KYC membership, AML, jurisdiction, auditor-commitment, or amount-constraint logic as a Reserve proof checked alongside the Chamber proof.",
  "Keep assets governed by one compliance rule set in a separate Reserve contract from unregulated or differently regulated funds.",
  "Because Reserve custody is separated, activity in one Reserve does not automatically govern or contaminate the asset pool in another.",
  "A recurring-volume or revenue-share arrangement is a proposed pilot model, not a protocol guarantee.",
];

const howItWorks = [
  {
    name: "The Chamber",
    role: "State engine",
    detail:
      "Chamber stores transaction notes, nullifiers, and middleware state roots. It governs ownership state but never holds assets.",
  },
  {
    name: "Reserves",
    role: "Isolated asset custody",
    detail:
      "Each Reserve is a specialized middleware with an asset-holding contract and its own compliance and exit rules.",
  },
  {
    name: "Middleware",
    role: "Custom proof logic",
    detail:
      "Middleware proofs extend Chamber transactions with private-flow rules, state-map access, exit conditions, and contract payloads.",
  },
];

const whyNow = [
  {
    value: "First ZK proof on Starknet",
    detail: "A documented founder milestone from July 2024, implemented in Garaga.",
  },
  {
    value: "Hidemi live",
    detail: "MIST's first consumer app, launched January 2026.",
  },
  {
    value: "Outer-wrapped Groth16",
    detail:
      "The selected architecture combines primary and secondary proofs in one outer proof, with aggregation as an explicit integration dependency.",
  },
  {
    value: "USDC via CCTP",
    detail:
      "The current product scope is USDC over CCTP-supported networks; broader cross-chain movement is a separate mechanism from the core model.",
  },
];

const pilotCriteria = [
  "You already move value on-chain, or plan to within 6 to 12 months.",
  "You have a clear confidentiality problem around sender, recipient, amount, balances, or business terms.",
  "You need regulator-friendly auditability, not full anonymity.",
  "You can describe who must see what, and under what conditions.",
  "You own budget in payments, treasury, trading ops, product, or compliance.",
];

const pilotBenefits = [
  "Direct integration support from the core protocol team.",
  "Input into which compliance modules and chains we prioritize next.",
  "Priority terms on revenue share once your Reserve goes live.",
];

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-misty bg-baby">
          <div className="mist-section flex flex-col items-start gap-10 py-20 md:py-28">
            <div className="max-w-2xl">
              <Badge tone="cobalt">Partners</Badge>
              <h1
                className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Settle on-chain while keeping transaction context private.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink/70">
                MIST is privacy infrastructure for regulated money movement.
                Private note state, Reserve-scoped compliance proofs, and
                selective per-transaction disclosure help protect commercial
                context without removing an audit path.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="mailto:shramee@mist.cash" size="lg" variant="primary">
                  Apply for the Pilot Program
                </Button>
                <Button href="mailto:shramee@mist.cash" size="lg" variant="secondary">
                  Talk to the team
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="The problem"
              title="Public ledgers leak what your settlement should not."
              intro="Public ledgers expose transaction sizes, counterparties, and flow patterns to anyone watching, including competitors and the merchants or partners you settle with. If you move value on-chain, that visibility is part of the settlement surface."
            />
            <p className="mx-auto max-w-3xl text-center text-ink/70">
              Buyers in this position do not want full anonymity, that invites
              exactly the regulatory scrutiny they are trying to avoid. What
              they need is regulator-friendly auditability without exposing
              commercially sensitive data: confidentiality, compliance, and
              operability together, not traded off against each other.
            </p>
          </div>
        </section>

        <section className="border-t border-misty bg-white py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="Who MIST is built for"
              title="The pain is different per desk."
              intro="Ranked by how soon the pain translates into budget."
            />
            <div className="grid gap-px border border-misty bg-misty md:grid-cols-2 lg:grid-cols-3">
              {audiences.map((audience) => (
                <article key={audience.title} className="bg-white p-7">
                  <h3 className="mist-h3 text-ink">{audience.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {audience.quote}
                  </p>
                  <p className="mt-3 text-sm text-ink/70">{audience.detail}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-ink/70">
              If you already move value on-chain, or plan to within 6 to 12
              months, and you can describe who needs to see what and under what
              conditions, you are likely a fit.
            </p>
          </div>
        </section>

        <section className="border-t border-misty bg-baby py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="Two ways to build with MIST"
              title="Settlement rails and compliance integrations."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-misty bg-white p-8">
                <h3 className="mist-h2 text-ink">
                  For payment providers, OTC desks, payroll, and treasury
                </h3>
                <p className="mt-3 text-ink/70">
                  Add confidential settlement to the rails you already run,
                  without building a privacy stack from scratch.
                </p>
                <ul className="mt-6 space-y-3">
                  {settlementFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-ink/80">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-cobalt)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border border-misty bg-white p-8">
                <h3 className="mist-h2 text-ink">
                  For compliance and KYC/AML providers
                </h3>
                <p className="mt-3 text-ink/70">
                  Extend an existing compliance workflow into private settlement
                  proofs.
                </p>
                <p className="mt-3 text-ink/70">
                  MIST lets a compliance provider define a Reserve with its own
                  proof requirements. A transaction can carry a KYC membership,
                  jurisdiction check, auditor commitment, or custom amount rule
                  into the combined proof, while the sensitive record stays
                  encrypted and selectively disclosable per transaction. Any
                  commercial arrangement around Reserve volume belongs in the
                  pilot agreement, not in the protocol guarantee.
                </p>
                <ul className="mt-6 space-y-3">
                  {reserveFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-ink/80">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-cobalt)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-misty bg-white py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="How it works"
              title="One state engine, isolated Reserves, composable proofs."
            />
            <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-2 md:flex-row md:items-stretch">
              {howItWorks.map((layer, i) => (
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
            <p className="mx-auto mt-10 max-w-3xl text-center text-ink/70">
              The result: a transfer can keep note contents and sensitive
              fields out of the clear, a payment provider can define the
              disclosure context its auditors need, and a compliance provider
              can attach its rules to a separated Reserve. The exact disclosure
              workflow and commercial terms belong to the integration.
            </p>
          </div>
        </section>

        <section className="bg-ink py-16 text-baby md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="Why now"
              title="The protocol boundaries are explicit."
            />
            <div className="grid gap-px border border-misty bg-misty md:grid-cols-2 lg:grid-cols-4">
              {whyNow.map((point) => (
                <article key={point.value} className="bg-ink p-7">
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-baby">
                    {point.value}
                  </h3>
                  <p className="mt-3 text-sm text-baby/70">{point.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-misty bg-baby py-16 md:py-24">
          <div className="mist-section">
            <SectionHeading
              eyebrow="Pilot Program"
              title="Build the first live Reserves on MIST."
              intro="We are onboarding a small group of payment providers, trading desks, treasury teams, and compliance partners to build the first live Reserves on MIST."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="border border-misty bg-white p-8">
                <h3 className="mist-h2 text-ink">This is for you if</h3>
                <ul className="mt-6 space-y-3">
                  {pilotCriteria.map((criterion) => (
                    <li key={criterion} className="flex gap-3 text-sm text-ink/80">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-cobalt)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="border border-misty bg-white p-8">
                <h3 className="mist-h2 text-ink">Pilot partners get</h3>
                <ul className="mt-6 space-y-3">
                  {pilotBenefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-ink/80">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-cobalt)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="mailto:shramee@mist.cash" size="lg" variant="primary">
                Apply for the Pilot Program
              </Button>
              <Button href="mailto:shramee@mist.cash" size="lg" variant="secondary">
                Talk to the team
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-misty bg-white py-16 md:py-20">
          <div className="mist-section flex flex-col items-center gap-4 text-center">
            <h2 className="mist-h2 text-ink">Talk to the team.</h2>
            <p className="max-w-xl text-ink/70">
              shramee@mist.cash · Telegram @shramee · X @shrameetweets
            </p>
          </div>
        </section>
      </>
  );
}
