# Simple DS — UI Kit

Interactive demo of the Simple Design System applied to a generic workspace app.
Open `index.html` to play with it. Components:

- `Button.jsx` — Button (primary/neutral/subtle/danger/ghost, sm/md) + IconButton + Icon helper
- `Tag.jsx` — Tag (brand/neutral/positive/warning/danger/info) + Chip (pill toggle)
- `Input.jsx` — Input + Textarea, with label/error/focus states
- `Card.jsx` — Card + Avatar + AvatarStack + Dialog
- `Nav.jsx` — Topbar + Sidebar + Tabs
- `AIChat.jsx` — message list + composer with fake Claude replies

All components load globals onto `window` so sibling script files can share them.
Icons are read from `../../assets/icons/*.svg`.
