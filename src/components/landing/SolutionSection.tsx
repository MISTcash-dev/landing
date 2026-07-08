"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "../ImageLightbox";
import SectionCard from "./SectionCard";

const features = [
  "No sign-up required",
  "No email required",
  "Passkey authentication",
  "Full self-custody",
  "Mobile-first",
];

const steps = [
  {
    number: "1",
    title: "Create and Share Payment Link",
    description:
      "Generate a secure link and share it with anyone who needs to send you USDC. No wallet address exposed to the payer.",
  },
  {
    number: "2",
    title: "Receive from Any Chain",
    description:
      "Sender pays with USDC from Ethereum, Base, Arbitrum, Optimism, Polygon, or StarkNet. Cross-chain with no additional setup.",
  },
  {
    number: "3",
    title: "Withdraw Privately",
    description:
      "Withdraw, offramp, or transfer your USDC with zero transaction history. Deposits and withdrawals are unlinkable. Powered by ZK proofs.",
  },
];

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/app-screens/1-create-payment-link.png",
    alt: "Create a Payment Link",
    caption: "Create a Payment Link",
  },
  {
    src: "/app-screens/2-share-payment-link.png",
    alt: "Share the Payment Link",
    caption: "Share the Payment Link",
  },
  {
    src: "/app-screens/3-sending-funds.png",
    alt: "Receive from Any Chain",
    caption: "Receive from Any Chain",
  },
  {
    src: "/app-screens/4-withdraw-payment-privately.png",
    alt: "Withdraw Payment Privately",
    caption: "Withdraw Payment Privately",
  },
];

export default function SolutionSection() {
  const [lightboxImage, setLightboxImage] = useState<(Screenshot & { index: number }) | null>(null);

  return (
    <section id="solution" className="relative px-6 py-8">
      {/* Divider */}
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            How It Works
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Private payments in three steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <SectionCard
              key={step.number}
              variant="cyan"
              badge={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Zero-friction feature bar — above steps */}
        <div className="my-10 rounded-xl border border-cyan-400/10 bg-navy-900/30 px-6 py-4">
          <div className="w-full flex flex-wrap items-stretch justify-around gap-x-6 gap-y-2 text-sm text-slate-400">
            {features.map((feature) => (
              <span key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider-cyan mx-auto my-16 max-w-md" />
        {/* App Screenshots */}
        <div className="mt-12">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              See It In Action
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              The Hidemi Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              See exactly how private payments work — Click/Tap any screenshot to expand.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={screenshot.src} className="space-y-2 p-1 pb-2 bg-white/10 rounded-2xl border border-white/15">
                <button
                  onClick={() => setLightboxImage({ index, ...screenshot })}
                  className="relative aspect-13/25 overflow-hidden rounded-xl border-2 border-black/25 transition-all cursor-zoom-in group"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={600}
                    height={1150}
                    className="h-full w-full object-cover transition-transform scale-101"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                    <span className="text-white text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" style={{ textShadow: "2px 2px 5px #000" }}>
                      Click to expand
                    </span>
                  </div>
                </button>
                <p className="text-center text-sm text-slate-300">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <ImageLightbox
          src={lightboxImage?.src || ""}
          alt={lightboxImage?.alt || ""}
          caption={lightboxImage?.caption}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          onPrev={() =>
            setLightboxImage((cur) => {
              if (!cur) return cur;
              const prevIndex = (cur.index - 1 + screenshots.length) % screenshots.length;
              return { index: prevIndex, ...screenshots[prevIndex] } as Screenshot & { index: number };
            })
          }
          onNext={() =>
            setLightboxImage((cur) => {
              if (!cur) return cur;
              const nextIndex = (cur.index + 1) % screenshots.length;
              return { index: nextIndex, ...screenshots[nextIndex] } as Screenshot & { index: number };
            })
          }
        />
      </div>
    </section>
  );
}
