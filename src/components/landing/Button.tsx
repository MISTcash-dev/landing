import Link from "next/link";

type Variant = "primary" | "secondary";
type Surface = "light" | "dark";

const palette: Record<Variant, Record<Surface, { bg: string; color: string }>> = {
  primary: {
    light: { bg: "var(--color-cobalt)", color: "#fff" },
    dark: { bg: "var(--color-baby)", color: "var(--color-ink)" },
  },
  secondary: {
    light: { bg: "var(--color-misty)", color: "var(--color-ink)" },
    dark: { bg: "var(--color-misty)", color: "var(--color-ink)" },
  },
};

export default function Button({
  variant = "primary",
  surface = "light",
  size = "md",
  href,
  children,
}: {
  variant?: Variant;
  surface?: Surface;
  size?: "sm" | "md" | "lg";
  href: string;
  children: React.ReactNode;
}) {
  const pad = size === "sm" ? "8px 14px" : size === "lg" ? "14px 24px" : "11px 20px";
  const fontSize = size === "sm" ? 13 : size === "lg" ? 17 : 15;
  const { bg, color } = palette[variant][surface];

  const style: React.CSSProperties = {
    fontFamily: "var(--font-text)",
    fontWeight: 600,
    fontSize,
    padding: pad,
    background: bg,
    color,
    border: "none",
    borderRadius: "var(--radius)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
