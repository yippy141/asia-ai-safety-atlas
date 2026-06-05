# Project Charter and MVP

## Mission

Build a public, visually polished, source-backed atlas of the AI safety, governance, and alignment landscape in China and Asia-Pacific.

The atlas should help users answer:
- Which institutions matter?
- Which researchers and policy experts are influential?
- Which standards bodies, ministries, labs, and companies shape the ecosystem?
- What are the major research and governance themes?
- How do actors relate to each other?
- Which Western and international organizations could plausibly engage them, on what topics, and with what risks?

## What makes the project differentiated

Existing AI safety maps mostly emphasize US, UK, and EU organizations. This atlas emphasizes China and Asia-Pacific political economy, local-language sources, standards systems, research groups, industry governance, and cross-border engagement channels.

## Design principle

The atlas should look like a public-interest research product: restrained, credible, source-transparent, and modular. Avoid generic AI/SaaS aesthetics.

Recommended design feel:
- Our World in Data + Foreign Affairs + intelligence dashboard
- Off-white background, graphite text, muted blue/red/gold accents
- Strong typography hierarchy
- Minimal animation
- Every card has source and confidence metadata

## MVP build order

1. Static landing page
2. Atlas entity grid
3. Search and filters
4. Source drawer
5. Entity profile pages
6. Methodology page
7. Country pages
8. Basic network graph
9. Timeline
10. Partnership explorer

## Entity scope for v0

China deep dive:
- Central government and ministries
- Standards bodies
- Government-backed evaluation institutions
- Universities and research groups
- Frontier model companies
- Safety-as-a-service companies
- AI governance think tanks
- Track 1.5/2 dialogue convenors
- Bridge-building organizations

Asia-Pacific comparison:
- Japan AISI/IPA/METI/MIC/Digital Agency and key labs
- Korea AISI/MSIT/ETRI/industry-academia consortium
- Singapore AISI/IMDA/MDDI/AI Verify/AI Singapore/NUS/NTU
- ASEAN governance documents and national regulators where relevant

Western comparator layer:
- US AISI/NIST
- UK AISI
- EU AI Office
- Frontier Model Forum
- IDAIS, Concordia AI, SAIF, CSET, Brookings, CNAS, NTI, etc.

## Success criteria for v0

The v0 is successful when a user can:
- Search for an organization or researcher.
- See a concise explanation of why they matter.
- View source-backed relationships.
- Filter by country, actor type, and safety/governance focus.
- Understand the source reliability and confidence level.
- Compare the institutional structure of China, Japan, Korea, Singapore, ASEAN, and Western comparator ecosystems.
- Identify plausible partnership avenues and risk factors.

## What not to do in v0

Do not add a database, user accounts, admin dashboard, or complex CMS until the static-first site is credible. Do not start with a beautiful map if the underlying source data is weak. Do not overbuild data ingestion automation before you have manually validated the data model.
