export function Dialog({ open, title, children, onClose, actions }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,34,33,0.45)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 100, fontFamily: 'var(--font-text)',
    }} onClick={onClose}>
      <div style={{ background: '#fff', borderRadius: 'var(--radius)', width: 420, maxWidth: '90vw', padding: 24 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, margin: 0, color: 'var(--color-ink)' }}>{title}</h3>
          <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', padding: 4, display: 'flex', cursor: 'pointer', opacity: 0.6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink)', marginBottom: actions ? 20 : 0 }}>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>{actions}</div>}
      </div>
    </div>
  );
}
