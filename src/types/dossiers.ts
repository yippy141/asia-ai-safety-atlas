// Dossier and political-economy layer. Extends, never replaces, the core
// Entity/Source/EvidenceNote model. Every judgment carries evidence_basis.

import type { ConfidenceLevel } from "@/types";
import type { EvidenceBasis } from "@/types/interlocutors";

// Importance is per-aspect. There is deliberately no composite score and no
// overall rank anywhere in this model. Do not add one.
export type ImportanceAspect =
  | "regulatory_authority"   // can it bind others?
  | "standards_influence"    // does its text become requirements?
  | "technical_capacity"     // can it actually evaluate/build?
  | "convening_power"        // do others show up when it calls?
  | "international_interface"; // can it sit across the table?

export interface ImportanceAssessment {
  aspect: ImportanceAspect;
  band: 0 | 1 | 2 | 3;          // none / emerging / established / central
  reasoning: string;             // one sentence, claim-led
  evidence_basis: EvidenceBasis;
  source_ids: string[];
}

export interface LeadershipRole {
  person_id: string;             // must exist in people data
  person_display: string;
  role: string;                  // sourced title only
  source_ids: string[];
}

export interface OrgDossier {
  entity_id: string;             // must exist in entities
  // Claim-led one-liner: why a professional should care. Not a description.
  why_it_matters: string;
  history: { date: string; event: string; source_ids: string[] }[];
  leadership: LeadershipRole[];
  importance: ImportanceAssessment[];
  // What "safety" means in this actor's own work, one or two sentences.
  safety_conception: { text: string; evidence_basis: EvidenceBasis; source_ids: string[] };
  // Connections render from existing Relationship records; dossier adds only
  // an optional reading of them.
  connections_note?: { text: string; evidence_basis: EvidenceBasis };
  selected_outputs: { title: string; year?: string; source_id: string }[];
  engagement_fit?: {
    plausible_for: string;       // conditional wording only
    constrained_by: string;
    evidence_basis: EvidenceBasis;
  };
  open_questions: string[];
  last_verified: string;
  public_safe_to_show: boolean;
}

// ---- Political economy module (China AI+ first, generalizes later) ----

export type PEActorClass =
  | "central_ministry"
  | "provincial_government"
  | "municipal_government"
  | "central_soe"
  | "local_soe"
  | "private_national"   // e.g. frontier labs, platform firms
  | "private_local"
  | "military_affiliated"
  | "foreign_firm"
  | "financial_state";   // guidance funds, state investors

export interface PEClaim {
  id: string;
  jurisdiction: string;          // "national" | province | municipality
  actor_class: PEActorClass;
  actor_entity_id?: string;      // link when the actor is an atlas entity
  instrument: string;            // plan, pilot zone, voucher, fund, local reg
  claim: string;                 // the fact, stated plainly
  so_what: string;               // the judgment, forecaster-hedged
  safety_salience?: string;      // where safety/评测/合规 shows up, if at all
  evidence_basis: EvidenceBasis;
  confidence_level: ConfidenceLevel;
  source_ids: string[];
  last_verified: string;
  public_safe_to_show: boolean;
}

// ---- The Map (authority stack x safety spectrum) ----

export interface MapPosition {
  entity_id: string;
  // 0 = party center, 1 = state council/cabinet, 2 = ministry/agency,
  // 3 = subordinate institute/standards body, 4 = lab/university/firm
  authority_level: 0 | 1 | 2 | 3 | 4;
  // 0.0 content control ... 1.0 frontier alignment; analyst judgment,
  // so it carries a basis and a one-line reason like everything else.
  spectrum_x: number;
  placement_reasoning: string;
  evidence_basis: EvidenceBasis;
}
