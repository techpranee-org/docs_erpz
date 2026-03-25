# Agent Instructions — [PROJECT NAME]

<!--
  Copy this file to the root of every project repo and fill in the sections.
  OpenHands reads this file FIRST before doing any work.
  The more specific and detailed this is, the better the code quality.
  Do not leave placeholder sections blank — remove them if not applicable.
-->

## Project overview

[2–4 sentences: what this project does, who uses it, and what "done" looks like for a typical task.]

Example:
> This is the customer-facing API for [Client Name]'s e-commerce platform. It handles product catalog,
> cart, and checkout flows. A typical agent task will be adding or modifying API endpoints, fixing bugs,
> or writing/updating tests. The frontend is a separate repo and not your concern here.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Language | TypeScript (strict mode) |
| Runtime | Node.js 20 |
| Framework | [e.g. Express / Fastify / NestJS] |
| Database | [e.g. PostgreSQL via Prisma / Drizzle] |
| Testing | [e.g. Vitest / Jest] |
| Deployment | Docker → GitHub Actions → [staging/prod] |

## Repository structure

```
src/
  routes/       ← API route handlers (one file per resource)
  services/     ← Business logic (pure functions, no HTTP concerns)
  models/       ← Database models / schema definitions
  middleware/   ← Express/Fastify middleware
  utils/        ← Shared utilities
tests/
  unit/         ← Unit tests for services and utils
  integration/  ← Integration tests for routes (test against real DB)
```

## Environment and running locally

```bash
# Install dependencies
npm install

# Copy env (don't commit real values)
cp .env.example .env

# Run database migrations
npm run db:migrate

# Start dev server
npm run dev

# Run all tests
npm test

# Type check
npm run typecheck

# Lint
npm run lint
```

## Code conventions

**TypeScript:**
- Strict mode is on — no `any`, no `!` non-null assertions without comment
- Use named exports only, no default exports
- All async functions must use `async/await`, not `.then()`
- Error handling: typed errors with `try/catch`, never swallow errors silently
- Use `zod` for all request/response validation

**Naming:**
- Variables and functions: `camelCase`
- Types, interfaces, classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Database fields: `snake_case` (handled by ORM mapping)
- Files: `kebab-case.ts`

**File organisation:**
- One route handler per HTTP resource (e.g. `products.ts`, `orders.ts`)
- Services contain business logic only — no `req`/`res` references
- Keep files under 300 lines — split if needed

**Comments:**
- Don't comment what the code does — comment *why* if it's non-obvious
- JSDoc for all exported functions

## Testing requirements

**You must write tests for every change. PRs without tests will be rejected.**

```bash
# Run before opening PR — all must pass
npm test
npm run typecheck
npm run lint
```

**Unit tests** (`tests/unit/`):
- Test every new function in `services/` and `utils/`
- Cover happy path + edge cases + error cases
- Mock external dependencies (database, external APIs)

**Integration tests** (`tests/integration/`):
- Test every new or modified API route
- Use the test database (configured via `TEST_DATABASE_URL`)
- Do NOT mock the database in integration tests
- Cover: success response, validation errors, auth errors, not-found cases

**Coverage:**
- New code should have >80% line coverage
- Don't delete existing tests

## Git workflow

**Branch naming:**
```
feature/PROJ-{sequence_id}-short-description
fix/PROJ-{sequence_id}-short-description
```
Example: `feature/PROJ-42-add-product-search`

**Commit message format:**
```
[PROJ-{sequence_id}] Short imperative description

- Bullet point explaining what changed and why (if needed)
```

**PR title format (REQUIRED — automation depends on this):**
```
[PROJ-{sequence_id}] Short description matching the Plane issue title
```
Example: `[PROJ-42] Add full-text product search endpoint`

## PR checklist (complete before opening)

Before opening the PR, verify:
- [ ] All tests pass (`npm test`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No lint errors (`npm run lint`)
- [ ] New code has tests
- [ ] No `.env` values or secrets committed
- [ ] No `console.log` left in production code
- [ ] PR title includes the Plane issue reference: `[PROJ-XX]`
- [ ] PR description explains what changed and how to test it

## What NOT to do

- **Never** modify `.env`, `.env.example`, or any production config without explicit mention in the issue
- **Never** change the database schema (add/remove/rename columns or tables) unless the issue explicitly says to and provides the migration SQL
- **Never** delete or modify existing tests — only add new ones
- **Never** commit API keys, tokens, passwords, or any secrets
- **Never** change package versions unless the issue is specifically about a dependency update
- **Never** refactor code that is outside the scope of the task — fix the one thing, open the PR
- **Never** open a PR if tests fail — fix the tests first
- **Never** leave `TODO:` comments in the code — implement it or don't

## If you are unsure

If the task is ambiguous, implement the most conservative reasonable interpretation and document your assumption clearly in the PR description. Do not ask for clarification — make a decision.

If you encounter a test failure in code you did NOT modify, note it in the PR description. Do not fix tests in unrelated areas — flag them.

If you are blocked (e.g. missing environment variable, broken dependency), describe the blocker in the PR description and open the PR anyway so a human can unblock it.

## Verification steps (run before creating the PR)

```bash
# 1. All tests pass
npm test

# 2. No type errors
npm run typecheck

# 3. No lint issues
npm run lint

# 4. Build succeeds (catches import errors)
npm run build

# 5. Spot check: does the new endpoint/feature work as described?
# Run the dev server and manually call the relevant endpoint
npm run dev
# curl http://localhost:3000/your-new-endpoint
```
