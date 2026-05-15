// Simple DS · Sheet (full-width modal variant, flush edges, matches Figma Type=Sheet)
function Sheet({ open, onClose, title, children, actions }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)',
      display: 'flex', justifyContent: 'flex-end', zIndex: 100,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 466, height: '100%', background: 'var(--c-bg)',
        borderLeft: '1px solid var(--c-border)',
        padding: 32, display: 'flex', flexDirection: 'column', gap: 24,
        fontFamily: 'var(--font-sans)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h2>
          </div>
          <IconButton name="x" size={36} onClick={onClose} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', fontSize: 15, lineHeight: 1.5, color: 'var(--c-fg)' }}>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>{actions}</div>}
      </div>
    </div>
  );
}

Object.assign(window, { Sheet });
