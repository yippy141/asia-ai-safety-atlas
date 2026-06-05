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

## Project Rules

- Every public claim should trace to a source record.
- Relationship edges require direct evidence, not inferred proximity.
- Do not use `partners_with` unless the source explicitly says partnership.
- Keep ethics, governance, standards, model security, frontier AI safety,
  alignment, and assurance distinct.
- Prefer low-confidence records and open questions over overclaiming.
- Keep the site static-first until the data model stabilizes.
