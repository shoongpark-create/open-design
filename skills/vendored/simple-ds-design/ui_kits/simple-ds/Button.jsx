// Simple DS · Button
// Variants: primary | neutral | subtle | danger | ghost
// Sizes: sm | md
// Exports Button, IconButton to window for cross-script sharing.

function Button({ variant = 'neutral', size = 'md', children, leftIcon, rightIcon, disabled, onClick, style }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)', fontWeight: 600,
    fontSize: size === 'sm' ? 13 : 14,
    padding: size === 'sm' ? '8px 12px' : '10px 16px',
    borderRadius: 'var(--r-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };
  const variants = {
    primary: { background: 'var(--c-brand)', color: 'var(--c-brand-fg)' },
    neutral: { background: 'var(--c-bg)', color: 'var(--c-fg)', borderColor: 'var(--c-border)' },
    subtle:  { background: 'var(--c-bg-muted)', color: 'var(--c-fg)' },
    danger:  { background: 'var(--c-danger)', color: '#fff' },
    ghost:   { background: 'transparent', color: 'var(--c-fg)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = {
    primary: { background: 'var(--c-brand-hover)' },
    neutral: { background: 'var(--c-bg-muted)' },
    subtle:  { background: 'rgb(235,235,235)' },
    danger:  { background: 'rgb(200,25,22)' },
    ghost:   { background: 'var(--c-bg-muted)' },
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...(hover && !disabled ? hoverStyle[variant] : {}), ...style }}
    >
      {leftIcon && <Icon name={leftIcon} size={16} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={16} />}
    </button>
  );
}

function IconButton({ name, size = 36, onClick, variant = 'neutral', title }) {
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'primary' ? 'var(--c-brand)' : hover ? 'var(--c-bg-muted)' : 'transparent';
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size,
        background: bg, border: 'none', borderRadius: 'var(--r-md)', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: variant === 'primary' ? '#fff' : 'var(--c-fg)',
      }}
    >
      <Icon name={name} size={Math.round(size * 0.55)} />
    </button>
  );
}

function Icon({ name, size = 16, style }) {
  const raw = (window.__ICONS || {})[name];
  if (!raw) {
    return <span style={{ display: 'inline-block', width: size, height: size, ...style }} />;
  }
  // The source SVGs have paths that extend beyond their stated viewBox (strokes reach 12.566 on a 12×12 viewBox).
  // Expand viewBox to -1 -1 14 14 so the whole glyph is visible, and set stroke-based rendering.
  const fixed = raw
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/viewBox="0 0 (\d+) (\d+)"/, (_, w, h) => `viewBox="-1 -1 ${+w + 2} ${+h + 2}"`);
  return <span style={{ display: 'inline-flex', color: 'currentColor', ...style }} dangerouslySetInnerHTML={{ __html: fixed }} />;
}

Object.assign(window, { Button, IconButton, Icon });
