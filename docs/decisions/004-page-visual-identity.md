# ADR-004: Page visual identity

**Status:** Accepted
**Date:** 2026-06-14

## Context

The prototype (`docs/prototype/`) uses an ad-hoc palette (Tailwind blue,
purple, green) and a leftover `ts-sprint` wordmark - it is not aligned to any
deliberate identity. Aligning the page to the official TypeScript brand would
make it look native to the ecosystem, but the TypeScript name and logo are
Microsoft trademarks. The official brand guidelines explicitly prohibit using
the logos for your own product, integrating them into your own logo, and naming
a product in a way that implies TypeScript's endorsement; the TypeScript
license grants no trademark rights beyond describing the origin of the work.
Using the official logo on a personal repository risks implying it is an
official TypeScript property.

## Decision

Align the page to the TypeScript brand **color palette** and a clean
typographic feel, but do not adopt the official brand wholesale:

- Use the TypeScript brand blue as the primary accent; derive section accents
  from it (or keep distinct secondary hues) so the navigation color-coding
  survives.
- Use a **text wordmark** ("TypeScript by Example"), not the official logo, as
  the site mark, and do not use the logo as the favicon.
- Use the name "TypeScript" nominatively (describing what the project teaches).
- Add a footer disclaimer: "Unofficial community tutorial - not affiliated with
  or endorsed by Microsoft or the TypeScript team."

## Alternatives considered

- **Adopt full official branding, including the logo.** Rejected: highest
  trademark and endorsement risk; the logo as a site mark or favicon hits the
  explicit "please don't" rules.
- **Keep the prototype's ad-hoc palette.** Rejected: off-brand and visually
  inconsistent with the ecosystem.

## Consequences

- The page looks at home in the TypeScript ecosystem without implying
  endorsement.
- Section navigation needs accents derived from the brand blue, or a documented
  secondary palette.
- Exact hex values come from the official design-assets pack, whose own usage
  terms MUST be read before any downloaded asset is used.
- This is a risk-reducing posture, not legal advice; the disclaimer and
  palette-only approach keep the project clear of the trademark lines.
