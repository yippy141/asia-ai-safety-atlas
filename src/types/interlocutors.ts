// Interlocutor briefing layer.
// Design rule: observed facts and analyst judgment are different data types.
// evidence_basis is mandatory everywhere a claim appears. It is the product.

import type { ConfidenceLevel } from "@/types";

export type EvidenceBasis =
  | "official"            // government/institutional primary document
  | "first_party"         // the actor's own public statement or page
  | "credible_reporting"  // named-outlet or named-expert public reporting
  | "anonymous_reporting" // private or unnamed sourcing (e.g. parts of Sheehan)
  | "analyst_inference";  // our synthesis; must be labeled in UI

export type InterlocutorRole =
  | "formal_authority"    // can make or approve policy on this issue
  | "technical_operator"  // writes standards, runs tests, implements
  | "dialogue_interface"  // can formally sit in cross-border rooms
  | "knowledge_bridge";   // technical credibility + cross-border ties

export interface IssueDefinition {
  id: string;
  label: string;
  label_zh?: string;
  // What this issue means in the Chinese system, in one or two sentences.
  // This is where 安全 ambiguity gets handled per-issue, not globally.
  framing: string;
}

export interface InterlocutorAssessment {
  id: string;
  issue_id: string;
  role: InterlocutorRole;
  entity_id: string;            // must exist in src/data/entities.ts
  entity_display: string;       // denormalized for rendering
  // One sentence: why this actor, for this role, on this issue.
  rationale: string;
  // One sentence: the limitation a professional needs to know.
  caveat?: string;
  evidence_basis: EvidenceBasis;
  confidence_level: ConfidenceLevel;
  source_ids: string[];
  last_verified: string;
  public_safe_to_show: boolean;
}

export interface PersonProfile {
  id: string;
  name_en: string;
  name_local?: string;
  // Sourced roles only. No inferred influence.
  current_public_roles: { role: string; entity_id?: string; source_ids: string[] }[];
  // "Public governance frame": synthesis from public work. Never "values"
  // unless the person stated them. Always labeled analyst_inference or better.
  governance_frame?: {
    text: string;
    evidence_basis: EvidenceBasis;
    source_ids: string[];
  };
  selected_public_items?: { title: string; source_id: string }[];
  confidence_level: ConfidenceLevel;
  last_verified: string;
  open_questions?: string[];
  public_safe_to_show: boolean;
}
