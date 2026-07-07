# Spec: the Map, dossiers, and the political-economy briefing

## Information architecture (this replaces the cluttered nav)

Primary nav, in order: Map · Briefings · Countries · Organizations · Sources.
Everything else (glossary, methodology) lives in the footer. The landing page
leads with the thesis and the Map preview, not with counts.

## The Map: /map

One view answers "who has power, and what kind of safety do they do."

- Layout: fixed 2D grid, NOT force-directed. Y axis is the authority stack,
  five labeled bands from party center (top) to labs/universities/firms
  (bottom). X axis is the safety spectrum, content control (left, governance
  blue) to frontier alignment (right, gold).
- Nodes: one per entity with a MapPosition record. Color by sector class,
  size by count of linked source records (evidence density). Hover: name,
  one-liner, evidence count. Click: side panel with why_it_matters, top
  importance aspects, link to /orgs/[id].
- Country selector top-left; China default. Countries without MapPosition
  data do not appear in the selector. Never render placeholder nodes.
- Relationship edges are OFF by default. A toggle draws edges only for the
  selected node, from existing Relationship records, public_safe only.
- Implementation: custom SVG, no chart library, no React Flow on this page.
- An axis caveat renders under the grid: placements on the x axis are analyst
  judgments with reasoning, click a node to see it.

## Org dossier pages: /orgs/[id]

Static generation from OrgDossier records. Anatomy, top to bottom:

1. Name, native name, sector chip, country. External site link.
2. "Why it matters": the claim-led one-liner, display type.
3. Importance: five aspects as labeled 0-3 bands with the one-line reasoning
   inline and evidence chips. No composite. Render aspects the data lacks as
   "not assessed".
4. What safety means here: the safety_conception block, basis chip visible.
5. Leadership: person cards linking to /people/[id].
6. History: compact dated list.
7. Connections: list from Relationship records where this entity is source
   or target, grouped by type, each with confidence dot; connections_note on
   top if present.
8. Selected outputs: linked titles.
9. Engagement fit: conditional wording, visually separated as assessment.
10. Open questions, then a collapsed source appendix.
Threshold rule: a dossier page renders only if the record has why_it_matters,
at least two importance aspects, and three sources. Below threshold, the org
keeps its existing atlas card only.

## Person pages: /people/[id]

Sourced roles, affiliations as links, selected public items, governance frame
only when present and always labeled with its basis. No photos, no bios
scraped from anywhere, no inferred views.

## Political-economy briefing: /briefings/china-ai-plus

Claim-led editorial page bound to PEClaim records. Sections:

1. Thesis: two sentences on how AI+ turns a central plan into local
   competition, and where safety does and does not surface in it.
2. The instrument chain: central plan -> ministry actions -> local
   implementation, rendered as three columns with claims placed in each.
3. Actor-class breakdown: for each PEActorClass with data, the claims as
   claim + so_what pairs, safety_salience highlighted where present.
4. Jurisdiction view: a simple table of provinces/municipalities with
   instruments and safety salience. Only jurisdictions with claims render.
5. What we don't know: open questions, honestly.
This page renders only if tmp-ingested PEClaim data exists; otherwise the
route is not created.

## Modularity rules for future regions

- Data is country-scoped: src/data/countries/<iso>/ holds entities,
  dossiers, positions for that country; shared schema imports from
  src/types. China may remain in the current flat files this release;
  new countries adopt the scoped layout.
- No component may hardcode a country name; everything renders from data
  presence. Adding a region must require zero component changes.
