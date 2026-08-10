export function Input({ label, placeholder, value, onChange, error, helpText, type = 'text', disabled = false }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-text)', width: '100%' }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        style={{
          font: 'inherit', fontSize: 15, padding: '10px 12px', background: '#fff',
          border: `1px solid ${error ? 'var(--color-cobalt)' : 'var(--color-misty)'}`,
          borderRadius: 'var(--radius)', color: 'var(--color-ink)', opacity: disabled ? 0.5 : 1,
        }}
      />
      {(error || helpText) && (
        <span style={{ fontSize: 12, color: error ? 'var(--color-cobalt)' : 'var(--color-ink)', opacity: error ? 1 : 0.6 }}>
          {error || helpText}
        </span>
      )}
    </label>
  );
}
