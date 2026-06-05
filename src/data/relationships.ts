import type { Relationship } from "@/types";

export const relationships: Relationship[] = [
  {
    "id": "rel-cac-miit-co-issues-genai-measures",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named co-issuing ministries for the Interim Measures for the Management of Generative AI Services.",
    "evidence_note_ids": [
      "en-cac-genai-joint-issuance"
    ],
    "source_ids": [
      "cac-generative-ai-measures-2023"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-deep-synthesis-provisions",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named issuers of the Deep Synthesis Provisions, together with MPS.",
    "evidence_note_ids": [
      "en-deep-synthesis-joint-issuance"
    ],
    "source_ids": [
      "cac-deep-synthesis-provisions-2022"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-labeling-measures",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC and MIIT are both named issuers of the AI-generated content labeling measures, together with MPS and NRTA.",
    "evidence_note_ids": [
      "en-labeling-measures-joint-issuance"
    ],
    "source_ids": [
      "cac-ai-content-labeling-measures-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cac-miit-co-issues-ai-standardization-guide",
    "source_entity_id": "cn-cac",
    "target_entity_id": "cn-miit",
    "relationship_type": "co_issues",
    "description": "CAC's parent office and MIIT jointly issued the 2024 national AI industry comprehensive standardization guide.",
    "evidence_note_ids": [
      "en-ai-standardization-guide-joint-issuance"
    ],
    "source_ids": [
      "cac-national-ai-standardization-guide-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-affiliated-with-miit",
    "source_entity_id": "cn-caict",
    "target_entity_id": "cn-miit",
    "relationship_type": "affiliated_with",
    "description": "CAICT's official about page states that it is a research public institution directly under MIIT.",
    "evidence_note_ids": [
      "en-caict-miit-affiliation"
    ],
    "source_ids": [
      "caict-about-us"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-cesi-affiliated-with-miit",
    "source_entity_id": "cesi",
    "target_entity_id": "cn-miit",
    "relationship_type": "affiliated_with",
    "description": "CESI's official basic-information page states that it is directly under MIIT.",
    "evidence_note_ids": [
      "en-cesi-miit-affiliation"
    ],
    "source_ids": [
      "cesi-basic-info"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc28-sc42-affiliated-with-cesi",
    "source_entity_id": "tc28-sc42",
    "target_entity_id": "cesi",
    "relationship_type": "affiliated_with",
    "description": "Official standards-administration and CESI pages both place the secretariat of SAC/TC28/SC42 at CESI.",
    "evidence_note_ids": [
      "en-tc28-sc42-secretariat-at-cesi"
    ],
    "source_ids": [
      "tc28-sc42-samr-org-page",
      "tc28-sc42-cesi-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc260-affiliated-with-cesi",
    "source_entity_id": "cn-tc260",
    "target_entity_id": "cesi",
    "relationship_type": "affiliated_with",
    "description": "TC260 shows an operational affiliation with CESI through its secretary-general placement and homepage contact-location signals, though the retrieved sources stop short of a formal administrative-subordination statement.",
    "evidence_note_ids": [
      "en-tc260-cesi-secretariat-signals"
    ],
    "source_ids": [
      "tc260-homepage",
      "tc260-committee-roster-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-establishes-aiia",
    "source_entity_id": "cn-caict",
    "target_entity_id": "aiia",
    "relationship_type": "establishes",
    "description": "CAICT stated on its official site that, acting as the secretary-general unit, it jointly initiated the establishment of AIIA. This is recorded as an establishes relation with medium confidence because the source is explicit about joint, not sole, establishment.",
    "evidence_note_ids": [
      "en-caict-aiia-founding-role"
    ],
    "source_ids": [
      "caict-aiia-founding-news-2018"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-aiia-safety-governance-committee-affiliated-with-aiia",
    "source_entity_id": "aiia-safety-governance-committee",
    "target_entity_id": "aiia",
    "relationship_type": "affiliated_with",
    "description": "Official CAICT reporting says the Safety Governance Committee was prepared relying on AIIA, which supports an AIIA affiliation while remaining more conservative than claiming a fully documented standing committee architecture.",
    "evidence_note_ids": [
      "en-aiia-safety-governance-committee-under-aiia"
    ],
    "source_ids": [
      "caict-ai-risk-governance-report-2024"
    ],
    "confidence_level": "medium",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shanghai-ai-safety-governance-lab-affiliated-with-shlab",
    "source_entity_id": "shanghai-ai-safety-and-governance-laboratory",
    "target_entity_id": "cn-shlab",
    "relationship_type": "affiliated_with",
    "description": "The government-domain repost states that the Shanghai AI Safety and Governance Laboratory was jointly established by SHLAB's Governance Research Center and another Shanghai testing center, supporting an affiliation with SHLAB.",
    "evidence_note_ids": [
      "en-shanghai-ai-safety-governance-lab-founding"
    ],
    "source_ids": [
      "shanghai-ai-safety-governance-lab-unveiling-2024"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-caict-member-of-cnaisda",
    "source_entity_id": "cn-caict",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists CAICT among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-baai-member-of-cnaisda",
    "source_entity_id": "cn-baai",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists BAAI among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-member-of-cnaisda",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "cn-cnaisda",
    "relationship_type": "member_of",
    "description": "Tsinghua's official coverage lists SHLAB among the member units of CnAISDA.",
    "evidence_note_ids": [
      "en-cnaisda-member-list"
    ],
    "source_ids": [
      "cnaisda-tsinghua-paris-side-event-2025"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-baai-maintains-flag-eval",
    "source_entity_id": "cn-baai",
    "target_entity_id": "flag-eval",
    "relationship_type": "maintains",
    "description": "BAAI's official system page lists FlagEval as the institute's open large-model evaluation platform.",
    "evidence_note_ids": [
      "en-baai-flageval-platform"
    ],
    "source_ids": [
      "baai-flageval-system-page"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-maintains-opencompass",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "opencompass",
    "relationship_type": "maintains",
    "description": "SHLAB's official news page describes OpenCompass as built by SHLAB and used as a broad evaluation system.",
    "evidence_note_ids": [
      "en-shlab-opencompass-platform"
    ],
    "source_ids": [
      "shlab-opencompass-2023"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-tc260-establishes-wg9",
    "source_entity_id": "cn-tc260",
    "target_entity_id": "tc260-wg9",
    "relationship_type": "establishes",
    "description": "SHLAB's official article states that, according to a TC260 notice, AI Security Standards Working Group WG9 was formally established.",
    "evidence_note_ids": [
      "en-shlab-wg9-established"
    ],
    "source_ids": [
      "shlab-wg9-formation-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  },
  {
    "id": "rel-shlab-chairs-wg9",
    "source_entity_id": "cn-shlab",
    "target_entity_id": "tc260-wg9",
    "relationship_type": "chairs",
    "description": "SHLAB's official article states that SHLAB director Zhou Bowen serves as head of WG9, supporting a chairs relation from SHLAB to WG9.",
    "evidence_note_ids": [
      "en-shlab-heads-wg9"
    ],
    "source_ids": [
      "shlab-wg9-formation-2026"
    ],
    "confidence_level": "high",
    "sensitivity_level": "low",
    "last_verified": "2026-06-05",
    "public_safe_to_show": true
  }
];
