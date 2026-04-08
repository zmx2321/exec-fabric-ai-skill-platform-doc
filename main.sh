#!/usr/bin/env sh

set -e

COMMIT_MESSAGE="${1:-docs: update source content}"

git add .

if git diff --cached --quiet; then
  echo "No source changes to upload."
  exit 0
fi

git commit -m "${COMMIT_MESSAGE}"
git pull --rebase
git push
