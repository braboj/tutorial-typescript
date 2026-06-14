# ADR-003: Host the index page on GitHub Pages

**Status:** Accepted
**Date:** 2026-06-14

## Context

The generated static index page (see
[ADR-002](002-generated-static-index.md)) needs to be published at a public
URL. The project is a personal learning repository with no hosting budget, so
cost and operational overhead are the dominant concerns.

## Decision

Host the page on **GitHub Pages**, deployed from CI via the GitHub Actions
Pages workflow (`upload-pages-artifact` then `deploy-pages`). The deploy
publishes the generator's output directly rather than serving from a branch
folder.

## Alternatives considered

- **Netlify / Vercel / Cloudflare Pages.** All offer free tiers but add a
  third-party account and integration to maintain. Rejected: no advantage over
  Pages for a static page already living on GitHub.
- **Self-hosting.** Rejected: recurring cost and operational burden.
- **Pages "serve from `/docs` folder" source.** Rejected: `/docs` already
  holds the documentation and the `solid-ai-templates` submodule, so pointing
  Pages at it would collide. The Actions deploy avoids this entirely.

## Consequences

- Hosting is free for the public repository, with automatic HTTPS and optional
  custom domain.
- The same CI that runs the examples-work gate ([ADR-001](001-example-runner-ci-gate.md))
  also builds and deploys the page; the whole stack stays at zero cost.
- The project is coupled to GitHub for hosting; migrating away would mean a new
  deploy target.
- Deployment uses the Actions workflow, keeping the published output decoupled
  from the `/docs` directory.
