export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mist-eyebrow mb-3 text-cobalt">{eyebrow}</p>
      <h2 className="mist-h2">{title}</h2>
      {intro && (
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">{intro}</p>
      )}
    </div>
  );
}
