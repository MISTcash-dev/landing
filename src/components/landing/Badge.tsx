const tones = {
  cobalt: { bg: "var(--color-cobalt)", color: "#fff" },
  misty: { bg: "var(--color-misty)", color: "var(--color-ink)" },
  baby: { bg: "var(--color-baby)", color: "var(--color-ink)" },
  ink: { bg: "var(--color-ink)", color: "var(--color-baby)" },
};

export default function Badge({
  tone = "cobalt",
  children,
}: {
  tone?: keyof typeof tones;
  children: React.ReactNode;
}) {
  const { bg, color } = tones[tone] ?? tones.cobalt;
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: "var(--radius)",
        background: bg,
        color,
      }}
    >
      {children}
    </span>
  );
}
