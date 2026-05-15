// Simple DS · Calendar
// Month view with header controls, prev/next, day grid. States: default, hover, active, disabled, range.
function Calendar({ value, onChange, range }) {
  const [view, setView] = React.useState(() => {
    const d = value || new Date();
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayLabels = ['Mo','Tu','We','Th','Fr','Sa','Su'];

  const first = new Date(view.year, view.month, 1);
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const startOffset = (first.getDay() + 6) % 7; // Monday = 0

  const today = new Date();
  const isToday = (d) => d === today.getDate() && view.month === today.getMonth() && view.year === today.getFullYear();
  const isSelected = (d) => value && d === value.getDate() && view.month === value.getMonth() && view.year === value.getFullYear();
  const inRange = (d) => range && range.start && range.end && (
    new Date(view.year, view.month, d) >= range.start && new Date(view.year, view.month, d) <= range.end
  );

  const step = (delta) => {
    const m = view.month + delta;
    setView({ year: view.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 });
  };

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div style={{
      width: 318, background: 'var(--c-bg)',
      border: '1px solid var(--c-border)', borderRadius: 'var(--r-lg)',
      padding: 16, fontFamily: 'var(--font-sans)',
    }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <IconButton name="chevron-left" size={32} onClick={() => step(-1)} />
        <div style={{ fontSize: 14, fontWeight: 600 }}>{monthNames[view.month]} {view.year}</div>
        <IconButton name="chevron-right" size={32} onClick={() => step(1)} />
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
        {dayLabels.map(l => (
          <div key={l} style={{ textAlign: 'center', fontSize: 12, color: 'var(--c-fg-2)', padding: '4px 0' }}>{l}</div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const selected = isSelected(d);
          const ranged = inRange(d);
          const today_ = isToday(d);
          return (
            <button
              key={i}
              onClick={() => onChange && onChange(new Date(view.year, view.month, d))}
              style={{
                aspectRatio: '1', border: 'none', cursor: 'pointer',
                background: selected ? 'var(--c-fg)' : ranged ? 'var(--c-bg-muted)' : 'transparent',
                color: selected ? 'var(--c-bg)' : 'var(--c-fg)',
                borderRadius: 'var(--r-sm)',
                fontFamily: 'var(--font-sans)', fontSize: 13,
                fontWeight: today_ ? 700 : 500,
                outline: today_ && !selected ? '1px solid var(--c-brand)' : 'none',
                outlineOffset: -2,
              }}>{d}</button>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { Calendar });
