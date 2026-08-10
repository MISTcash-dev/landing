export function IconButton({ icon, label, variant = 'secondary', size = 'md', onClick, disabled = false }) {
  const dim = size === 'sm' ? 30 : size === 'lg' ? 44 : 36;
  const bg = variant === 'primary' ? 'var(--color-cobalt)' : 'var(--color-misty)';
  const color = variant === 'primary' ? '#fff' : 'var(--color-ink)';
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: bg, color, border: 'none', borderRadius: 'var(--radius)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
      }}
    >
      {icon}
    </button>
  );
}
