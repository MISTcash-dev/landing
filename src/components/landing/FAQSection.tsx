"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this legal? Is this like Tornado Cash?",
    answer:
      "No. MIST.cash is not a mixer. It uses the Privacy Pools model as base — the compliance framework endorsed by Vitalik Buterin. In addition to that, other compliance features like KYC, KYT or jurisdiction checks can be added as needed by the application layer.",
  },
  {
    question: "Can I lose my funds?",
    answer:
      "MIST is non-custodial — we never hold your funds. All transactions go through on-chain smart contracts. You retain full control of your assets at all times. There is no account, no balance held by us, and no way for MIST to move your funds.",
  },
  {
    question: "What if the smart contract is hacked?",
    answer:
      "The protocol is built on proven cryptographic primitives with auditable smart contracts. The code is open-source and available on GitHub for independent review. We take security seriously and follow industry best practices for smart contract development.",
  },
  {
    question: "Do I need a seed phrase or password?",
    answer:
      "No. MIST Hidemi uses WebAuthn passkeys — biometric authentication (fingerprint or face) that's built into your device. No passwords to remember, no seed phrases to secure. A backup seed phrase is generated only as an optional fallback recovery method.",
  },
  {
    question: "Which blockchains are supported?",
    answer:
      "MIST Hidemi supports 6 blockchains: Ethereum, Base, Arbitrum, Optimism, Polygon, and StarkNet. You can receive USDC from any of these chains through a single payment link.",
  },
  {
    question: "How much does it cost?",
    answer:
      "MIST Hidemi is free to use. You only pay standard blockchain gas fees for on-chain transactions. There are no percentage-based fees, no subscription costs, and no hidden charges.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-white">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-slate-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Common Questions
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="rounded-2xl border border-white/5 bg-navy-900/40 px-6 md:px-8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
