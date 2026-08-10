export function Tag({ children, onRemove }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-text)', fontSize: 13,
      padding: '5px 8px 5px 10px', background: '#fff', border: '1px solid var(--color-misty)',
      borderRadius: 'var(--radius)', color: 'var(--color-ink)',
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{ background: 'none', border: 'none', padding: 0, display: 'flex', cursor: 'pointer', opacity: 0.6 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </span>
  );
}
