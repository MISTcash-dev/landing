"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const defaultNavLinks = [
  { label: "The Risk", href: "#problem" },
  { label: "How It Works", href: "#solution" },
  { label: "Architecture", href: "#trust" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

interface NavBarProps {
  branding?: React.ReactNode;
  cta?: React.ReactNode;
  navLinks?: { label: string; href: string }[];
}

export default function Navbar({ branding, navLinks = defaultNavLinks, cta }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {branding ? branding : <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-mist.svg"
            alt="MIST.cash"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            MIST<span className="text-cyan-400">.cash</span>
          </span>
        </Link>}

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          {cta ? (
            cta
          ) : (
            <a
              href="https://hidemi.mist.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Launch App
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-navy-950/95 px-6 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          {cta ? (
            cta
          ) : (
            <a
              href="https://hidemi.mist.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-lg bg-cyan-400 px-5 py-3 text-center font-semibold text-navy-950"
            >
              Launch App
            </a>)}
        </div>
      )}
    </nav>
  );
}
