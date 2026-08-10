export function Tabs({ tabs = [], activeId, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 2, fontFamily: 'var(--font-text)', borderBottom: '1px solid var(--color-misty)' }}>
      {tabs.map((t) => {
        const active = t.id === activeId;
        return (
          <button
            key={t.id}
            onClick={() => onChange && onChange(t.id)}
            style={{
              font: 'inherit', fontSize: 14, fontWeight: active ? 600 : 400, padding: '10px 16px',
              background: 'none', border: 'none', borderBottom: active ? '2px solid var(--color-cobalt)' : '2px solid transparent',
              color: active ? 'var(--color-ink)' : 'var(--color-ink)', opacity: active ? 1 : 0.6, cursor: 'pointer', marginBottom: -1,
            }}
          >{t.label}</button>
        );
      })}
    </div>
  );
}
