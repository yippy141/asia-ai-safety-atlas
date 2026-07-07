# Build report: Map, dossiers, and the China AI+ briefing

Branch `claude/festive-bartik-334e0b`, seven commits, Stages 0 through 6.
Every stage passed `npm run validate:data`, `npm run lint`, and
`npm run build` before commit. Final data state: 92 entities, 60
relationships, 16 events, 21 policies, 27 research outputs, 261 sources,
11 country profiles, 1 person profile, 9 org dossiers, 12 map positions,
24 PE claims.

## What changed, by stage

### Stage 0 — bind inputs, repair references (`d1233b1`)
- Imported the map/dossier spec, dossier and interlocutor types, and the
  8-rule AGENTS.md into the worktree as binding documents.
- Removed two dangling source references (`cn-tsinghua-iaiig`, `bigai`);
  downgraded BIGAI to `needs_primary_source: true`.
- `docs/DATA_INVENTORY.md` records what exists and the resolved-URL
  constraint on `report9_sources.json` (6 of 133 references verified).

### Stage 1 — report9 ingest under the resolved-URL constraint (`cbe2f83`)
- Added the 3 report9 sources with verified URLs; the other 127
  references were skipped, not improvised.
- New evidence notes; a thin `cn-most` entity limited to its one source;
  `people.ts` with the single person whose role survives on verified
  evidence (Zhou Bowen). The Xue Lan role flip was not applied: every
  reference for it is unresolved.

### Stage 2 — org dossiers (`5fe65f3`)
- Nine OrgDossier records for entities clearing the spec threshold:
  CAC, MIIT, TC260, WG9, CAICT, CESI, AIIA, OpenCompass, Tsinghua CISS.
- `/orgs` index and static `/orgs/[id]` pages following the spec
  anatomy; per-aspect importance bands with no composite score;
  unsupported aspects render "not assessed".

### Stage 3 — person pages (`18881b7`)
- `/people/[id]` renders only public person records with at least one
  sourced role; one page ships (Zhou Bowen). The 13 other report9
  profiles stay out for lack of a resolvable source.
- Dossier leadership cards and person pages cross-link both ways.

### Stage 4 — the Map (`c1a1483`)
- 12 MapPosition records: the nine dossier orgs plus MOST, MIIT AI
  standards committee (TC1), and TC28/SC42. Every placement carries
  reasoning and an analyst-judgment basis.
- `/map`: custom SVG fixed grid (no chart library, no force layout),
  five authority bands, content-control to frontier-alignment x axis,
  sector-class colors from the fixed tokens, node size by source count,
  hover cards, click-to-panel, edges only for the selected node behind
  a toggle. Party-center and State Council bands render empty because
  the atlas has no sourced entities at those levels.
- Landing page gained a static Map preview; Map became first nav item.

### Stage 5 — China AI+ political-economy briefing (`39e2edb`)
- 24 PEClaim records ingested verbatim from `tmp/ai_plus_pe.json`.
  安全 stays quoted in the original everywhere, per the payload's
  handling note. 45 new Source records cover every URL the payload
  cites.
- `/briefings/china-ai-plus`: thesis, reading notes (安全 polysemy,
  Taiwan operating assumption), three-column instrument chain,
  actor-class breakdown separating sourced fact from marked judgment,
  jurisdiction table, the payload's seven open questions verbatim,
  collapsed source appendix. `/briefings` index created.
- Validation extended with the PEClaim schema and referential checks.

### Stage 6 — information architecture (`ff4f3c7`)
- Primary nav per spec: Map, Briefings, Countries, Organizations,
  Sources. Atlas, Graph, Insights, Data downloads, Glossary, Evidence
  standards, Changelog moved to the footer.
- Landing leads with the thesis and Map preview; counts moved down;
  briefing teaser added.
- Public-string sweep removed build-process language from page copy and
  country-profile summaries (PR-code references, "shell", "backfill",
  "bootstrap", "typed local data", "ecosystem").

## Judgment calls a reviewer should know about

1. **PE actor-class mapping.** The payload's prose actor classes were
   mapped onto the `PEActorClass` enum. Notable stretches: State
   Council, CAC/TC260, and NDRC-coordinated items map to
   `central_ministry` (the enum has no separate central-government
   value); the CAICT/AIIA benchmark apparatus maps to
   `central_ministry` via CAICT's MIIT affiliation; the GBA Hetao item
   maps to `central_ministry` because its lead instrument is a State
   Council plan; Shanghai and Beijing map to `provincial_government`
   as province-level municipalities.
2. **Meta-language rewording in judgment fields.** Fourteen `so_what`
   strings referencing the Atlas build or task wording ("the Atlas
   should treat", "per the task's instruction", "prior reports") were
   reworded to publication voice. Facts, quotes, instruments, and
   sources are untouched; only the judgment fields were edited, and the
   claim/safety_salience fields are verbatim.
3. **English source titles.** The 45 PE source records carry English
   titles I authored from the original Chinese titles (kept in
   `title_original`). Reliability ratings assigned by publisher class:
   A government portals and TC260/CAC, B state media and first-party
   corporate, C aggregators.
4. **Map placements.** All 12 x-axis placements are analyst judgments
   with recorded reasoning, surfaced in the UI. The three non-dossier
   additions (MOST, MIIT TC1, TC28/SC42) rest on thinner evidence.
5. **Country-profile copyedits.** Stage 6 reworded PR-code and
   "ecosystem" phrasing inside country summary strings. Facts and
   hedges preserved; diffs are in `ff4f3c7` for review.

## Skipped, and why

- 127 of 133 report9 source references: URLs unresolved; the records
  that depended on them (including 13 person profiles and the Xue Lan
  role change) were left out rather than improvised.
- Countries without MapPosition data do not appear in the map country
  selector, per spec; only China qualifies this release.
- The `local_soe`, `private_local`, and `military_affiliated` actor
  classes have no claims; the payload records that no open official
  source documents a PLA role in the civilian AI+ instruments, and no
  claim was invented to fill the classes.
- `src/data/countries/<iso>/` scoped layout: the spec permits China to
  stay in flat files this release; not migrated.

## Needs human verification

1. **Entity, event, and insight summaries still carry build-language.**
   About 18 public `summary` strings in `src/data/entities.ts`,
   `events.ts`, and `insights.ts` reference PR2C/PR2G/backfill. These
   are reviewed record content, so I did not edit them; they violate
   the no-build-language rule when rendered and need a human copyedit
   pass.
2. **Changelog wording.** `src/data/changelog.ts` says "Primary-source
   backfill" in a public changelog entry. I left it: it documents what
   happened. Decide whether changelog entries are exempt from the
   build-language rule.
3. **Snippet-sourced quotes.** The payload's own notes flag that the
   AI+ manufacturing opinion and several local measures were quoted
   from search snippets, not full fetches. Those quotes render on the
   briefing; the payload's URL-fetch caveat is preserved in
   `peJurisdictionNotes` (data only, not rendered).
4. **The 45 authored English titles** and reliability ratings for PE
   sources.
5. **Actor-class mappings** listed above, especially the
   `central_ministry` stretches.
6. **The Fujian operating-assumption item**: flagged in-claim and in
   the reading notes; confirm the framing is acceptable before wider
   distribution.
7. **Four entities remain `needs_primary_source: true`**, shown in the
   landing metrics.
