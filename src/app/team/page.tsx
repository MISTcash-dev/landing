import Image from "next/image";
import type { Metadata } from "next";
import Badge from "@/components/landing/Badge";
import SectionHeading from "@/components/landing/SectionHeading";
import Button from "@/components/landing/Button";

export const metadata: Metadata = {
  title: "Team — MIST",
  description:
    "MIST is built by one founder: 12 years of engineering, the first ZK proof on Starknet, and a decade of contributions across Gnark, Aztec, and more.",
};

const story = [
  {
    date: "August 2023",
    title: "The near-miss that started MIST",
    body:
      "Proving ownership of on-chain assets to demonstrate solvency to the Singaporean government almost publicly exposed that a wallet address belonged to the legal entity. The bullet was dodged — barely. That is the moment privacy in blockchain payments stopped being theoretical.",
  },
  {
    date: "November 2023",
    title: "The Cairo turn",
    body:
      "Implemented Homomorphic Encryption (HE) in Cairo as a first attempt at the problem.",
  },
  {
    date: "December 2023",
    title: "A conversation with Eli Ben-Sasson",
    body:
      "A conversation with Eli Ben-Sasson sharpened the direction: ZK proofs are the right tool to freely prove relationships between encrypted values.",
  },
  {
    date: "July 2024",
    title: "First ZK proof on Starknet",
    body:
      "Six months of studying whitepapers and dissecting codebases later, the first ever ZK proof on Starknet was produced — implemented in Garaga in the weeks that followed. From there, the full focus turned to solving privacy: the foundation of MIST.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-misty bg-baby">
        <div className="mist-section flex flex-col items-start gap-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <Badge tone="cobalt">Team</Badge>
            <h1
              className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built by one founder who ships.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/70">
              Shramee has been writing code professionally for 12 years, led
              multiple high-impact projects, and produced the first ZK proof on
              Starknet. MIST is the direct result of that work — and of the
              solvency scare in Singapore that proved the problem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:shramee@mist.cash" size="lg" variant="primary">
                Email Shramee
              </Button>
              <Button href="https://x.com/shrameetweets" size="lg" variant="secondary">
                Follow on X
              </Button>
            </div>
          </div>

          {/* Placeholder avatar — initials on a white card, Misty border */}
          <div
            className="flex h-28 w-28 items-center justify-center border border-misty bg-white"
            style={{ borderRadius: "var(--radius)" }}
            aria-hidden="true"
          >
            <span className="font-display text-4xl font-bold text-cobalt">
              S
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-misty bg-baby py-12 md:py-16">
        <div className="mist-section">
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="border border-misty bg-white p-2" style={{ borderRadius: "var(--radius)" }}>
              <Image
                src="/events/events-zuafrique-zk-primitives.jpeg"
                alt="Shramee speaking at a ZK privacy event"
                width={2048}
                height={1365}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                Speaking at a ZK privacy event.
              </figcaption>
            </figure>
            <figure className="border border-misty bg-white p-2" style={{ borderRadius: "var(--radius)" }}>
              <Image
                src="/events/events-muchiangmai-account-abstraction.jpeg"
                alt="Shramee speaking at a ZK privacy event"
                width={2048}
                height={1536}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                Speaking at a ZK privacy event.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mist-section">
          <SectionHeading
            eyebrow="The founder"
            title="The record, and what it means."
          />
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink/70">
            <p>
              Shramee has 12 years of technical experience across stack migrations,
              audits, and production systems. He has worked as a full-time developer
              since dropping out of high school, and has also lectured on software
              development at PaCE@NTU — experience that keeps complex systems grounded
              in software that has to work and explanations that hold up under scrutiny.
            </p>
            <p>
              He produced the first ZK proof on Starknet and became the largest external
              contributor to Gnark, the proving stack used by Linea. His contributions to
              Aztec, World ProveKit, and Arkworks Algebra give MIST hands-on experience
              across the proving ecosystems it composes with, rather than treating them
              as black boxes.
            </p>
            <p>
              He has worked directly with the government of Singapore and has seen the
              compliance side of the table. That record is why MIST is built for
              auditability and a practical compliance path, not anonymity alone.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-misty bg-white py-16 md:py-24">
        <div className="mist-section">
          <SectionHeading
            eyebrow="The story"
            title="How MIST started."
          />
          <div className="mx-auto max-w-3xl">
            {story.map((entry) => (
              <article key={entry.title} className="border-t border-misty py-8 first:border-t-0 first:pt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
                  {entry.date}
                </p>
                <h2 className="mist-h3 mt-2 text-ink">{entry.title}</h2>
                <p className="mt-3 text-ink/70">{entry.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-misty bg-baby py-16 md:py-20">
        <div className="mist-section flex flex-col items-center gap-4 text-center">
          <h2 className="mist-h2 text-ink">Talk to the founder.</h2>
          <p className="max-w-xl text-ink/70">
            <a href="mailto:shramee@mist.cash" className="hover:text-cobalt">
              shramee@mist.cash
            </a>
            {" · "}
            <a
              href="https://t.me/shramee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalt"
            >
              Telegram @shramee
            </a>
            {" · "}
            <a
              href="https://x.com/shrameetweets"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalt"
            >
              X @shrameetweets
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
