import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
        {/* Background image */}
        <Image
          src="/mistopia.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/70 via-navy-950/45 to-navy-950/75" />

        <div className="relative px-8 py-14 text-center md:px-16 md:py-20">
          <Image
            src="/logo-mist.svg"
            alt=""
            width={48}
            height={48}
            className="mx-auto mb-6 md:mb-16 h-12 w-12"
          />
          <h2 className="my-12 text-2xl font-bold text-white md:text-3xl text-shadow-lg">
            72 attacks last year. $243M lost to one privacy lapse.
            <span className="block my-6 md:mb-16 md:text-4xl text-cyan-400">Take your finances off display.</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://hidemi.mist.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="cyan-glow-strong group flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-cyan-500 sm:text-lg"
            >
              Try app
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/mistcash"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-cyan-400/30 hover:text-white sm:text-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
