export function Toast({ tone = 'ink', message, onDismiss }) {
  const map = {
    ink: { bg: 'var(--color-ink)', color: 'var(--color-baby)' },
    cobalt: { bg: 'var(--color-cobalt)', color: '#fff' },
  };
  const { bg, color } = map[tone] || map.ink;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, background: bg, color,
      padding: '12px 14px', borderRadius: 'var(--radius)', fontFamily: 'var(--font-text)', fontSize: 14, maxWidth: 380,
    }}>
      <span style={{ flex: 1 }}>{message}</span>
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss" style={{ background: 'none', border: 'none', padding: 0, display: 'flex', cursor: 'pointer', color: 'inherit', opacity: 0.7 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </div>
  );
}
