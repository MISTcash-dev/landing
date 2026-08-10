export function Badge({ tone = 'cobalt', children }) {
  const map = {
    cobalt: { bg: 'var(--color-cobalt)', color: '#fff' },
    misty: { bg: 'var(--color-misty)', color: 'var(--color-ink)' },
    baby: { bg: 'var(--color-baby)', color: 'var(--color-ink)' },
    ink: { bg: 'var(--color-ink)', color: 'var(--color-baby)' },
  };
  const { bg, color } = map[tone] || map.cobalt;
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 11,
      letterSpacing: '.08em', textTransform: 'uppercase', padding: '3px 8px',
      borderRadius: 'var(--radius)', background: bg, color,
    }}>{children}</span>
  );
}
