import { ArrowRight, Lock } from "lucide-react";
import Image from "next/image";

const chains = [
  // { name: "Ethereum", logo: "/logo-eth.svg" },
  { name: "Ethereum", logo: "/logo-eth-color.svg" },
  { name: "Base", logo: "/logo-base.svg" },
  { name: "Arbitrum", logo: "/logo-arbitrum.svg" },
  { name: "Optimism", logo: "/logo-optimism.svg" },
  { name: "Polygon", logo: "/logo-polygon.svg" },
  { name: "StarkNet", logo: "/logo-stark.svg" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-28 md:pt-36">
      {/* Background grid */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* 2-column layout */}
      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 items-center">

          {/* Left column - Text content */}
          <div className="text-center lg:text-left relative">

            {/* Radial glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

            {/* Announcement bar */}
            <a
              href='#problem'
              role="status"
              aria-live="polite"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-danger/20 bg-danger/5 px-4 py-1.5 text-xs text-danger"
            >
              <Lock className="h-3 w-3" />
              <span>72 crypto holders kidnapped or robbed in 2025. Your balance is public.</span>
            </a>

            {/* H1 */}
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Your wallet is a window
              <span className="text-glow-cyan gradient-text-cyan block mt-4">
                Everybody is watching
              </span>
            </h1>

            {/* Subheadline — benefit-first, no jargon */}
            <p className="mx-auto lg:mx-0 my-8 lg:my-12 max-w-2xl text-lg text-slate-400 md:text-xl">
              Send and receive USDC privately across blockchains<br />
              No wallet history. No tracking. No trace. No signup
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3 sm:flex-row">
              <a
                href="https://hidemi.mist.cash"
                target="_blank"
                rel="noopener noreferrer"
                className="cyan-glow-strong group flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-cyan-500 sm:text-lg"
              >
                Make your transactions private
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Supported Chains */}
            <div className="mt-12 lg:mt-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-600">
                Supported networks
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                {chains.map((chain) => (
                  <div
                    key={chain.name}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700/50">
                      <Image
                        src={chain.logo}
                        alt={`${chain.name} blockchain`}
                        width={24}
                        height={24}
                        className="h-7 w-7 opacity-70"
                      />
                    </div>
                    <span className="text-xs text-slate-500">{chain.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Layered eye images */}
          <div className="flex items-center justify-center lg:justify-end lg:pl-12">
            <div className="w-full max-w-150 mt-12 lg:mt-0 opacity-95 hover:filter-(--cyan-to-red-filter)" style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
              <div className="hero-eye-frame relative pb-[74.76%] perspective-distant">
                {/* Eye frame - base layer (840x628, aspect ratio 1.337:1 or 74.76% padding) */}
                <Image
                  src="/eye-hero/1-eye-frame.png"
                  alt="digital window frame"
                  fill
                  className="object-contain relative animate-pulse animation-delay-200"
                  style={{ transform: 'translateX(calc(var(--mX) * -.5%)) translateY(calc(var(--mY) * -.5%)) rotateY(calc(var(--mX) * 10deg))' }}
                  priority
                />

                {/* Eye lid - middle layer (697x436, 83% width of frame) */}
                <div className="hero-eye-lid absolute left-[8.5%] top-[20%] w-[83%] pb-[43.1%]" style={{ transform: 'translateX(calc(var(--mX) * 9%)) translateY(calc(var(--mY) * 5%)) rotateY(calc(var(--mX) * 10deg))' }}>
                  <Image
                    src="/eye-hero/2-eye-lid.png"
                    alt="digital eye lids"
                    fill
                    className="object-contain"
                    style={{
                      // animation: 'pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  />

                  {/* Eye ball - top layer (231x226, 27.5% width of frame) */}
                  <div className="hero-eye-ball absolute left-[38%] top-[23%] w-[27%] pb-[26.9%]">
                    <Image
                      src="/eye-hero/3-eye.png"
                      alt="digital eye ball"
                      fill
                      className="object-contain"
                      style={{
                        // animation: 'pulse 1.6s 0.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        transform: 'translateX(calc(var(--mX) * 16%)) translateY(calc(var(--mY) * 8%))'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
