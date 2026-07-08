import { Check } from "lucide-react";
import Image from "next/image";

const privacyFeatures = [
  "Zero-knowledge proofs \u2014 not just obscurity, mathematical privacy",
  "No wallet address exposure when receiving payments",
  "Withdraw without linking to your deposit",
  "No tracking cookies or behavioral analytics",
  "Non-custodial \u2014 MIST never holds your funds",
  "No passwords or seed phrases \u2014 biometric passkey login",
];

export default function PrivacySection() {
  return (
    <section className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: text content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Privacy by Default
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Every on-chain payment is publicly visible.{" "}
              <span className="gradient-text-cyan">
                changes that.
              </span>
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Your salary, purchases, and transfers &mdash; all exposed on
              public blockchains.  uses cryptographic privacy:
              mathematically proven, not just obfuscated.
            </p>

            <ul className="space-y-3">
              {privacyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: shield illustration */}
          <div className="flex justify-center" aria-hidden="true">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/8 blur-3xl" />
              <Image
                src="/user-privacy.svg"
                alt=""
                width={400}
                height={400}
                className="relative h-auto w-full max-w-sm opacity-60 brightness-150"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
