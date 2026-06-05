# Step-by-Step Implementation Guide

This guide assumes you are a novice coder using VS Code, GitHub, Vercel, Codex, and Claude.

## Phase 0: Create the repository

In VS Code terminal:

```bash
npx create-next-app@latest asia-ai-safety-atlas --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd asia-ai-safety-atlas
npm run dev
```

Open the local URL shown in the terminal.

Then install the UI and visualization tools:

```bash
npm install @xyflow/react lucide-react framer-motion fuse.js zod clsx tailwind-merge
npx shadcn@latest init
npx shadcn@latest add card badge button sheet tabs table command dialog tooltip input separator select
```

## Phase 1: Set up folders

Create this structure:

```text
src/app/
src/app/atlas/
src/app/graph/
src/app/countries/[slug]/
src/app/methodology/
src/components/
src/components/atlas/
src/components/graph/
src/components/layout/
src/data/
src/lib/
src/types/
```

Copy files from this implementation pack:

```text
schema/types.ts -> src/types/index.ts
schema/zod_schemas.ts -> src/lib/schemas.ts
starter_snippets/entities_sample.ts -> src/data/entities.ts
starter_snippets/relationships_sample.ts -> src/data/relationships.ts
starter_snippets/sources_sample.ts -> src/data/sources.ts
```

## Phase 2: Build credibility pages first

Build in this order:

1. `src/app/page.tsx` - homepage with hero, value proposition, featured modules.
2. `src/app/atlas/page.tsx` - entity grid with filters.
3. `src/components/atlas/EntityCard.tsx` - card component.
4. `src/components/atlas/EntityDetailSheet.tsx` - source-backed detail drawer.
5. `src/app/methodology/page.tsx` - source reliability and update method.

Do not start with the map. The first public impression should be: this is well sourced.

## Phase 3: Build search and filters

Minimum filters:
- Country
- Entity type
- Focus area
- Confidence level
- Engagement relevance
- Last verified freshness

Search fields:
- English name
- Local-language name
- Acronym
- Summary
- Tags

Use Fuse.js for client-side search.

## Phase 4: Add the source drawer

Every entity card should show:
- Confidence level
- Last verified date
- Source count
- Button: View sources

The drawer should show:
- Source title
- Publisher
- Date
- Language
- Reliability rating
- Relevant note
- Link
- Archive link

## Phase 5: Add the graph

Install and use `@xyflow/react`.

Start with 20 nodes and 30 edges. Do not render the whole dataset at once.

Edge types:
- oversees
- funds
- hosts
- member_of
- convenes
- participates_in
- publishes
- coauthors
- signs_commitment
- evaluates
- standardizes
- advises
- partners_with
- affiliated_with
- regulates
- invests_in

## Phase 6: Country pages

Each country page should include:
- Executive summary
- Government posture
- Standards and evaluation ecosystem
- Technical research groups
- Frontier companies
- International engagement
- Open questions
- Sources

## Phase 7: Deploy to Vercel

```bash
git init
git add .
git commit -m "Initial Asia AI Safety Atlas"
git branch -M main
git remote add origin https://github.com/yippy141/asia-ai-safety-atlas.git
git push -u origin main
```

Then import the repository into Vercel.

## Development habit

Commit small, working milestones:

```bash
git add .
git commit -m "Add entity data model"
git commit -m "Add atlas entity cards"
git commit -m "Add source drawer"
git commit -m "Add methodology page"
```

## Codex workflow

Use Codex for implementation tasks that can be tested:
- Build entity cards from `src/data/entities.ts`.
- Add filters.
- Fix TypeScript errors.
- Add React Flow graph.
- Improve mobile layout.
- Run `npm run build` and fix failures.

Use Claude or ChatGPT for product/design/research reasoning before asking Codex to edit code.

## Coding-agent acceptance criteria

For every coding task, tell the agent:
- Keep components modular.
- Do not hardcode data in components.
- Use TypeScript types.
- Run lint/build.
- Do not add unnecessary dependencies.
- Explain changes in plain English.
- Make a small, reviewable diff.
