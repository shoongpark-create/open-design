// Simple DS · AIChat user / assistant / code message primitives
// Matches Figma: user bubble = muted bg with 1.88px border + Roboto Mono body, assistant = plain text with icon, code block = line-numbered dark gutter.
function AIUserMessage({ text }) {
  return (
    <div style={{
      maxWidth: 480, alignSelf: 'flex-end',
      borderRadius: 'var(--r-md)',
      background: 'var(--c-bg-subtle)',
      border: '1.5px solid var(--c-border)',
      padding: '8px 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 14, lineHeight: 1.4, color: 'var(--c-fg)',
    }}>{text}</div>
  );
}

function AIAssistantMessage({ text, icon = 'message-circle' }) {
  return (
    <div style={{ display: 'flex', gap: 10, maxWidth: 560 }}>
      <Icon name={icon} size={18} style={{ flex: 'none', marginTop: 2, color: 'var(--c-brand)' }} />
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 14, lineHeight: 1.5, color: 'var(--c-fg)', flex: 1,
      }}>{text}</div>
    </div>
  );
}

function AICodeBlock({ code, language = 'ts' }) {
  const lines = code.split('\n');
  return (
    <div style={{
      display: 'flex', width: '100%', maxWidth: 800,
      borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)',
      overflow: 'hidden', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.5,
    }}>
      <div style={{
        background: 'var(--c-bg)', padding: '16px 8px', textAlign: 'right',
        color: 'var(--c-fg-3)', userSelect: 'none', minWidth: 40,
      }}>
        {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
      </div>
      <pre style={{
        flex: 1, margin: 0, padding: 16,
        background: 'var(--c-bg-subtle)', color: 'var(--c-fg)',
        whiteSpace: 'pre', overflow: 'auto',
      }}>{code}</pre>
    </div>
  );
}

Object.assign(window, { AIUserMessage, AIAssistantMessage, AICodeBlock });
