import type { Metadata } from "next";
import Badge from "@/components/landing/Badge";
import SectionHeading from "@/components/landing/SectionHeading";
import Button from "@/components/landing/Button";

export const metadata: Metadata = {
  title: "Team — MIST",
  description:
    "MIST is built by one founder: 12 years of engineering, the first ZK proof on Starknet, and a decade of contributions across Gnark, Aztec, and more.",
};

const credentials = [
  {
    credential: "12 years of technical experience",
    meaning:
      "The protocol is designed and shipped by someone who has seen a decade of stack migrations, audits, and production failures.",
  },
  {
    credential: "Dropped out of high school to work as a full-time developer",
    meaning:
      "A self-taught path — no credentials to protect, only software that has to work.",
  },
  {
    credential: "First ZK proof on Starknet",
    meaning:
      "Led the earliest practical ZK proving on the network, and shipped multiple high-impact projects along the way.",
  },
  {
    credential: "Largest external contributor to Gnark",
    meaning:
      "Gnark powers Linea — the proving stack of one of the biggest L2s was built on with contributions here.",
  },
  {
    credential: "Contributions to Aztec, World ProveKit & Arkworks Algebra",
    meaning:
      "Hands-on across the proving ecosystems MIST composes with, not just a consumer of them.",
  },
  {
    credential: "Lecturer on software development at PaCE@NTU",
    meaning:
      "Has taught the fundamentals in front of a university room — and communicated complex systems under scrutiny.",
  },
  {
    credential: "Worked directly with the government of Singapore",
    meaning:
      "Seen the compliance side of the table, which is why MIST is built for auditability, not anonymity.",
  },
];

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
      {/* Hero */}
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

      {/* Bio — credential, then what it means */}
      <section className="py-16 md:py-24">
        <div className="mist-section">
          <SectionHeading
            eyebrow="The founder"
            title="Every credential, and what it buys you."
          />
          <div className="grid gap-px border border-misty bg-misty md:grid-cols-2">
            {credentials.map((item) => (
              <article key={item.credential} className="bg-white p-7">
                <h2 className="mist-h3 text-ink">{item.credential}</h2>
                <p className="mt-3 text-sm text-ink/70">{item.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
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
