// Simple DS · Input
function Input({ label, value, onChange, placeholder, type = 'text', error, hint, leftIcon, style }) {
  const [focus, setFocus] = React.useState(false);
  const border = error ? 'var(--c-danger)' : focus ? 'var(--c-brand)' : 'var(--c-border)';
  const ring = focus && !error ? '0 0 0 3px rgba(138,34,111,0.20)' : 'none';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
          color: error ? 'var(--c-danger-fg)' : 'var(--c-fg-2)',
          letterSpacing: '0.02em', textTransform: 'uppercase',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        border: `1px solid ${border}`, borderRadius: 'var(--r-md)',
        background: 'var(--c-bg)', padding: '10px 12px',
        boxShadow: ring,
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {leftIcon && <Icon name={leftIcon} size={16} style={{ opacity: 0.6 }} />}
        <input
          type={type} value={value} placeholder={placeholder}
          onChange={e => onChange && onChange(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px',
            color: 'var(--c-fg)', flex: 1, width: '100%',
          }}
        />
      </div>
      {(error || hint) && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.4,
          color: error ? 'var(--c-danger-fg)' : 'var(--c-fg-2)',
        }}>{error || hint}</div>
      )}
    </div>
  );
}

function Textarea({ label, value, onChange, placeholder, rows = 4, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
          color: 'var(--c-fg-2)', letterSpacing: '0.02em', textTransform: 'uppercase',
        }}>{label}</label>
      )}
      <textarea
        value={value} placeholder={placeholder} rows={rows}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          border: `1px solid ${focus ? 'var(--c-brand)' : 'var(--c-border)'}`,
          borderRadius: 'var(--r-md)', background: 'var(--c-bg)',
          padding: '10px 12px', fontFamily: 'var(--font-sans)', fontSize: 14,
          lineHeight: '20px', color: 'var(--c-fg)', resize: 'vertical',
          outline: 'none', boxShadow: focus ? '0 0 0 3px rgba(138,34,111,0.20)' : 'none',
        }}
      />
    </div>
  );
}

Object.assign(window, { Input, Textarea });
