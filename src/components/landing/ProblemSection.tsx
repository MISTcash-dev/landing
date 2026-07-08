import {
  Fingerprint,
  Swords,
  Building2,
  KeyRound,
  RefreshCw,
  ArrowRight,
  UserIcon,
  RefreshCwOff,
  HandCoins,
  Receipt,
  BinaryIcon,
} from "lucide-react";
import SectionCard from "./SectionCard";

const threats = [
  {
    icon: BinaryIcon,
    // title: "Your Counterparty Knows Everything",
    stat: "100% exposure",
    title: "Full exposure to every sender and recipient",
    description:
      "When you pay someone in USDC, they see your entire balance, every transaction, every dApp, and every wallet you've ever touched. It's like paying for coffee with a bank statement stapled to your face.",
  },
  {
    icon: Fingerprint,
    // title: "\u201CPseudonymous\u201D Doesn\u2019t Mean Private",
    stat: "Identity linked",
    title: "One interaction could link your identity",
    description:
      "One interaction with a KYC\u2019d exchange, an ENS name, or a social media post linking to your wallet permanently ties your on-chain activity to your real identity. Your address is a username, not a mask.",
  },
  {
    icon: Swords,
    // title: "Your Wallet Balance Is a Target on Your Back",
    stat: "75% more violence",
    title: "75% increase in wrench attacks in 2025",
    description:
      <>
        72 verified cases of physical violence against crypto holders in 2025 alone \u2014 kidnappings, home invasions, torture. On-chain data with leaked personal information to build target lists. Source: <a className="border-b border-white/30" href="https://www.yahoo.com/news/articles/41m-losses-crypto-wrench-attacks-140102565.html" target="_blank" rel="noopener noreferrer">Yahoo! news</a>
      </>,
  },
  {
    icon: RefreshCwOff,
    // title: "A Fresh Address Won\u2019t Save You",
    stat: "New wallet ≠ privacy",
    title: "Zero privacy gained from a new wallet alone",
    description:
      "Funding a new address from an old one creates a traceable link. Cluster analysis groups addresses by behavior patterns. A single interaction with a known entity collapses the pseudonymity of every \u201Cfresh\u201D address.",
  },
  {
    icon: Receipt,
    // title: "Your Salary Is Public",
    stat: "Income exposure",
    title: "All your on-chain earnings are fully public",
    description:
      'If your organization pays contributors on-chain, your earnings and your coworker\u2019s earnings are fully visible to everyone.CZ called this "one of the largest structural barriers" to crypto payment adoption.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative px-6 pb-8 pt-12 md:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-danger">
            The Exposure Problem
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            You&apos;re more exposed than you think
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Every transaction on a public blockchain is a permanent, searchable
            record.
          </p>
        </div>

        {/* Threat cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, index) => (
            <SectionCard
              key={index}
              variant="danger"
              icon={threat.icon}
              stat={threat.stat}
              title={threat.title}
              description={threat.description}
              flippable
            />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-5 rounded-xl border border-cyan-400/10 bg-navy-900/60 p-6">
          <div className="w-full flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
            <p className="text-lg text-slate-300">
              Your on-chain history is already being analyzed right now.
            </p>
            <a
              href="https://hidemi.mist.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-2 text-base font-semibold text-black/90 transition-all hover:bg-danger/90 sm:text-lg"
            >
              Get privacy with Hidemi
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
