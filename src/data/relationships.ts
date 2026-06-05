import type { Relationship } from "@/types";

const chinaStandardsBrief = "report-china-standards-evaluation-2026-06-05";
const aisiBrief = "report-japan-korea-singapore-aisi-2026-06-05";
const dialogueBrief = "report-china-west-dialogue-2026-06-05";
const aseanBrief = "report-asean-genai-governance-2026-06-05";

export const relationships: Relationship[] = [
  {
    id: "rel-miit-caict-affiliated",
    source_entity_id: "cn-caict",
    target_entity_id: "cn-miit",
    relationship_type: "affiliated_with",
    description:
      "CAICT is tracked as an MIIT-affiliated evaluation and research institution. Primary-source confirmation is still needed for public copy.",
    evidence_note_ids: [],
    source_ids: [chinaStandardsBrief],
    confidence_level: "medium",
    sensitivity_level: "low",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
  {
    id: "rel-tc260-publishes-standards",
    source_entity_id: "cn-tc260",
    target_entity_id: "cn-cac",
    relationship_type: "supplements",
    description:
      "TC260 is included as a standards body whose work can supplement public AI governance implementation. This seed relationship is intentionally broad.",
    evidence_note_ids: [],
    source_ids: [chinaStandardsBrief],
    confidence_level: "low",
    sensitivity_level: "medium",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
  {
    id: "rel-ai-verify-sg-aisi-evaluation",
    source_entity_id: "sg-ai-verify-foundation",
    target_entity_id: "sg-aisi",
    relationship_type: "conducts_testing_with",
    description:
      "AI Verify Foundation and Singapore AISI are grouped as Singapore evaluation and assurance nodes in the discovery briefs. Specific collaboration claims need primary-source backfill.",
    evidence_note_ids: [],
    source_ids: [aisiBrief],
    confidence_level: "low",
    sensitivity_level: "low",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
  {
    id: "rel-asean-working-group-ai-governance",
    source_entity_id: "asean-working-group-ai-governance",
    target_entity_id: "sg-ai-verify-foundation",
    relationship_type: "participates_in",
    description:
      "Both records are included in the ASEAN generative AI governance seed slice. Direct participation details should be checked against primary sources before stronger wording.",
    evidence_note_ids: [],
    source_ids: [aseanBrief],
    confidence_level: "low",
    sensitivity_level: "low",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
  {
    id: "rel-concordia-organizes-dialogue",
    source_entity_id: "org-concordia-ai",
    target_entity_id: "event-idais",
    relationship_type: "participates_in",
    description:
      "Concordia AI is represented as a China-West dialogue ecosystem actor connected to IDAIS-style dialogue channels. Exact role wording needs canonical source support.",
    evidence_note_ids: [],
    source_ids: [dialogueBrief],
    confidence_level: "low",
    sensitivity_level: "medium",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
  {
    id: "rel-tsinghua-iaiig-ciss",
    source_entity_id: "cn-tsinghua-iaiig",
    target_entity_id: "cn-tsinghua-ciss",
    relationship_type: "affiliated_with",
    description:
      "Both entities are Tsinghua-linked governance and international security nodes included for future source-backed profile work.",
    evidence_note_ids: [],
    source_ids: [dialogueBrief],
    confidence_level: "low",
    sensitivity_level: "medium",
    last_verified: "2026-06-05",
    public_safe_to_show: true,
  },
];
