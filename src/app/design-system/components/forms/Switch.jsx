export function Switch({ checked, onChange, label, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--color-ink)', opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <span style={{
        width: 36, height: 20, borderRadius: 'var(--radius)', background: checked ? 'var(--color-cobalt)' : 'var(--color-misty)',
        position: 'relative', flex: 'none', transition: 'background .15s',
      }}>
        <span style={{
          position: 'absolute', top: 2, left: checked ? 18 : 2, width: 16, height: 16, background: '#fff',
          borderRadius: '1px', transition: 'left .15s',
        }} />
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label}
    </label>
  );
}
