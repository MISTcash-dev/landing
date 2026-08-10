import Button from "./Button";

export default function CTASection({
  heading = "Build with MIST.",
  body = "Integrate private settlement into any protocol. The docs specify the full operator and integrator path.",
  primary = { label: "Read the docs", href: "https://docs.mist.cash" },
  secondary = { label: "Contact the team", href: "mailto:shramee@mist.cash" },
}: {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-cobalt py-16 md:py-20">
      <div className="mist-section flex flex-col items-center gap-6 text-center">
        <h2
          className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-baby md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {heading}
        </h2>
        <p className="max-w-xl text-baby/85">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primary.href} size="lg" variant="primary" surface="dark">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} size="lg" variant="secondary" surface="dark">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
