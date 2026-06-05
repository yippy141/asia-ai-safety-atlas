# Asia AI Safety Atlas - Implementation Pack

Last updated: 2026-05-26

This pack is designed for a novice builder using VS Code, GitHub, Vercel, ChatGPT, Claude, and Codex. It is not a finished website. It is a practical starting kit for building a public, source-backed atlas of AI safety, governance, and alignment in China and Asia-Pacific.

## What this pack contains

- `docs/00_future_ai_context_brief.md` and `.docx`: paste/upload this into future AI chats so the model can resume the project without losing context.
- `docs/01_project_charter_and_mvp.md`: product framing, audience, MVP, feature priorities.
- `docs/02_step_by_step_implementation_guide.md`: hand-holding build guide for Next.js, TypeScript, Tailwind, shadcn/ui, React Flow, and Vercel.
- `docs/03_research_operating_model.md`: the practical research workflow. This answers the key question: no, you should not run deep research one entity at a time for everything.
- `docs/04_multilingual_local_research_playbook.md`: Chinese, Japanese, Korean, and ASEAN-language research playbooks.
- `docs/05_ai_model_stack_and_task_routing.md`: which models/tools to use for research, coding, translation, fact-checking, and design critique.
- `docs/06_assumptions_holes_and_risks.md`: explicit assumptions and weak points in the plan.
- `prompts/`: ready-to-copy prompts for research agents, coding agents, fact-checkers, and future chat initialization.
- `data/`: seed CSVs for entities, sources, relationships, country coverage, and research queue.
- `schema/`: TypeScript and Zod schema starters for the website.
- `starter_snippets/`: UI/data/code snippets for a static-first Next.js implementation.
- `templates/`: copyable entity/source/profile templates.

## Recommended first week

1. Read `docs/00_future_ai_context_brief.md` and `docs/01_project_charter_and_mvp.md`.
2. Create the Next.js project using `docs/02_step_by_step_implementation_guide.md`.
3. Copy the TypeScript schema from `schema/types.ts` and `schema/zod_schemas.ts` into your project.
4. Import 20 seed entities from `data/entity_seed_list.csv`, not all of them.
5. Build entity cards, filters, a source drawer, and a basic methodology page before building the graph or map.
6. Use the research workflow in `docs/03_research_operating_model.md` to grow the dataset in batches.

## Working principle

The product should feel like a serious intelligence/research atlas, not a decorative directory. Every public claim should trace to a source record. Every relationship edge should have a relationship type, source, confidence rating, and last-verified date.
