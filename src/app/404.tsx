import Link from "next/link";
import { Shield } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950">
      <div className="text-center">
        <Shield className="mx-auto mb-6 h-12 w-12 text-cyan-400/30" />
        <h1 className="mb-2 text-5xl font-bold text-white">404</h1>
        <p className="mb-8 text-lg text-slate-400">Page not found</p>
        <Link
          href="/"
          className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-cyan-500"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
