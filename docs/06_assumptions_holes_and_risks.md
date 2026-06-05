# Assumptions, Holes, and Risks

This document lists weak points in the current plan so future AI chats do not treat the initial plan as final truth.

## Product assumptions

### Assumption: static-first is enough for v0

This is probably right for the first public release, but a database will become necessary once updates, contributors, and relationship queries grow.

Trigger to migrate to Supabase/Postgres:
- More than 300 entities
- More than 800 relationships
- Multiple contributors
- Need for editing workflows
- Need for advanced graph queries

### Assumption: public sources are enough

Public sources are enough for a credible v0, but they will undercount private dialogues, informal networks, and relationship quality. Use open questions and confidence ratings instead of inventing missing relationships.

### Assumption: AI safety maps cleanly across countries

It does not. The same term can mean different things across political contexts. In China especially, AI safety/security, content governance, state security, cybersecurity, standards compliance, and frontier AI safety can overlap.

## Research risks

### Western category projection

Risk: Labeling every ethics/governance actor as “AI safety.”

Mitigation: Use focus-area tags rather than a single category. Distinguish:
- AI ethics
- trustworthy/responsible AI
- content safety
- cybersecurity/model security
- standards and evaluation
- frontier AI safety
- technical alignment
- catastrophic risk governance

### English-language bias

Risk: English reports and newsletters overrepresent internationally visible actors.

Mitigation: Chinese/Japanese/Korean/local-language searches must be standard for every country module.

### Social media overconfidence

Risk: Treating X, Reddit, LessWrong, Zhihu, or WeChat chatter as established fact.

Mitigation: Use social platforms for discovery; require primary or reliable secondary confirmation before public claims.

### Relationship inference error

Risk: Creating graph edges from co-attendance or shared membership.

Mitigation: Only create edges if sources explicitly support a relationship. Use weak edge labels such as participated_in, attended, or mentioned_with rather than partners_with.

### Staleness

Risk: AI governance changes quickly, especially institutes, standards, model releases, and national policies.

Mitigation: Last-verified date on every entity and source. Monthly refresh for Tier 1 entities.

## Political and safety risks

### Optics and sensitivity

The project should not advocate naive collaboration. It should map engagement pathways and risks. Partnership scoring should include optics risk, dual-use sensitivity, transparency, and practical next-step clarity.

### Dual-use topics

AI-biosecurity, cyber, frontier model evaluations, and military AI require cautious wording. Avoid operational details that could enable misuse. Focus on governance, institutional structure, evaluation policy, and published high-level research.

### Military AI boundary

The project can mention military AI dialogue channels and nuclear command-and-control governance where public and relevant, but v0 should not attempt to map military AI development systems in detail.

## Implementation risks

### Vibe-coded UI

Risk: Beautiful homepage but weak data credibility.

Mitigation: Source drawer, methodology page, reliability ratings, and entity confidence should be visible in v0.

### Overbuilding the graph

Risk: The graph becomes unreadable.

Mitigation: Default to cluster views, country filters, and relationship-type filters. Do not show all nodes at once.

### Data model drift

Risk: Each AI chat creates new fields and inconsistent schemas.

Mitigation: Use the schema files in this pack as the source of truth. Make schema changes deliberately and document them.

## Open strategic questions

- Is the first audience portfolio/recruiters, AI governance researchers, or bridge-building organizations?
- Should the project publish partnership scores publicly, or keep them as internal notes?
- How much should individuals/researchers be profiled versus institutions?
- Should China be one deep-dive module or a parallel atlas with its own taxonomy?
- When should the project recruit local-language reviewers?
- Should the first launch emphasize China only, or China plus comparison pages for Japan/Korea/Singapore?
