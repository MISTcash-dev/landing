"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-misty bg-baby/95 backdrop-blur">
      <div className="mist-section flex items-center justify-between py-4">
        <Link href="/" aria-label="MIST home">
          <Image
            src="/mist.cash.svg"
            alt="MIST"
            width={160}
            height={30}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-ink/80 transition-colors hover:text-cobalt"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://docs.mist.cash"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-text)",
              fontWeight: 600,
              fontSize: 14,
              padding: "10px 18px",
              background: "var(--color-cobalt)",
              color: "#fff",
              borderRadius: "var(--radius)",
              whiteSpace: "nowrap",
            }}
          >
            Read the docs
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-misty bg-baby px-6 pb-6 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-ink/80 transition-colors hover:text-cobalt"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://docs.mist.cash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-[2px] bg-cobalt px-5 py-3 text-center font-semibold text-white"
          >
            Read the docs
          </Link>
        </div>
      )}
    </nav>
  );
}
