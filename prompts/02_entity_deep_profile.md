# Prompt: Tier 1 Entity Deep Profile

```text
You are building a source-backed entity profile for the Asia AI Safety Atlas.

Entity: [ENTITY NAME]
Country: [COUNTRY]
Known local-language name: [LOCAL NAME IF KNOWN]

Use primary local-language sources first. Then use English sources. Do not rely on social media unless it is the actor's own official account or is only used as a lead.

Return:
{
  "entity": {
    "id": "",
    "name_en": "",
    "name_local": "",
    "acronym": "",
    "country": "",
    "city": "",
    "entity_type": "",
    "parent_entity": "",
    "summary": "",
    "focus_areas": [],
    "safety_relevance": "",
    "governance_relevance": "",
    "technical_relevance": "",
    "international_engagement_relevance": "",
    "sensitivity_level": "low|medium|high",
    "confidence_level": "low|medium|high",
    "last_verified": "YYYY-MM-DD"
  },
  "relationships": [],
  "events": [],
  "policies_or_standards": [],
  "research_outputs": [],
  "sources": [],
  "open_questions": [],
  "translation_notes": [],
  "confidence_notes": []
}

Rules:
- Every relationship needs a source.
- Use exact original names and translated names.
- Flag ambiguity instead of guessing.
- Do not overstate frontier AI safety if the evidence is only ethics, content safety, or compliance.
```
