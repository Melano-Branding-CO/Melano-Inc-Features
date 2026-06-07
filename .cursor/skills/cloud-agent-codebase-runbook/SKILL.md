---
name: cloud-agent-codebase-runbook
description: Use when setting up, running, debugging, or testing this codebase in a Cursor Cloud Agent environment.
disable-model-invocation: false
---

# Cloud Agent Codebase Runbook

Use this starter skill when a Cloud agent needs to get this repository running, test a change, or document newly discovered setup knowledge. Keep the guidance practical and evidence-based: inspect the code first, avoid guessing secrets or feature flags, and update this skill whenever a new reliable workflow is found.

## First checks

Run these checks before changing code or starting services:

```sh
git status --short
ls -la
test -f package.json && npm run
test -f v0-melano-inc-features/package.json && npm --prefix "v0-melano-inc-features" run
```

Important current repository facts:

- The root `package.json` is a thin wrapper around the app in `v0-melano-inc-features`.
- Root scripts expect `v0-melano-inc-features/package.json` to exist.
- In this checkout, `v0-melano-inc-features/` and `IACUANTICA2-gr/` may be empty gitlink/submodule-style directories. If the app package is missing, report that the app content must be restored instead of inventing commands.
- `.env*.local` and `.vercel` are ignored; keep secrets and machine-specific login state there and do not commit them.
- Preserve unrelated pre-existing lockfile or `node_modules` changes unless your task explicitly requires touching them.

## Root workspace

Use the root workspace for orchestration and quick verification.

Common commands:

```sh
npm install                         # only when root dependencies changed or are missing
npm run dev                         # delegates to v0-melano-inc-features
npm run build                       # delegates to v0-melano-inc-features
npm run lint                        # delegates to v0-melano-inc-features
npm test                            # delegates to v0-melano-inc-features
```

Testing workflow:

1. Confirm `v0-melano-inc-features/package.json` exists.
2. Run the narrowest relevant root command first, usually `npm run lint` or `npm test`.
3. For release or routing changes, also run `npm run build`.
4. If a root command fails with `ENOENT` for the app package, the code was not actually tested; document the missing app content blocker.

## Frontend/app area: `v0-melano-inc-features`

This is the expected primary app package. Always inspect its real scripts before relying on assumptions:

```sh
test -f v0-melano-inc-features/package.json
npm --prefix "v0-melano-inc-features" run
```

Setup and execution:

```sh
npm --prefix "v0-melano-inc-features" install   # only if app dependencies need install/update
npm run dev                                     # preferred root wrapper
# or:
npm --prefix "v0-melano-inc-features" run dev
```

Validated Cursor Cloud setup:

```sh
npm install
npm --prefix "v0-melano-inc-features" install
npm run dev
```

Expected dev URL: `http://localhost:5173/`. No `.env` file is required for the starter app.

Manual UI smoke workflow after the dev server starts:

1. Note the local URL printed by the dev server, commonly `http://localhost:3000`.
2. Open the app in a browser.
3. Exercise the changed page or component, including empty/loading/error states when relevant.
4. Capture screenshots or a short recording for UI changes.
5. Check the terminal for runtime errors before declaring success.

Automated validation workflow:

```sh
npm run lint
npm test
npm run build
```

Run only the commands that fit the change, but make sure the modified code path is actually exercised.

## Data, API, and integration code

Before setting environment variables or starting external services, discover what the app actually uses:

```sh
rg -n "process\\.env|NEXT_PUBLIC_|MONGODB|SUPABASE|VERCEL|DATABASE|API_KEY" v0-melano-inc-features
rg -n "env\\.example|\\.env" .
```

Environment and login guidance:

- Put local values in ignored `.env*.local` files.
- Never commit tokens, `.vercel`, generated login state, or real service credentials.
- If Vercel, Supabase, MongoDB, or another service is required, use the repository's documented setup first. If no docs or example env file exists, ask for credentials only when necessary and otherwise mock the boundary.
- Prefer local emulators, test containers, or in-process mocks for tests. Use live services only for explicit integration testing.

Testing workflow:

1. Identify the API/data module and the env vars it reads.
2. Add or use mocks for unit tests so tests do not require real credentials.
3. For integration tests, set only the documented local env vars and run the specific test command from the app package.
4. Validate both success and failure paths for network/database calls.

## Bot, security, and feature-gated flows

The root dependencies include `botid`; verify usage in the app before configuring it.

Discovery commands:

```sh
rg -n "botid|feature|flag|experiment|gate|enabled|disabled" v0-melano-inc-features
rg -n "NEXT_PUBLIC_.*FEATURE|FEATURE_|FLAG_" v0-melano-inc-features
```

Feature flag and mocking rules:

- Do not guess flag names. Search the code and example env files first.
- Prefer explicit local env vars or test fixtures for flags.
- Test both enabled and disabled paths when a flag affects behavior.
- If bot/security/network checks block local testing and no local bypass is documented, mock the boundary in tests and record the workaround in this skill after it is validated.

Testing workflow:

1. Run the relevant unit/integration tests with the flag disabled or defaulted.
2. Re-run with the flag enabled through the documented local mechanism.
3. For UI-gated behavior, verify both paths in the browser and capture evidence.

## Secondary/legacy area: `IACUANTICA2-gr`

Treat this area as unavailable until it contains real files.

Workflow:

```sh
ls -la IACUANTICA2-gr
test -f IACUANTICA2-gr/package.json && npm --prefix "IACUANTICA2-gr" run
```

If the directory is empty or lacks its package/config files, document that the content is missing and do not invent build or test commands for it.

## Troubleshooting

- **`ENOENT ... v0-melano-inc-features/package.json`**: the app package is missing. Restore the app/submodule content before running root npm scripts.
- **Submodule/gitlink confusion**: if `git submodule status` fails because `.gitmodules` is absent, do not run destructive cleanup. Report the missing mapping and continue with available files.
- **Lockfile drift**: root `package-lock.json` and `node_modules/.package-lock.json` may already be modified. Avoid changing or reverting them unless dependency work is part of the task.
- **Missing credentials**: use mocks for tests. Only initiate CLI login or request secrets when the task explicitly needs a live service.
- **Unknown feature flags**: search the code first. If a flag cannot be found, say so and test the default behavior.

## Updating this skill

Whenever you discover a reliable setup, run, testing, login, feature-flag, or debugging trick:

1. Validate it by running the command or completing the workflow.
2. Add it to the relevant codebase-area section above.
3. Include the exact command, required env vars, expected result, and any known failure mode.
4. Keep blockers current, especially missing app/submodule content or unavailable credentials.
5. Prefer short, concrete runbook entries over broad advice.
