#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
media_dir="$project_dir/local-media"
rclone_bin="${RCLONE_BIN:-rclone}"

if ! command -v "$rclone_bin" >/dev/null 2>&1; then
  local_rclone="/Users/paulosilva/.local/bin/rclone"

  if [[ -x "$local_rclone" ]]; then
    rclone_bin="$local_rclone"
  else
    echo "rclone was not found. Install it or set RCLONE_BIN." >&2
    exit 1
  fi
fi

if [[ ! -d "$media_dir" ]]; then
  echo "local-media directory was not found: $media_dir" >&2
  exit 1
fi

"$rclone_bin" copy \
  "$media_dir" \
  "r2:dbec-media" \
  --exclude ".DS_Store" \
  --progress \
  "$@"
