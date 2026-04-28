#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/melano-inc-features}"
APP_SUBDIR="${APP_SUBDIR:-v0-melano-inc-features}"
BRANCH="${BRANCH:-main}"

echo "==> Deploy MELANO INC app"
echo "APP_DIR: ${APP_DIR}"
echo "APP_SUBDIR: ${APP_SUBDIR}"
echo "BRANCH: ${BRANCH}"

cd "${APP_DIR}"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull origin "${BRANCH}"

cd "${APP_SUBDIR}"
npm ci
npm run build

pm2 startOrReload deploy/hostinger/ecosystem.config.cjs --update-env
pm2 save

echo "==> Deploy complete"
