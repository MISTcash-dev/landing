export function Select({ label, options = [], value, onChange, disabled = false }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-text)', width: '100%' }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>{label}</span>}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            font: 'inherit', fontSize: 15, padding: '10px 34px 10px 12px', width: '100%', appearance: 'none',
            background: '#fff', border: '1px solid var(--color-misty)', borderRadius: 'var(--radius)',
            color: 'var(--color-ink)', opacity: disabled ? 0.5 : 1,
          }}
        >
          {options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
        </select>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: .6 }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}
