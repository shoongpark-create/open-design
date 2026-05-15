// Simple DS · Accordion
// Closed/open states mirror the Figma variants: closed uses muted bg, open uses white bg + body.
function Accordion({ items, defaultOpen = [], style }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = (i) => {
    const next = new Set(open);
    next.has(i) ? next.delete(i) : next.add(i);
    setOpen(next);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{
            background: isOpen ? 'var(--c-bg)' : 'var(--c-bg-subtle)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--r-md)',
            overflow: 'hidden',
            transition: 'background var(--dur-fast)',
          }}>
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%', background: 'transparent', border: 'none',
                padding: '14px 16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 15,
                color: 'var(--c-fg)', textAlign: 'left',
              }}>
              <span>{it.title}</span>
              <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={18} />
            </button>
            {isOpen && (
              <div style={{
                padding: '0 16px 16px 16px',
                fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.5,
                color: 'var(--c-fg)',
              }}>{it.body}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { Accordion });
