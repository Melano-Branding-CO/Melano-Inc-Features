#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/melano-inc-features}"
APP_SUBDIR="${APP_SUBDIR:-v0-melano-inc-features}"
BRANCH="${BRANCH:-main}"
PM2_APP_NAME="${PM2_APP_NAME:-melano-ai-hub}"

echo "==> Deploy MELANO INC app"
echo "APP_DIR: ${APP_DIR}"
echo "APP_SUBDIR: ${APP_SUBDIR}"
echo "BRANCH: ${BRANCH}"
echo "PM2_APP_NAME: ${PM2_APP_NAME}"

cd "${APP_DIR}"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull origin "${BRANCH}"

cd "${APP_SUBDIR}"
if pm2 describe "${PM2_APP_NAME}" >/dev/null 2>&1; then
  echo "==> Stop ${PM2_APP_NAME} before mutating .next"
  pm2 stop "${PM2_APP_NAME}"
fi
npm ci
npm run build

pm2 startOrReload deploy/hostinger/ecosystem.config.cjs --update-env
pm2 save

echo "==> Deploy complete"
