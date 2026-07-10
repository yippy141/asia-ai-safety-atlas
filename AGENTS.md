# Agent instructions for asia-ai-safety-atlas

You are working on a source-audited public intelligence product. The product's
entire value is that its claims are checkable. Behave accordingly.

## Hard rules

1. Never invent sources, URLs, entities, people, dates, or quotes. If data is
   missing, stop and report the gap instead of filling it.
2. Never do web research. All facts come from files in `src/data/` or `tmp/`
   that a human has reviewed.
3. Observed facts and analyst judgment are different data types. Anything with
   `evidence_basis: "analyst_inference"` or `"anonymous_reporting"` must be
   visually distinguished in UI and never presented as fact.
4. `public_safe_to_show: false` records must never render on public pages.
5. Any string like `SRC:<title>` must be resolved to a real id in
   `src/data/sources.ts` before merge. Any `SRC-NEW:` marker means a human must
   add a verified source first. If you cannot resolve one, leave the record out
   and list it in your final report.
6. No build-process language in the public UI: no "PR2", "backfill",
   "bootstrap", "shell", "typed local data", or internal source ids.
7. Design tokens are fixed: bg #F6F3EC, ink #1C1C1A, muted #5A5A52, hairline
   #E2DDD2, governance #2B4C6F, frontier #B07D2B, risk #9B3A2E. Fraunces for
   display, IBM Plex Sans for body. Never introduce new colors, gradients,
   emoji, or rounded-card grids.
8. Voice: claims first, sources as backing. No "ecosystem", "landscape",
   "robust", "leverage", "comprehensive". Hedge on judgments, not facts.

## Definition of done, every task

- `npm run validate:data` passes
- `npm run lint` passes
- `npm run build` passes
- You end with a report: what changed, what you skipped and why, what needs
  human verification.

## Scope discipline

Do only the task in the prompt. If you notice adjacent problems, list them in
your report; do not fix them unprompted.
