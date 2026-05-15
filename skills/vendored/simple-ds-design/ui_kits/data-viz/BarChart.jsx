/** Bar chart — vertical stacked groups, flat fills, white inline numbers.
 *  Source: /Data-Viz-Kit/Bar-chart-1 (node 1:2582) */
function BarChart({ title, data, colors, yLabel = 'Units of Measure', height = 480 }) {
  const max = Math.max(...data.flatMap(g => g.values));
  return (
    <div className="chart-card" style={{ padding: '56px 64px' }}>
      {title && <div className="chart-title">{title}</div>}
      <div style={{ display: 'flex', gap: 24, marginTop: title ? 24 : 0 }}>
        <div style={{ width: 40, position: 'relative', borderRight: '1px solid var(--c-border-muted)' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'rotate(-90deg) translateX(50%)', transformOrigin: '0 0', whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--c-fg-2)' }}>{yLabel}</div>
        </div>
        <div style={{ flex: 1, display: 'flex', gap: 32, alignItems: 'flex-end', height }}>
          {data.map((group, gi) => (
            <div key={gi} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', height: height - 30 }}>
                {group.values.map((v, vi) => (
                  <div key={vi} style={{
                    width: 48, height: `${(v / max) * 100}%`, backgroundColor: colors[vi % colors.length],
                    display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start',
                    padding: '8px 6px', transition: 'transform 220ms var(--ease-out)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#fff' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--fg-ink)' }}>{group.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Legend colors={colors} labels={data[0].seriesLabels || colors.map((_, i) => `Series ${i + 1}`)} />
    </div>
  );
}

function Legend({ colors, labels }) {
  return (
    <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
      {labels.map((l, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, color: 'var(--c-fg-2)' }}>
          <span style={{ width: 18, height: 18, borderRadius: 3, backgroundColor: colors[i % colors.length] }} />
          {l}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { BarChart, Legend });
