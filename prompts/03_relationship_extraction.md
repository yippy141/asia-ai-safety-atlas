# Prompt: Relationship Extraction

```text
You are extracting relationship edges for a public knowledge graph.

Input: [PASTE SOURCE TEXT OR URL SUMMARY]

Extract only explicit relationships. Do not infer partnership from co-attendance.

Controlled vocabulary:
oversee, fund, host, member_of, convene, participate_in, publish, coauthor, sign_commitment, evaluate, standardize, advise, partner_with, affiliated_with, regulate, invest_in, launch, certify, provide_service_to.

For each relationship, return:
- source_entity
- target_entity
- relationship_type
- description
- date or date range
- exact supporting quote or paraphrase note
- source URL
- source language
- confidence: high/medium/low
- reason for confidence
- public_safe_to_show: yes/no

Also return entities that need new profile records.
```
