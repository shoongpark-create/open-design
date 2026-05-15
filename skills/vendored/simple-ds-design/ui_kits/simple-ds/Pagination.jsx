// Simple DS · Pagination
function Pagination({ page, total, onChange }) {
  const go = (p) => p >= 1 && p <= total && onChange && onChange(p);

  // Build the list of page numbers with "..." gaps, similar to the Figma PaginationGap pattern.
  const pages = [];
  const push = (v) => pages.push(v);
  if (total <= 7) {
    for (let i = 1; i <= total; i++) push(i);
  } else {
    push(1);
    if (page > 3) push('…');
    const start = Math.max(2, page - 1);
    const end = Math.min(total - 1, page + 1);
    for (let i = start; i <= end; i++) push(i);
    if (page < total - 2) push('…');
    push(total);
  }

  const btn = (label, { active, disabled, onClick, wide } = {}) => (
    <button
      onClick={onClick} disabled={disabled}
      style={{
        minWidth: wide ? 'auto' : 32, height: 32,
        padding: wide ? '0 12px' : 0,
        background: active ? 'var(--c-fg)' : 'transparent',
        color: active ? 'var(--c-bg)' : disabled ? 'var(--c-fg-3)' : 'var(--c-fg)',
        border: '1px solid ' + (active ? 'var(--c-fg)' : 'var(--c-border)'),
        borderRadius: 'var(--r-sm)',
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
        opacity: disabled ? 0.5 : 1,
      }}>{label}</button>
  );

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {btn(<><Icon name="chevron-left" size={14}/>Prev</>, { wide: true, disabled: page === 1, onClick: () => go(page - 1) })}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 4px' }}>
        {pages.map((p, i) => p === '…'
          ? <span key={i} style={{ color: 'var(--c-fg-3)', padding: '0 4px' }}>…</span>
          : btn(p, { key: i, active: p === page, onClick: () => go(p) })
        )}
      </div>
      {btn(<>Next<Icon name="chevron-right" size={14}/></>, { wide: true, disabled: page === total, onClick: () => go(page + 1) })}
    </nav>
  );
}

Object.assign(window, { Pagination });
