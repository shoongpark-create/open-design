/** Area chart — single-series smooth area fill with dotted baseline. */
function AreaChart({ title, points, xLabels, color = 'var(--dv-1)', yMax, height = 380 }) {
  const max = yMax ?? Math.max(...points);
  const W = 1000, H = height;
  const n = points.length;
  const pathPts = points.map((p, i) => [(i / (n - 1)) * W, H - (p / max) * H]);
  const linePath = 'M ' + pathPts.map(([x, y]) => `${x},${y}`).join(' L ');
  const areaPath = linePath + ` L ${W},${H} L 0,${H} Z`;
  const id = 'grad-' + Math.random().toString(36).slice(2, 7);
  return (
    <div className="chart-card" style={{ padding: '56px 64px' }}>
      {title && <div className="chart-title">{title}</div>}
      <svg viewBox={`0 0 ${W} ${H + 30}`} style={{ width: '100%', marginTop: title ? 24 : 0 }}>
        <defs>
          <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.55" />
            <stop offset="1" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${id})`} />
        <path d={linePath} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {xLabels.map((l, i) => (
          <text key={i} x={(i / (n - 1)) * W} y={H + 22} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="16" fill="var(--c-fg-2)">{l}</text>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { AreaChart });
