# Prompt: Coding Agent v0

```text
You are helping build a Next.js + TypeScript + Tailwind project called Asia AI Safety Atlas.

Goal:
Build a polished static-first research atlas with entity cards, filters, source drawer, and a simple network graph.

Constraints:
- Use Next.js App Router.
- Use TypeScript.
- Use Tailwind and shadcn/ui.
- Use local data files from src/data/*.ts.
- Do not add a database.
- Do not add authentication.
- Keep components modular.
- Make the UI feel like a serious research product, not a generic SaaS template.
- Every entity card must show confidence and last verified date.
- Every entity must link to sources.

Build:
1. Homepage with hero, stats, and featured modules.
2. /atlas page with searchable/filterable entity cards.
3. Entity detail drawer with source list.
4. /graph page using @xyflow/react.
5. /countries/[slug] pages generated from data.
6. /methodology page explaining source reliability and update process.

Acceptance criteria:
- npm run build passes.
- All data types are defined in src/types.
- No hardcoded entity cards inside components.
- UI is responsive.
- No unnecessary dependencies added.
- Explain the changes and files modified.
```
