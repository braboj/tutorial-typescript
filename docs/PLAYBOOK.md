# Playbook

Operational reference for **TypeScript by Example**. For first-time setup, see
[ONBOARDING.md](ONBOARDING.md). Project rules live in
[../CLAUDE.md](../CLAUDE.md).

## 1. Git workflow

- Work on a branch - never commit directly to `main`
- Branch naming: `feat/<topic>`, `fix/<topic>`, `docs/<topic>`,
  `chore/<topic>`
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`,
  `test:`; imperative mood, subject under 80 characters
- One concern per pull request; review the diff before merging using the
  `base/core/review.md` priority order
- After a PR merges, delete the branch and pull `main`
- Never force-push; see `base/core/git.md` for the full ruleset

## 2. Domain operations

### 2.1 Add a new lesson to an existing chapter

1. Pick the chapter directory, e.g. `examples/01_language/08_functions/`
2. Create `NN_topic.ts` with the next zero-padded order number
3. Make it self-contained and runnable - no imports from other lessons
4. Use `console.log` to show the output the lesson produces
5. Verify: `npm run ex examples/.../NN_topic.ts`
6. Type-check and format (see section 3)

### 2.2 Add a new chapter

1. Create `examples/<NN_area>/<NN_chapter>/`
2. Add lesson files `NN_topic.ts` and a `lab.ts` scratch file
3. Keep numbering contiguous and zero-padded
4. Record the new chapter in `docs/dev-journal.md`

### 2.3 Add a dependency for a lesson

1. Confirm a lesson actually needs to teach the package
2. `npm install <package>` (or `-D` for dev-only tooling)
3. Commit the updated `package.json` and `package-lock.json`
4. Note the reason in `docs/dev-journal.md`

## 3. Quality

Run all checks before every commit. Automated checks first.

### 3.1 Type checking (tsc)

```bash
npm run typecheck        # tsc --noEmit, zero errors required
```

### 3.2 Formatting (Prettier)

```bash
npm run format           # write fixes
npm run format:check     # verify (use in review)
```

### 3.3 Running examples (tsx)

```bash
npm run ex <file>        # every example must run without throwing
```

### 3.4 Tests (node:test)

```bash
npm test                 # runs the node:test lesson
```

Testing here is illustrative - there is no coverage gate (see CLAUDE.md
section 3.2). Do not add Vitest/Jest or coverage thresholds.

## 4. Maintenance

### 4.1 Update the conventions submodule

```bash
git submodule update --remote docs/solid-ai-templates
# review the diff, then commit the pointer bump
```

### 4.2 Update dependencies

```bash
npm outdated
npm update               # then re-run section 3 checks
```

### 4.3 Record decisions

- Significant structural decisions go in `docs/decisions/` as ADRs
  (see `base/core/docs.md` for the ADR format)
- Session history goes in `docs/dev-journal.md`

## 5. Release and deploy

This repo is not published and not deployed - there is no release
artifact. To mark a teaching milestone, tag the commit:

```bash
git checkout main && git pull
git tag -a vX.Y.Z -m "vX.Y.Z - <milestone>"
git push origin vX.Y.Z
gh release create vX.Y.Z --title "vX.Y.Z - <milestone>" --generate-notes
```

<!-- Generated with solid-ai-templates (github.com/braboj/solid-ai-templates) -->
