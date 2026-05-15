// Simple DS · AI Chat (expanded)
// Uses AIUserMessage / AIAssistantMessage / AICodeBlock primitives from AIMessages.jsx to match Figma.
// Includes an AISidebar with search + chat history, and a markdown-ish renderer that splits code fences out.

function AISidebar({ chats, activeId, onSelect, onNewChat, user }) {
  const [q, setQ] = React.useState('');
  const filtered = q ? chats.filter(c => c.title.toLowerCase().includes(q.toLowerCase())) : chats;
  return (
    <aside style={{
      width: 320, background: 'var(--c-bg-subtle)',
      borderRight: '1px solid var(--c-border)',
      display: 'flex', flexDirection: 'column',
      padding: 16, fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <Icon name="message-circle" size={20} />
        <div style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>Chats</div>
        <IconButton name="plus" size={28} onClick={onNewChat} title="New chat" />
      </div>
      <Input placeholder="Search chats" value={q} onChange={setQ} leftIcon="search" style={{ marginBottom: 16 }} />
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--c-fg-2)', marginBottom: 8, letterSpacing: '0.04em' }}>RECENT</div>
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map(c => (
          <button key={c.id} onClick={() => onSelect(c.id)} style={{
            textAlign: 'left', padding: '10px 12px', borderRadius: 'var(--r-md)',
            border: '1px solid ' + (activeId === c.id ? 'var(--c-border)' : 'transparent'),
            background: activeId === c.id ? 'var(--c-bg)' : 'transparent',
            cursor: 'pointer', fontFamily: 'var(--font-sans)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--c-fg)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
            <div style={{ fontSize: 12, color: 'var(--c-fg-2)', marginTop: 2 }}>{c.time}</div>
          </button>
        ))}
      </div>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--c-border-muted)' }}>
          <Avatar initials={user.initials} size={28} color="var(--c-fg)" />
          <span style={{ fontSize: 14, fontWeight: 600 }}>{user.email}</span>
        </div>
      )}
    </aside>
  );
}

function AIChat({ messages, onSend, sidebar = false, chats, activeChatId, onSelectChat, onNewChat, user }) {
  const [draft, setDraft] = React.useState('');
  const scroller = React.useRef(null);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [messages]);

  const submit = () => {
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft('');
  };

  const body = (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      background: 'var(--c-bg)', borderRadius: sidebar ? 0 : 'var(--r-lg)',
      border: sidebar ? 'none' : '1px solid var(--c-border-muted)',
      minHeight: 0,
    }}>
      <div ref={scroller} style={{
        flex: 1, overflowY: 'auto', padding: 24,
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        {messages.map((m, i) => <ChatMessageRich key={i} msg={m} />)}
      </div>
      <div style={{ padding: 16, borderTop: '1px solid var(--c-border-muted)' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', gap: 8,
          border: '1px solid var(--c-border)', borderRadius: 'var(--r-lg)',
          padding: '10px 12px', background: 'var(--c-bg)',
        }}>
          <textarea
            value={draft} onChange={e => setDraft(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }}
            placeholder="Ask anything…" rows={1}
            style={{
              flex: 1, border: 'none', outline: 'none', resize: 'none',
              fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px',
              color: 'var(--c-fg)', background: 'transparent',
              minHeight: 20, maxHeight: 120,
            }}
          />
          <Button variant="primary" size="sm" onClick={submit} rightIcon="arrow-right">Send</Button>
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: 'var(--c-fg-2)', textAlign: 'center' }}>
          Responses may contain mistakes. Verify anything important.
        </div>
      </div>
    </div>
  );

  if (!sidebar) return body;
  return (
    <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
      <AISidebar chats={chats || []} activeId={activeChatId} onSelect={onSelectChat} onNewChat={onNewChat} user={user} />
      {body}
    </div>
  );
}

// Split an assistant message into prose/code segments.
function splitCode(text) {
  const segs = [];
  const re = /```(\w+)?\n([\s\S]*?)```/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) segs.push({ type: 'text', value: text.slice(last, m.index) });
    segs.push({ type: 'code', lang: m[1] || 'txt', value: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segs.push({ type: 'text', value: text.slice(last) });
  return segs;
}

function ChatMessageRich({ msg }) {
  if (msg.role === 'user') {
    return <AIUserMessage text={msg.text} />;
  }
  const segs = splitCode(msg.text);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {segs.map((s, i) => s.type === 'code'
        ? <AICodeBlock key={i} code={s.value} language={s.lang} />
        : <AIAssistantMessage key={i} text={s.value} />
      )}
    </div>
  );
}

Object.assign(window, { AIChat, AISidebar });
