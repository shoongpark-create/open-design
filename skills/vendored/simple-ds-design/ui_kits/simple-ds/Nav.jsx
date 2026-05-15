// Simple DS · Nav + Sidebar + Tabs
function Topbar({ title, actions }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 24px', borderBottom: '1px solid var(--c-border-muted)',
      background: 'var(--c-bg)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 'var(--r-md)',
          background: 'var(--c-fg)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'var(--font-sans)',
        }}>S</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600 }}>{title}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {actions}
      </div>
    </header>
  );
}

function Sidebar({ items, active, onSelect }) {
  return (
    <aside style={{
      width: 240, background: 'var(--c-bg-subtle)',
      borderRight: '1px solid var(--c-border-muted)',
      padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 2,
    }}>
      {items.map(it => (
        <SidebarItem key={it.id} item={it} active={active === it.id} onClick={() => onSelect(it.id)} />
      ))}
    </aside>
  );
}

function SidebarItem({ item, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 12px', borderRadius: 'var(--r-md)',
        background: active ? 'var(--c-bg)' : hover ? 'rgba(0,0,0,0.03)' : 'transparent',
        border: active ? '1px solid var(--c-border)' : '1px solid transparent',
        color: active ? 'var(--c-fg)' : 'var(--c-fg-2)',
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: active ? 600 : 500,
        cursor: 'pointer', textAlign: 'left', width: '100%',
        transition: 'background var(--dur-fast), color var(--dur-fast)',
      }}>
      <Icon name={item.icon} size={16} />
      <span style={{ flex: 1 }}>{item.label}</span>
      {item.count && (
        <span style={{
          background: 'var(--c-bg-muted)', color: 'var(--c-fg-2)',
          padding: '1px 8px', borderRadius: 'var(--r-pill)',
          fontSize: 11, fontWeight: 600,
        }}>{item.count}</span>
      )}
    </button>
  );
}

function Tabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--c-border-muted)' }}>
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          style={{
            padding: '10px 14px',
            background: 'transparent', border: 'none',
            borderBottom: `2px solid ${active === t.id ? 'var(--c-fg)' : 'transparent'}`,
            color: active === t.id ? 'var(--c-fg)' : 'var(--c-fg-2)',
            fontFamily: 'var(--font-sans)', fontSize: 14,
            fontWeight: active === t.id ? 600 : 500,
            cursor: 'pointer', marginBottom: -1,
          }}>{t.label}</button>
      ))}
    </div>
  );
}

Object.assign(window, { Topbar, Sidebar, Tabs });
