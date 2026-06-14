# ADR-005: License the project under CC BY-NC-SA 4.0

**Status:** Accepted
**Date:** 2026-06-14

## Context

The repository declares `"license": "ISC"` in `package.json` and ships no
`LICENSE` file - an inconsistent and unintended state. The maintainer wants
licensing consistent with the other tutorial repositories; `tutorial-git` uses
the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International**
(CC BY-NC-SA 4.0) license. The repository is regarded as content (lessons and
prose) rather than as a software product.

## Decision

License the whole repository under **CC BY-NC-SA 4.0** via a `LICENSE.md` that
mirrors the `tutorial-git` license file, copyright "2026 Branimir Georgiev".
Set `package.json` `license` to the SPDX identifier `CC-BY-NC-SA-4.0` and
update the README license section to name and link the license.

## Alternatives considered

- **Keep ISC.** Rejected: permissive and inconsistent with the other tutorial
  repositories, and it permits commercial use the maintainer does not intend.
- **Dual-license** - CC BY-NC-SA 4.0 for prose plus a source-available code
  license (e.g. PolyForm Noncommercial 1.0.0) for the example source. More
  technically correct for the runnable code, but it diverges from
  `tutorial-git` and adds a second license file. Rejected for simplicity.
- **MIT or Apache-2.0 for the code.** Rejected: both permit commercial use,
  which breaks the NonCommercial intent.

## Consequences

- Reuse requires attribution (BY), forbids commercial use (NC), and requires
  derivatives under the same license (SA).
- Licensing is consistent across the maintainer's tutorial repositories.
- Caveat: CC BY-NC-SA is a content license, and Creative Commons advises
  against applying CC licenses to software. This repository contains runnable
  code, so the choice is a deliberate trade-off accepted because the repository
  is treated as content. If genuine code-reuse needs arise, revisit
  dual-licensing (the rejected alternative above).
