import Image from "next/image";

interface FooterProps {
  branding?: React.ReactNode;
}

export default function Footer({ branding }: FooterProps) {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            {branding ? branding : <>
              <Image
                src="/logo-mist.svg"
                alt="MIST"
                width={22}
                height={22}
                className="h-5.5 w-5.5"
              />
              <span className="text-sm font-bold text-white">
                MIST<span className="text-cyan-400">.cash</span>
              </span>
            </>}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <a
              href="https://github.com/mistcash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href="https://t.me/+IopcODWeG7wxZDhl"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
            >
              Telegram
            </a>
            <a
              href="https://docs.mist.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-400"
            >
              Documentation
            </a>
            <a
              href="mailto:support@mist.cash"
              className="transition-colors hover:text-cyan-400"
            >
              Support
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">
            &copy; 2026 MIST.cash. All rights reserved.
          </p>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-700">
          MIST.cash provides privacy-preserving transaction infrastructure. It
          is not a mixer. All transactions are compliant through Privacy
          Pool&ndash;based proof-of-innocence mechanisms. Non-custodial &mdash;
          MIST never holds user funds.
        </p>
      </div>
    </footer>
  );
}
