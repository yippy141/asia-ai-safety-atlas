import type { CountryProfile } from "@/types";

export const countries: CountryProfile[] = [
  {
    slug: "china",
    country: "China",
    region: "East Asia",
    summary:
      "PR 2A backfills China's standards and evaluation slice with official Chinese-language primary sources spanning CAC/MIIT rules, TC260 standards work, CAICT benchmarks, CESI standards infrastructure, SHLAB/OpenCompass, BAAI/FlagEval, and China-side dialogue networks.",
    government_posture:
      "CAC and MIIT are now backed by official co-issued rules and the 2024 national AI standardization guide. The profile still distinguishes CAC's online-information governance role from MIIT's standards, industry, and affiliated-institution role.",
    standards_evaluation:
      "TC260, TC28/SC42, CAICT, CESI, CSTC, MIIT/TC1, WG9, OpenCompass, FlagEval, and related benchmark or working-group nodes are represented with primary source IDs where available.",
    research_ecosystem:
      "SHLAB and BAAI are upgraded with official sources for evaluation infrastructure and safety/governance activities. Tsinghua-linked dialogue and policy nodes remain discovery-stage outside this standards/evaluation backfill.",
    industry_ecosystem:
      "AIIA is added as an industry-alliance platform because official CAICT sources link it to AI safety commitments, risk-management work, and AI safety benchmark activity.",
    international_engagement:
      "CnAISDA is updated from official Chinese institutional coverage as an international-dialogue network rather than a demonstrated domestic frontier-model testing regulator.",
    open_questions: [
      "How should CAC and the Central Cyberspace Affairs Commission Office be modeled when source text names one or the other?",
      "Which benchmark systems should become standalone profile pages as the atlas expands?",
      "Which official sources, if any, establish domestic testing or audit mandates for dialogue-network entities?",
    ],
    source_ids: [
      "report-china-standards-evaluation-2026-06-05",
      "report-technical-research-groups-2026-06-05",
      "report-china-west-dialogue-2026-06-05",
      "cac-generative-ai-measures-2023",
      "cac-national-ai-standardization-guide-2024",
      "tc260-genai-service-security-requirements-2024",
      "tc260-ai-safety-governance-framework-2024",
      "caict-about-us",
      "caict-ai-risk-governance-report-2024",
      "caict-fangsheng-benchmark-report-2024",
      "cesi-basic-info",
      "cesi-qiusuo-benchmark-2024",
      "shlab-wg9-formation-2026",
      "baai-flageval-system-page",
      "cnaisda-tsinghua-paris-side-event-2025",
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
