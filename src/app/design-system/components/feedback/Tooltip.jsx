export function Tooltip({ label, children, position = 'top' }) {
  const [open, setOpen] = React.useState(false);
  const posStyle = position === 'top'
    ? { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 }
    : { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open && (
        <span style={{
          position: 'absolute', ...posStyle, background: 'var(--color-ink)', color: 'var(--color-baby)',
          fontFamily: 'var(--font-text)', fontSize: 12, padding: '5px 8px', borderRadius: 'var(--radius)',
          whiteSpace: 'nowrap', zIndex: 10,
        }}>{label}</span>
      )}
    </span>
  );
}
