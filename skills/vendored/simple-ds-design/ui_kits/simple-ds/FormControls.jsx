// Simple DS · Form controls: Checkbox, Radio, Switch, Select
function Checkbox({ checked, onChange, label, description, disabled }) {
  return (
    <label style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: 4,
        border: '1.5px solid ' + (checked ? 'var(--c-fg)' : 'var(--c-border)'),
        background: checked ? 'var(--c-fg)' : 'var(--c-bg)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flex: 'none', marginTop: 1,
        transition: 'all var(--dur-fast)',
      }}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.5L4.75 8.75L9.5 3.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={e => onChange && onChange(e.target.checked)}
        disabled={disabled} style={{ display: 'none' }} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--c-fg)' }}>{label}</div>
        {description && <div style={{ fontSize: 13, color: 'var(--c-fg-2)', marginTop: 2 }}>{description}</div>}
      </div>
    </label>
  );
}

function Radio({ checked, onChange, label, description, name, value, disabled }) {
  return (
    <label style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)',
    }}>
      <span style={{
        width: 18, height: 18, borderRadius: '50%',
        border: '1.5px solid ' + (checked ? 'var(--c-fg)' : 'var(--c-border)'),
        background: 'var(--c-bg)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flex: 'none', marginTop: 1, transition: 'all var(--dur-fast)',
      }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--c-fg)' }} />}
      </span>
      <input type="radio" name={name} value={value} checked={checked}
        onChange={e => onChange && onChange(e.target.value)} disabled={disabled} style={{ display: 'none' }} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--c-fg)' }}>{label}</div>
        {description && <div style={{ fontSize: 13, color: 'var(--c-fg-2)', marginTop: 2 }}>{description}</div>}
      </div>
    </label>
  );
}

function Switch({ checked, onChange, label, disabled }) {
  return (
    <label style={{
      display: 'inline-flex', gap: 10, alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
    }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 36, height: 20, borderRadius: 10,
          background: checked ? 'var(--c-fg)' : 'var(--c-border)',
          position: 'relative', transition: 'background var(--dur-med)',
          display: 'inline-block', flex: 'none',
        }}>
        <span style={{
          position: 'absolute', top: 2, left: checked ? 18 : 2,
          width: 16, height: 16, borderRadius: '50%',
          background: '#fff', transition: 'left var(--dur-med) var(--ease-out)',
          boxShadow: '0 1px 2px rgba(0,0,0,.15)',
        }} />
      </span>
      {label && <span style={{ fontSize: 14, color: 'var(--c-fg)' }}>{label}</span>}
    </label>
  );
}

function Select({ label, value, onChange, options, placeholder = 'Select…', style }) {
  const [open, setOpen] = React.useState(false);
  const current = options.find(o => o.value === value);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', ...style }}>
      {label && (
        <label style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500,
          color: 'var(--c-fg-2)', letterSpacing: '0.02em', textTransform: 'uppercase',
        }}>{label}</label>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          border: `1px solid ${open ? 'var(--c-brand)' : 'var(--c-border)'}`,
          borderRadius: 'var(--r-md)', background: 'var(--c-bg)', padding: '10px 12px',
          fontFamily: 'var(--font-sans)', fontSize: 14,
          color: current ? 'var(--c-fg)' : 'var(--c-fg-3)', cursor: 'pointer',
          boxShadow: open ? '0 0 0 3px rgba(138,34,111,0.20)' : 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}>
        <span>{current ? current.label : placeholder}</span>
        <Icon name="chevron-down" size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast)' }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 20,
          background: 'var(--c-bg)', border: '1px solid var(--c-border)',
          borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)',
          padding: 4, maxHeight: 260, overflow: 'auto',
        }}>
          {options.map(o => (
            <button key={o.value} onClick={() => { onChange(o.value); setOpen(false); }}
              style={{
                width: '100%', textAlign: 'left', padding: '8px 10px',
                background: o.value === value ? 'var(--c-bg-muted)' : 'transparent',
                border: 'none', borderRadius: 'var(--r-sm)',
                fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--c-fg)',
                cursor: 'pointer',
              }}>{o.label}</button>
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Checkbox, Radio, Switch, Select });
