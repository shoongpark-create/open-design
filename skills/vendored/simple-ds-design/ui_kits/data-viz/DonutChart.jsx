/** Donut chart — ring with inner "Legend" label and floating pct pills around.
 *  Source: /Data-Viz-Kit/Donut-chart-1 (node 79:782) */
function DonutChart({ title, segments, colors, size = 360 }) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  const R = size / 2, r = R * 0.58;
  let angle = -Math.PI / 2;
  const arcs = segments.map((s, i) => {
    const start = angle;
    const sweep = (s.value / total) * Math.PI * 2;
    angle += sweep;
    const mid = start + sweep / 2;
    const labelR = R + 16;
    const lx = R + Math.cos(mid) * labelR;
    const ly = R + Math.sin(mid) * labelR;
    const x1 = R + Math.cos(start) * R, y1 = R + Math.sin(start) * R;
    const x2 = R + Math.cos(start + sweep) * R, y2 = R + Math.sin(start + sweep) * R;
    const ix1 = R + Math.cos(start) * r, iy1 = R + Math.sin(start) * r;
    const ix2 = R + Math.cos(start + sweep) * r, iy2 = R + Math.sin(start + sweep) * r;
    const large = sweep > Math.PI ? 1 : 0;
    const d = `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${r} ${r} 0 ${large} 0 ${ix1} ${iy1} Z`;
    return { d, color: colors[i % colors.length], lx, ly, label: s.label, pct: (s.value / total * 100).toFixed(1) };
  });
  return (
    <div className="chart-card" style={{ padding: '56px 64px', border: '4px solid var(--border-strong)' }}>
      {title && <div className="chart-title">{title}</div>}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: title ? 24 : 0 }}>
        <svg viewBox={`-80 -20 ${size + 160} ${size + 60}`} style={{ width: size + 160, maxWidth: '100%' }}>
          {arcs.map((a, i) => <path key={i} d={a.d} fill={a.color} />)}
          <text x={R} y={R + 6} textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="700" fontSize="22" fill="var(--fg-black)">Legend</text>
          {arcs.map((a, i) => (
            <g key={'l' + i}>
              <text x={a.lx} y={a.ly - 6} textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="500" fontSize="14" fill={a.color}>{a.label}</text>
              <rect x={a.lx - 28} y={a.ly + 2} width="56" height="22" rx="5" fill={a.color} />
              <text x={a.lx} y={a.ly + 18} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="14" fill="#fff">{a.pct}%</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

Object.assign(window, { DonutChart });
