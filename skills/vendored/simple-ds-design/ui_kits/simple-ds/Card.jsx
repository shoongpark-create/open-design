// Simple DS · Card, Avatar, Dialog
function Card({ children, padding = 24, style, interactive }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--c-bg)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-md)',
        padding,
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'box-shadow var(--dur-med) var(--ease-out), border-color var(--dur-med)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}>{children}</div>
  );
}

function Avatar({ initials, size = 32, color = 'var(--c-brand)', image }) {
  if (image) {
    return <img src={image} width={size} height={size} style={{ borderRadius: '50%', objectFit: 'cover' }} />;
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: color, color: '#fff',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-sans)', fontWeight: 600,
      fontSize: Math.max(10, Math.round(size * 0.38)),
      flex: 'none',
    }}>{initials}</div>
  );
}

function AvatarStack({ people, max = 4, size = 28 }) {
  const shown = people.slice(0, max);
  const overflow = people.length - max;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {shown.map((p, i) => (
        <div key={i} style={{ marginLeft: i ? -8 : 0, border: '2px solid var(--c-bg)', borderRadius: '50%' }}>
          <Avatar {...p} size={size} />
        </div>
      ))}
      {overflow > 0 && (
        <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--c-fg-2)' }}>+{overflow} more</span>
      )}
    </div>
  );
}

function Dialog({ open, onClose, title, children, actions }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
      }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--c-bg)', borderRadius: 'var(--r-lg)',
        padding: 32, width: 480, maxWidth: 'calc(100vw - 48px)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 600 }}>{title}</h2>
          <IconButton name="x" size={32} onClick={onClose} title="Close" />
        </div>
        <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--c-fg-2)' }}>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>{actions}</div>}
      </div>
    </div>
  );
}

Object.assign(window, { Card, Avatar, AvatarStack, Dialog });
