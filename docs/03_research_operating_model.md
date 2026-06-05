# Research Operating Model

## Do you need to run deep research for each entity?

No. That would take ages and would create inconsistent quality. Use a batch-and-triage workflow.

The correct workflow is:

1. Start with a cluster, not an entity.
2. Extract all entities, sources, events, and relationships from that cluster.
3. Create thin profiles for many entities.
4. Triage entities by importance.
5. Deep dive only on Tier 1 entities and unclear high-value relationships.
6. Use periodic monitoring to keep records fresh.

## Research depth tiers

### Tier 0: Lead only

Use for names that appear once and may matter later.

Minimum fields:
- Name
- Local-language name if known
- Country
- Entity type
- Source URL
- Why it might matter
- Status: unverified lead

### Tier 1: Full profile

Use for core actors.

Examples: CAC, MIIT, TC260, CAICT, SHLAB, BAAI, Tsinghua I-AIIG, DeepSeek, Alibaba/Qwen, Zhipu AI, Japan AISI, Korea AISI, Singapore AISI.

Minimum fields:
- Summary
- Local-language name
- Parent/affiliations
- Key people
- AI safety/governance relevance
- Technical safety relevance
- International engagement relevance
- Notable publications/events/policies
- Relationships
- Source list with reliability ratings
- Open questions
- Last verified date

### Tier 2: Brief profile

Use for relevant but non-core actors.

Minimum fields:
- One-paragraph summary
- Tags
- 2-5 source-backed facts
- Known relationships
- Confidence level

### Tier 3: Mention-only

Use for background companies, committees, or events that matter only as part of a relationship.

Minimum fields:
- Name
- Type
- Source
- Relationship edge

## Batch workflow

### Batch A: Source-first extraction

Take one source or cluster of sources, such as:
- Concordia 2025 report
- TC260 standards roadmap
- MIIT/TC1 AI safety standards plan
- WAIC 2024 agenda
- Japan AISI official site
- Korea AISI/MSIT launch releases
- Singapore AISI/IMDA materials
- ASEAN GenAI guide

Ask an AI research assistant to extract:
- entities
- relationships
- events
- policies/standards
- research outputs
- source records
- open questions

Then manually inspect the output.

### Batch B: Cluster landscape research

Run research at cluster level:
- China standards and evaluation ecosystem
- Chinese frontier model developer safety practices
- Chinese technical AI safety research groups
- China-West Track 1.5/2 AI safety dialogues
- Japan AI safety institute and standards ecosystem
- Korea AISI and industry-academia-government consortium
- Singapore AI assurance and AISI ecosystem
- ASEAN AI governance documents and national adoption

Do not ask for “profile every entity.” Ask for a ranked queue.

### Batch C: Entity deep dive

Only after triage, run deep profiles for Tier 1 actors.

A good cadence:
- 1 cluster deep research per week
- 5 Tier 1 entity profiles per week
- 20 thin profiles per week
- 30-50 relationship edges per week

## What inputs should you upload?

For each research batch, upload or provide:

1. The current CSV data files from `/data/`.
2. The current methodology note.
3. The source or source list for the batch.
4. Any PDFs or reports to process.
5. A list of open questions.
6. A clear output format request: JSON or CSV rows, not prose only.

Useful uploads:
- Concordia AI State of AI Safety in China 2025 report.
- Concordia Chinese Technical AI Safety Database export if available.
- Official government PDFs and standards roadmaps.
- Conference agendas and speaker lists.
- Company model cards/system cards.
- AI safety institute official pages.
- Existing CSVs from this project.

## Source reliability scale

A = Primary official source: government page, official institution page, official standard, company technical report.
B = Peer-reviewed or preprint research with clear authorship, official report, standards document.
C = Reputable think tank, expert institution, or established research organization.
D = Credible media.
E = Social/community source: X, Reddit, LessWrong comments, Zhihu, WeChat reposts.
F = Unverified lead.

## Evidence rules

- A relationship edge requires direct evidence.
- Co-attendance does not mean partnership.
- A source in English about China is useful but should be cross-checked with Chinese-language sources when possible.
- A local-language source should be summarized in English but stored with original-language title and quote/note.
- Do not treat “AI ethics” as “frontier AI safety” unless the source explicitly connects it to frontier model risks, dangerous misuse, loss of control, evaluation, standards, or catastrophic risk.

## Update cadence

Weekly:
- Add sources.
- Add or update entities.
- Validate high-priority relationship edges.

Monthly:
- Refresh Tier 1 actors.
- Review broken links.
- Update last_verified dates.
- Add a changelog entry.

Quarterly:
- Reassess country profiles.
- Re-score partnership opportunities.
- Archive sources.
- Publish a short update essay.

## Output discipline for AI research agents

Never accept a prose-only report as the final output. Require:
- entity rows
- relationship rows
- source rows
- open questions
- confidence notes
- suggested follow-up searches

This keeps research compatible with the website.
