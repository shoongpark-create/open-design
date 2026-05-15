#!/usr/bin/env bash
# Open Design — one-shot setup for team members
#
# Run once after `git clone`. Materialises ~/.claude/skills/ and
# ~/.codex/skills/ symlinks so Claude Code and Codex CLI discover every
# skill in this repo. Idempotent — safe to re-run after a `git pull`.
#
# Mac / Linux: symlinks. Windows: use setup.ps1 instead.

set -euo pipefail

# Resolve repo root regardless of CWD.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$SCRIPT_DIR"
SKILLS_ROOT="$REPO_ROOT/skills"

if [ ! -d "$SKILLS_ROOT" ]; then
  echo "✗ skills/ not found under $REPO_ROOT — did the clone finish?" >&2
  exit 1
fi

CLAUDE_MOUNT="${HOME}/.claude/skills"
CODEX_MOUNT="${HOME}/.codex/skills"

mkdir -p "$CLAUDE_MOUNT" "$CODEX_MOUNT"

# Categories to expose. _archive and _shared are excluded from auto-mount —
# _shared/imagegen.md is referenced relatively from fashion skills, and
# _archive holds the pre-migration English originals.
CATEGORIES=(fashion marketing data vendored)

added=0; refreshed=0; skipped=0

link_one() {
  local src="$1"
  local target_dir="$2"
  local name; name="$(basename "$src")"
  local dest="$target_dir/$name"

  # Skip well-known internals.
  case "$name" in
    _shared|_archive) return 0 ;;
  esac

  if [ -L "$dest" ]; then
    ln -snf "$src" "$dest"
    refreshed=$((refreshed + 1))
  elif [ -e "$dest" ]; then
    # Pre-existing real folder — don't overwrite (Claude Code's own vendored
    # skills like docx/, pdf/ may already live here for unrelated reasons).
    skipped=$((skipped + 1))
  else
    ln -s "$src" "$dest"
    added=$((added + 1))
  fi
}

# impeccable lives at skills/impeccable (single skill, not a category).
if [ -d "$SKILLS_ROOT/impeccable" ]; then
  link_one "$SKILLS_ROOT/impeccable" "$CLAUDE_MOUNT"
  link_one "$SKILLS_ROOT/impeccable" "$CODEX_MOUNT"
fi

for cat in "${CATEGORIES[@]}"; do
  cat_dir="$SKILLS_ROOT/$cat"
  [ -d "$cat_dir" ] || { echo "  (skip) $cat — directory missing"; continue; }

  for skill in "$cat_dir"/*/; do
    [ -d "$skill" ] || continue
    skill="${skill%/}"   # strip trailing slash
    link_one "$skill" "$CLAUDE_MOUNT"
    link_one "$skill" "$CODEX_MOUNT"
  done
done

echo
echo "Open Design setup complete."
echo "  Added new symlinks    : $added"
echo "  Refreshed existing    : $refreshed"
echo "  Skipped (real folder) : $skipped"
echo
echo "Mounts:"
echo "  $CLAUDE_MOUNT"
echo "  $CODEX_MOUNT"
echo

# Optional: install deps + start the daemon. Off by default; opt in with
# `./setup.sh --start` to run the full local engine after linking.
if [ "${1:-}" = "--start" ]; then
  if ! command -v pnpm >/dev/null 2>&1; then
    echo "✗ pnpm not found. Install Node ~24 + pnpm >=10.33.2, then re-run with --start." >&2
    exit 1
  fi
  echo "Installing deps and starting daemon…"
  (cd "$REPO_ROOT" && pnpm install && pnpm tools-dev)
fi
