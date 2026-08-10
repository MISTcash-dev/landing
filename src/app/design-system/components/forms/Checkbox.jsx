export function Checkbox({ label, checked, onChange, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--color-ink)', opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <span style={{
        width: 18, height: 18, borderRadius: 'var(--radius)', border: '1px solid var(--color-misty)',
        background: checked ? 'var(--color-cobalt)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      }}>
        {checked && (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>)}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}
