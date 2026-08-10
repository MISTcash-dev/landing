import Link from "next/link";
import Button from "@/components/landing/Button";

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-baby px-6 text-center">
      <p className="mist-eyebrow text-cobalt">404</p>
      <h1
        className="mt-4 font-display text-5xl font-bold tracking-[-0.02em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-ink/70">
        The page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Go home
        </Button>
      </div>
      <div className="mt-8">
        <Link href="/blog" className="text-sm font-semibold text-cobalt hover:underline">
          Read the blog
        </Link>
      </div>
    </div>
  );
}
