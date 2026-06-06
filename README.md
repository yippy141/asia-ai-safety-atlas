# Asia AI Safety Atlas

A public, static-first, source-backed stakeholder intelligence atlas for AI
safety, governance, alignment, standards, evaluation, technical safety research,
frontier-model developers, and cross-border dialogue channels across China and
Asia-Pacific.

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Before opening a PR, run:

```bash
npm run validate:data
npm run lint
npm run build
```

## Current Routes

- `/` - atlas overview, status metrics, and country slices
- `/atlas` - searchable, filterable entity cards
- `/countries/[slug]` - static country profiles generated from local data
- `/graph` - public-safe relationship graph
- `/methodology` - evidence standards and controlled vocabulary
- `/sources` - source register
- `/glossary` - editorial flags and atlas terminology

## Data Layer

The atlas uses local TypeScript data only. There is no database, auth, CMS,
analytics, or server-side ingestion.

- `src/types/index.ts` - shared interfaces for entities, sources,
  relationships, events, policies/standards, research outputs, country
  profiles, and evidence notes
- `src/lib/taxonomy.ts` - controlled focus areas, relationship labels, source
  types, and display formatting
- `src/lib/validation.ts` - Zod schemas and referential integrity checks
- `src/data/entities.ts` - seed entity records
- `src/data/sources.ts` - seed source records
- `src/data/relationships.ts` - public-safe relationship records
- `src/data/evidenceNotes.ts` - evidence note records
- `src/data/countries.ts` - country profile records
- `src/data/glossary.ts` - glossary entries

## PR 1 Seed Scope

The first shell includes 18 seed entities and 7 research-brief source records.
Most entities are marked `needs_primary_source: true` because the briefs are
used for discovery and synthesis. Public claims should be backfilled with
canonical primary sources where possible.

## PR 2A China Backfill

The China standards/evaluation slice now includes official primary-source
records from `tmp/pr2a_china_backfill.json.md`: CAC/MIIT rules, TC260 standards
work, CAICT and CESI reports/pages, SHLAB/OpenCompass, BAAI/FlagEval, and
CnAISDA dialogue records. Research briefs remain in the source register as
discovery inputs, while official primary sources are grouped separately on
`/sources`.

## PR 2B AISI Comparison Backfill

Japan, South Korea, and Singapore AISI comparison records now include official
primary-source backfill from `tmp/pr2b_aisi_comparison_backfill.json.md`.
Singapore assurance infrastructure such as AI Verify, Project Moonshot, the
Global AI Assurance Sandbox, and AI TAP is modeled separately from Singapore
AISI proper.

## PR 2C China-West Dialogue Backfill

The first event layer now imports the safe PR2C subset from
`tmp/pr2c_china_west_dialogue_v2.json`, filtered through
`tmp/pr2c_v2_factcheck.json` and `tmp/source_url_repair_map.json`. Event-target
relationships are limited to event-oriented labels, and homepage-only source rows
remain held unless repaired or matched to an exact existing source.

## Project Rules

- Every public claim should trace to a source record.
- Relationship edges require direct evidence, not inferred proximity.
- Do not use `partners_with` unless the source explicitly says partnership.
- Keep ethics, governance, standards, model security, frontier AI safety,
  alignment, and assurance distinct.
- Prefer low-confidence records and open questions over overclaiming.
- Keep the site static-first until the data model stabilizes.
