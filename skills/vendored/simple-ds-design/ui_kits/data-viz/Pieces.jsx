/** Horizontal stacked bar — label on left, segments across, values inside. */
function StackedBar({ rows, colors, labels }) {
  return (
    <div className="chart-card" style={{ padding: '40px 48px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {rows.map((row, ri) => {
          const total = row.values.reduce((a, b) => a + b, 0);
          return (
            <div key={ri} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ width: 80, fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--fg-ink)' }}>{row.label}</div>
              <div style={{ flex: 1, display: 'flex', height: 44 }}>
                {row.values.map((v, vi) => (
                  <div key={vi} style={{ width: `${(v / total) * 100}%`, backgroundColor: colors[vi % colors.length], display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 14, color: '#fff' }}>{v}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Legend colors={colors} labels={labels} />
    </div>
  );
}

/** Percent pill — tiny chip used above a bar or beside a donut slice. */
function PercentChip({ label, value, color = 'var(--dv-3)' }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 2, width: 80 }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, color }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#fff', backgroundColor: color, borderRadius: 5, padding: '4px 6px', textAlign: 'center' }}>{value}</span>
    </div>
  );
}

/** Metric card — big number + label + optional delta. */
function Metric({ value, label, delta, deltaPositive }) {
  return (
    <div style={{ padding: 28, borderRadius: 24, background: 'var(--c-bg)', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 180 }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--c-fg-2)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 42, color: 'var(--c-fg)', lineHeight: 1 }}>{value}</div>
      {delta && (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: deltaPositive ? 'var(--success)' : 'var(--danger)' }}>
          {deltaPositive ? '▲' : '▼'} {delta}
        </div>
      )}
    </div>
  );
}

/** Badge — rounded bold pill used on cover & section markers. */
function Badge({ children, filled }) {
  const style = filled
    ? { background: 'var(--c-fg)', color: '#fff', border: '2.5px solid var(--c-fg)' }
    : { background: '#fff', color: 'var(--c-fg)', border: '2.5px solid var(--c-fg)' };
  return <span style={{ ...style, borderRadius: 14, padding: '8px 20px', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18 }}>{children}</span>;
}

Object.assign(window, { StackedBar, PercentChip, Metric, Badge });
