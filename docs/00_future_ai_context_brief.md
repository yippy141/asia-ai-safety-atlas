# Future AI Context Brief: Asia AI Safety Atlas

Use this document to initialize future AI chats. Paste it at the start of a new conversation or upload the implementation pack.

## Project concept

The project is an evidence-backed stakeholder intelligence atlas for AI safety, governance, and alignment in China and Asia-Pacific. The gap: existing AI safety maps are mostly US/UK/EU-centric and do not adequately map Chinese, Japanese, Korean, Singaporean, and ASEAN actors, institutions, standards bodies, researchers, company practices, and engagement pathways.

The product should not be just a directory. It should be a source-backed knowledge graph showing who matters, why they matter, how they connect, what they publish, which standards/policies they shape, where their safety work sits on the spectrum from AI ethics to frontier AI safety, and which engagement routes are plausible.

## Core audience options

Primary audience for v0: AI governance researchers, bridge-building organizations, and technically literate policymakers who want situational awareness.
Secondary audience: portfolio/recruiting audience; the website should look polished and credible enough to show skill.

## Product positioning

Working title: Asia AI Safety Atlas.
One-line description: Mapping AI safety, governance, and alignment ecosystems across China and Asia-Pacific through people, institutions, policies, research, standards, and cross-border dialogue channels.

## MVP scope

Start with China as the deep-dive country, plus comparison modules for Japan, Korea, Singapore, and ASEAN. Include enough US/UK/EU comparator entities to explain structural differences, but do not recreate Western maps.

MVP target:
- 50-80 China entities
- 20-30 Japan/Korea/Singapore/ASEAN entities
- 10-15 Western comparator entities
- 100-200 relationships
- 150+ sources
- 5 country pages
- 1 methodology page
- 1 partnership opportunities essay
- 1 launch essay explaining why the map needs to move beyond the West

## Key modules

1. Atlas page: filterable entity cards with local-language names, country, type, focus areas, confidence, and last verified date.
2. Entity profile drawer/page: summary, known relationships, safety relevance, governance relevance, sources, open questions.
3. Network graph: nodes and relationship edges such as oversees, funds, member_of, publishes, evaluates, standardizes, convenes, signs_commitment, participates_in.
4. Country profile pages: government posture, standards/evaluation system, frontier companies, universities, think tanks, dialogue channels.
5. Source library: every source has title, URL, date, language, source type, reliability rating, archive URL if available, and notes.
6. Partnership explorer: scores feasible engagement pathways by safety overlap, transparency, optics risk, dual-use sensitivity, and practical next step clarity.

## Non-negotiable research rules

- Do not run deep research one entity at a time for the whole map. Use batch discovery, then triage.
- Every public fact must have a source record.
- Treat social media, Reddit, X, Zhihu, and WeChat as lead discovery unless they are primary statements by the actor being profiled.
- Do local-language research first for non-Western actors. For China, most searches should be Chinese-first.
- Distinguish AI ethics, responsible AI, model security, cybersecurity, content governance, standards/evaluation, frontier AI safety, technical alignment, and catastrophic-risk governance.
- For China, be careful with the term 安全, which can mean safety or security depending on context.
- Do not infer sensitive ties. Only include relationships explicitly supported by sources.
- Use confidence ratings and open questions instead of overclaiming.

## Core data tables

Entity, Relationship, Source, Event, PolicyOrStandard, ResearchOutput, CountryProfile, EngagementOpportunity.

Each relationship needs source_entity_id, target_entity_id, relationship_type, description, source_ids, confidence, and last_verified.

## Initial tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Flow / @xyflow/react
- Fuse.js for client-side search
- Local TypeScript/JSON data files at first
- Vercel deployment
- Later migration to Supabase/Postgres only after the data model stabilizes

## What to build first

Do not start with the map. Build credibility first:
1. Homepage
2. Entity cards
3. Search and filters
4. Source drawer
5. Entity detail pages
6. Methodology page
7. Relationship graph
8. Country pages
9. Partnership explorer

## First coding-agent prompt

You are helping build a Next.js + TypeScript + Tailwind project called Asia AI Safety Atlas. Build a static-first research atlas with entity cards, filters, source drawer, and a simple network graph. Use local data files. Do not add a database or authentication. Make the UI feel like a serious research product, not a generic SaaS template. Acceptance criteria: npm run build passes, all data types are defined, no hardcoded entity cards in components, UI is responsive, every entity shows confidence level and last verified date.

## First research-agent prompt

Create a batch landscape brief for [COUNTRY/CLUSTER], not one isolated entity. Identify the top institutions, researchers, companies, standards bodies, policies, events, and relationship edges. Use primary local-language sources first. Return a triaged research queue with tiers: Tier 1 full profile, Tier 2 brief profile, Tier 3 mention-only, Tier 4 hold.

## Known weaknesses to guard against

- Western category projection: forcing Chinese/Japanese/Korean/Singaporean actors into US/UK/EU categories.
- Overreliance on English-language sources.
- Treating AI ethics or content moderation as frontier AI safety without justification.
- Turning the map into a list instead of a relationship graph.
- Adding graph visuals before source quality is good.
- Ignoring non-public or under-publicized dialogues while also not inventing them.
- Failing to maintain last-verified dates and confidence ratings.
