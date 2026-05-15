// Simple DS · Tag / Badge
function Tag({ variant = 'neutral', children, style }) {
  const variants = {
    brand:    { background: 'var(--c-brand-subtle)',   color: 'var(--c-brand)' },
    neutral:  { background: 'var(--c-bg-muted)',       color: 'var(--c-fg)' },
    positive: { background: 'var(--c-success-subtle)', color: 'var(--c-success-fg)' },
    warning:  { background: 'var(--c-warning-subtle)', color: 'var(--c-warning-fg)' },
    danger:   { background: 'var(--c-danger-subtle)',  color: 'var(--c-danger-fg)' },
    info:     { background: 'var(--c-info-subtle)',    color: 'var(--c-info-fg)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 10px', borderRadius: 'var(--r-md)',
      fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
      lineHeight: 1.4,
      ...variants[variant], ...style,
    }}>{children}</span>
  );
}

function Chip({ active, children, onClick, style }) {
  return (
    <button onClick={onClick} style={{
      padding: '6px 14px', borderRadius: 'var(--r-pill)',
      border: `1px solid ${active ? 'var(--c-fg)' : 'var(--c-border)'}`,
      background: active ? 'var(--c-fg)' : 'var(--c-bg)',
      color: active ? 'var(--c-fg-inverse)' : 'var(--c-fg)',
      fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
      cursor: 'pointer', transition: 'all var(--dur-fast) var(--ease-out)',
      ...style,
    }}>{children}</button>
  );
}

Object.assign(window, { Tag, Chip });
