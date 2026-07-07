import type { PersonProfile } from "@/types/interlocutors";

// Sourced roles only. Person profiles whose roles could not be traced to a
// verified source record are left out rather than included unsourced.
export const people: PersonProfile[] = [
  {
    id: "zhou-bowen",
    name_en: "Zhou Bowen",
    name_local: "周伯文",
    current_public_roles: [
      {
        role: "Director and chief scientist, Shanghai Artificial Intelligence Laboratory",
        entity_id: "cn-shlab",
        source_ids: ["shlab-wg9-formation-2026"],
      },
      {
        role: "Head of the AI Security Standards Working Group (WG9) under TC260",
        entity_id: "tc260-wg9",
        source_ids: ["shlab-wg9-formation-2026"],
      },
    ],
    confidence_level: "high",
    last_verified: "2026-07-07",
    open_questions: [
      "Deputy leads of WG9 named in unverified references (CNCERT and CAICT figures) await a resolvable source before they can be recorded.",
    ],
    public_safe_to_show: true,
  },
];
