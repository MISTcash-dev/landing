export function Button({ variant = 'primary', surface = 'light', size = 'md', disabled = false, iconLeft = null, iconRight = null, children, onClick, type = 'button' }) {
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '14px 24px' : '11px 20px';
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 17 : 15;
  let bg, color;
  if (surface === 'dark') {
    bg = variant === 'primary' ? 'var(--color-baby)' : 'var(--color-misty)';
    color = 'var(--color-ink)';
  } else {
    bg = variant === 'primary' ? 'var(--color-cobalt)' : 'var(--color-misty)';
    color = variant === 'primary' ? '#fff' : 'var(--color-ink)';
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-text)',
        fontWeight: 600,
        fontSize,
        padding: pad,
        background: bg,
        color,
        border: 'none',
        borderRadius: 'var(--radius)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
