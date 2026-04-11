#!/usr/bin/env sh

set -e

REPO_URL="${REPO_URL:-git@github.com:zmx2321/exec-gov-ai-skill-platform-doc.git}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-gh-pages}"

yarn docs:build

cd docs/.vitepress/dist

git init
git checkout -B main
git add -A

if git diff --cached --quiet; then
  echo "No build changes to deploy."
  exit 0
fi

git commit -m "deploy"
git push -f "${REPO_URL}" main:"${DEPLOY_BRANCH}"

cd -
