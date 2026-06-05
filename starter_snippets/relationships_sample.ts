import type { Relationship } from "@/types";

export const relationships: Relationship[] = [
  {
    id: "rel-caict-aiia",
    source_entity_id: "cn-caict",
    target_entity_id: "cn-aiia",
    relationship_type: "affiliated_with",
    description: "CAICT works closely with the AI Industry Alliance of China on AI safety and governance evaluation initiatives.",
    evidence_note_ids: [],
    source_ids: ["concordia-2025"],
    confidence_level: "medium",
    sensitivity_level: "low",
    last_verified: "2026-05-26",
    public_safe_to_show: true,
  },
];
