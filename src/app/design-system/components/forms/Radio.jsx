export function Radio({ label, checked, onChange, name, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--color-ink)', opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <span style={{
        width: 18, height: 18, borderRadius: '50%', border: `1px solid ${checked ? 'var(--color-cobalt)' : 'var(--color-misty)'}`,
        background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      }}>
        {checked && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--color-cobalt)' }} />}
      </span>
      <input type="radio" name={name} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}
