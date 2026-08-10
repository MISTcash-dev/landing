import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#architecture" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Try Hidemi", href: "/try-hidemi" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-misty bg-baby">
      <div className="mist-section flex flex-col items-center gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image
            src="/mist.cash.svg"
            alt="MIST"
            width={160}
            height={30}
            className="h-7 w-auto"
          />
          <p className="max-w-xs text-center text-sm text-ink/60 md:text-left">
            Privacy infrastructure by your rules.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink/80">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-cobalt">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-ink/80 md:items-end">
          <a href="mailto:shramee@mist.cash" className="hover:text-cobalt">
            shramee@mist.cash
          </a>
          <a
            href="https://t.me/shramee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cobalt"
          >
            Telegram @shramee
          </a>
          <a
            href="https://x.com/shrameetweets"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cobalt"
          >
            X @shrameetweets
          </a>
        </div>
      </div>
      <div className="border-t border-misty">
        <p className="mist-section py-6 text-center text-xs text-ink/50">
          &copy; 2026 MIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
