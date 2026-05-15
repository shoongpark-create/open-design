// Simple DS · Tooltip
// Placements: top | right | bottom | left. White card + beak with border, matches Figma.
function Tooltip({ children, label, description, placement = 'top' }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  const pos = {
    top:    { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' },
    left:   { right: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' },
    right:  { left: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' },
  }[placement];

  const beakPos = {
    top:    { bottom: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    bottom: { top: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)' },
    left:   { right: -5, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
    right:  { left: -5, top: '50%', transform: 'translateY(-50%) rotate(45deg)' },
  }[placement];

  return (
    <span
      ref={ref}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      {children}
      {visible && (
        <span style={{
          position: 'absolute', ...pos, zIndex: 50,
          background: 'var(--c-bg)', border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-md)', padding: '8px 12px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex', flexDirection: 'column', gap: 2,
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)',
        }}>
          <span style={{
            position: 'absolute', ...beakPos, width: 8, height: 8,
            background: 'var(--c-bg)',
            borderRight: '1px solid var(--c-border)',
            borderBottom: '1px solid var(--c-border)',
          }} />
          <span style={{ fontSize: 12, color: 'var(--c-fg-2)' }}>{label}</span>
          {description && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--c-fg)' }}>{description}</span>}
        </span>
      )}
    </span>
  );
}

Object.assign(window, { Tooltip });
