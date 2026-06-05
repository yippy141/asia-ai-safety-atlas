export type EntityType =
  | "government"
  | "standards_body"
  | "ai_safety_institute"
  | "evaluation_institution"
  | "university"
  | "research_group"
  | "think_tank"
  | "company"
  | "industry_alliance"
  | "dialogue_convenor"
  | "event"
  | "policy_program"
  | "other";

export type FocusArea =
  | "frontier_ai_safety"
  | "technical_alignment"
  | "ai_governance"
  | "standards"
  | "evaluation"
  | "model_security"
  | "cybersecurity"
  | "biosecurity"
  | "content_safety"
  | "ethics"
  | "open_source_governance"
  | "international_dialogue"
  | "capacity_building";

export type ReliabilityRating = "A" | "B" | "C" | "D" | "E" | "F";
export type ConfidenceLevel = "low" | "medium" | "high";
export type SensitivityLevel = "low" | "medium" | "high";

export type RelationshipType =
  | "oversees"
  | "funds"
  | "hosts"
  | "member_of"
  | "convenes"
  | "participates_in"
  | "publishes"
  | "coauthors"
  | "signs_commitment"
  | "evaluates"
  | "standardizes"
  | "advises"
  | "partners_with"
  | "affiliated_with"
  | "regulates"
  | "invests_in"
  | "launches"
  | "certifies"
  | "provides_service_to";

export interface Entity {
  id: string;
  name_en: string;
  name_local?: string;
  acronym?: string;
  entity_type: EntityType;
  country: string;
  city?: string;
  region: string;
  website?: string;
  focus_areas: FocusArea[];
  summary: string;
  safety_relevance?: string;
  governance_relevance?: string;
  technical_relevance?: string;
  international_engagement_relevance?: string;
  sensitivity_level: SensitivityLevel;
  confidence_level: ConfidenceLevel;
  last_verified: string;
  source_ids: string[];
  tags?: string[];
  tier?: 0 | 1 | 2 | 3 | 4;
}

export interface Relationship {
  id: string;
  source_entity_id: string;
  target_entity_id: string;
  relationship_type: RelationshipType;
  description: string;
  start_date?: string;
  end_date?: string;
  confidence_level: ConfidenceLevel;
  sensitivity_level?: SensitivityLevel;
  source_ids: string[];
  last_verified: string;
  public_note?: string;
}

export interface Source {
  id: string;
  title: string;
  title_original?: string;
  url: string;
  archive_url?: string;
  source_type: string;
  publisher: string;
  author?: string;
  publication_date?: string;
  access_date: string;
  language: string;
  reliability_rating: ReliabilityRating;
  summary_note?: string;
  translation_caveats?: string;
}

export interface CountryProfile {
  slug: string;
  country: string;
  region: string;
  summary: string;
  government_posture: string;
  standards_evaluation: string;
  research_ecosystem: string;
  industry_ecosystem: string;
  international_engagement: string;
  open_questions: string[];
  source_ids: string[];
  last_verified: string;
}
