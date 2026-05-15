/** Line chart — multi-series paths with terminal value labels.
 *  Source: /Data-Viz-Kit/Line-chart-1 (node 79:334) */
function LineChart({ title, series, colors, xLabels, yMax, height = 480 }) {
  const max = yMax ?? Math.max(...series.flatMap(s => s.points));
  const ticks = [...Array(10).keys()].map(i => Math.round((max / 10) * (10 - i)));
  const W = 1000, H = height;
  return (
    <div className="chart-card" style={{ padding: '56px 64px', border: '4px solid var(--dv-7)' }}>
      {title && <div className="chart-title">{title}</div>}
      <div style={{ display: 'flex', gap: 16, marginTop: title ? 24 : 0 }}>
        <div style={{ width: 56, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'rotate(-90deg) translateX(50%)', transformOrigin: '0 0', whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--c-fg-2)' }}>Units of Measure</div>
          <div style={{ height: H, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingLeft: 28, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--c-fg-2)' }}>
            {ticks.map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: H, overflow: 'visible' }}>
            {series.map((s, si) => {
              const n = s.points.length;
              const pts = s.points.map((p, i) => `${(i / (n - 1)) * W},${H - (p / max) * H}`).join(' ');
              return (
                <g key={si}>
                  <polyline points={pts} fill="none" stroke={colors[si % colors.length]} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  {s.endLabel != null && (
                    <text x={W + 8} y={H - (s.points[n - 1] / max) * H + 6}
                      fontFamily="var(--font-sans)" fontSize="18" fill={colors[si % colors.length]}>{s.endLabel}</text>
                  )}
                </g>
              );
            })}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--c-fg-2)' }}>
            {xLabels.map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </div>
      </div>
      <Legend colors={colors} labels={series.map(s => s.label)} />
    </div>
  );
}

Object.assign(window, { LineChart });
