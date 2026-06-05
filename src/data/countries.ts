import type { CountryProfile } from "@/types";

export const countries: CountryProfile[] = [
  {
    slug: "china",
    country: "China",
    region: "East Asia",
    summary:
      "PR 1 tracks China as a dense standards, evaluation, governance, frontier-model, and dialogue ecosystem. Most entries still need canonical Chinese-language primary sources.",
    government_posture:
      "Seed records include CAC and MIIT as high-level governance and industry policy anchors.",
    standards_evaluation:
      "TC260 and CAICT are included as initial standards, assurance, and evaluation nodes.",
    research_ecosystem:
      "SHLAB, BAAI, and Tsinghua-linked centers are included as discovery-stage research and policy nodes.",
    industry_ecosystem:
      "Chinese frontier developer coverage is intentionally deferred beyond this shell, except for research institutions with model-development relevance tags.",
    international_engagement:
      "Dialogue-channel entries are included with low-confidence summaries pending primary-source backfill.",
    open_questions: [
      "Which primary sources should anchor public claims for Beijing AISI and CnAISDA?",
      "How should frontier-model developer records be separated from technical safety research records?",
    ],
    source_ids: [
      "report-china-standards-evaluation-2026-06-05",
      "report-technical-research-groups-2026-06-05",
      "report-china-west-dialogue-2026-06-05",
    ],
    last_verified: "2026-06-05",
  },
  {
    slug: "japan",
    country: "Japan",
    region: "East Asia",
    summary:
      "PR 1 includes Japan primarily through its AISI node so AISI comparisons and country pages can be tested.",
    government_posture:
      "Government posture fields are placeholders until Japan-specific primary sources are added.",
    standards_evaluation:
      "Japan AISI is the initial evaluation and safety-institute entry.",
    research_ecosystem:
      "Research ecosystem expansion is deferred to later PRs.",
    industry_ecosystem:
      "Industry ecosystem expansion is deferred to later PRs.",
    international_engagement:
      "Japan is included in the regional AISI comparison brief.",
    open_questions: [
      "Which official pages should anchor Japan AISI mandate and workstream claims?",
    ],
    source_ids: ["report-japan-korea-singapore-aisi-2026-06-05"],
    last_verified: "2026-06-05",
  },
  {
    slug: "south-korea",
    country: "South Korea",
    region: "East Asia",
    summary:
      "PR 1 includes South Korea through a Korea AISI seed node for regional institute comparison.",
    government_posture:
      "Government posture fields are placeholders pending primary-source backfill.",
    standards_evaluation:
      "Korea AISI is the initial safety-institute and evaluation record.",
    research_ecosystem:
      "Research ecosystem expansion is deferred to later PRs.",
    industry_ecosystem:
      "Industry ecosystem expansion is deferred to later PRs.",
    international_engagement:
      "Korea is included in the regional AISI comparison brief.",
    open_questions: [
      "Which official Korean-language sources should anchor the Korea AISI profile?",
    ],
    source_ids: ["report-japan-korea-singapore-aisi-2026-06-05"],
    last_verified: "2026-06-05",
  },
  {
    slug: "singapore",
    country: "Singapore",
    region: "Southeast Asia",
    summary:
      "PR 1 includes Singapore through AISI and AI Verify Foundation records for assurance, testing, and regional governance mapping.",
    government_posture:
      "Singapore is represented as a governance and assurance ecosystem node rather than a full policy profile at this stage.",
    standards_evaluation:
      "Singapore AISI and AI Verify Foundation are the initial evaluation and assurance records.",
    research_ecosystem:
      "Research ecosystem expansion is deferred to later PRs.",
    industry_ecosystem:
      "Industry ecosystem expansion is deferred to later PRs.",
    international_engagement:
      "Singapore appears in both the AISI and ASEAN governance seed briefs.",
    open_questions: [
      "Which AI Verify and Singapore AISI primary sources should be promoted to reliability A/B?",
    ],
    source_ids: [
      "report-japan-korea-singapore-aisi-2026-06-05",
      "report-asean-genai-governance-2026-06-05",
    ],
    last_verified: "2026-06-05",
  },
  {
    slug: "regional",
    country: "Regional",
    region: "Southeast Asia",
    summary:
      "The regional profile holds ASEAN-wide governance records until country-specific entries are expanded.",
    government_posture:
      "ASEAN-level coordination is represented through the Working Group on AI Governance seed record.",
    standards_evaluation:
      "Regional standards and assurance work is represented conservatively pending primary-source backfill.",
    research_ecosystem:
      "Research ecosystem expansion is deferred to later PRs.",
    industry_ecosystem:
      "Industry ecosystem expansion is deferred to later PRs.",
    international_engagement:
      "Regional governance and capacity-building channels are the focus for PR 1.",
    open_questions: [
      "How should ASEAN-wide entities be linked to individual country pages without implying national ownership?",
    ],
    source_ids: ["report-asean-genai-governance-2026-06-05"],
    last_verified: "2026-06-05",
  },
];
