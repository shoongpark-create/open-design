// Simple DS · Menu (dropdown)
// Heading → Separator → MenuItem rows with optional icon, description, shortcut.
function Menu({ heading, items, footer, style }) {
  return (
    <div style={{
      background: 'var(--c-bg)',
      border: '1px solid var(--c-border)',
      borderRadius: 'var(--r-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      minWidth: 260,
      fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      {heading && (
        <>
          <div style={{ padding: '8px 16px 4px 16px' }}>
            <div style={{ fontSize: 12, color: 'var(--c-fg-2)' }}>{heading.overline}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--c-fg)' }}>{heading.title}</div>
          </div>
          <Separator />
        </>
      )}
      <div>
        {items.map((it, i) => (
          it === 'separator'
            ? <Separator key={i} />
            : <MenuItem key={i} {...it} />
        ))}
      </div>
      {footer && <>
        <Separator />
        <div style={{ padding: '6px 10px', fontSize: 12, color: 'var(--c-fg-2)' }}>{footer}</div>
      </>}
    </div>
  );
}

function MenuItem({ icon, label, description, shortcut, onClick, disabled, destructive }) {
  const [hover, setHover] = React.useState(false);
  const color = destructive ? 'var(--c-danger-fg)' : disabled ? 'var(--c-fg-3)' : 'var(--c-fg)';
  return (
    <button
      onClick={() => !disabled && onClick && onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        width: '100%', textAlign: 'left', background: hover && !disabled ? 'var(--c-bg-muted)' : 'transparent',
        border: 'none', borderRadius: 'var(--r-sm)',
        padding: '10px 12px',
        display: 'flex', alignItems: 'center', gap: 12,
        cursor: disabled ? 'not-allowed' : 'pointer',
        color,
        fontFamily: 'var(--font-sans)',
        transition: 'background var(--dur-fast)',
        opacity: disabled ? 0.6 : 1,
      }}>
      {icon && <Icon name={icon} size={18} style={{ flex: 'none' }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{label}</div>
        {description && <div style={{ fontSize: 12, color: 'var(--c-fg-2)', marginTop: 2 }}>{description}</div>}
      </div>
      {shortcut && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--c-fg-2)', background: 'var(--c-bg-muted)',
          padding: '2px 6px', borderRadius: 'var(--r-xs)',
        }}>{shortcut}</span>
      )}
    </button>
  );
}

function Separator() {
  return <hr style={{ margin: '6px 0', border: 'none', borderTop: '1px solid var(--c-border-muted)' }} />;
}

Object.assign(window, { Menu, MenuItem });
