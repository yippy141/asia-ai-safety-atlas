import type {
  confidenceLevels,
  entityTypes,
  focusAreas,
  relationshipTypes,
  reliabilityRatings,
  sensitivityLevels,
  sourceTypes,
} from "@/lib/taxonomy";

export type EntityType = (typeof entityTypes)[number];
export type FocusArea = (typeof focusAreas)[number];
export type RelationshipType = (typeof relationshipTypes)[number];
export type SourceType = (typeof sourceTypes)[number];

export type ReliabilityRating = (typeof reliabilityRatings)[number];
export type ConfidenceLevel = (typeof confidenceLevels)[number];
export type SensitivityLevel = (typeof sensitivityLevels)[number];
export type PublicStatus = "public" | "internal" | "hold";

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
  summary: string;
  focus_areas: FocusArea[];
  tags: string[];
  source_ids: string[];
  confidence_level: ConfidenceLevel;
  sensitivity_level: SensitivityLevel;
  last_verified: string;
  tier: 0 | 1 | 2 | 3 | 4;
  needs_primary_source?: boolean;
  open_questions?: string[];
  public_summary?: string;
  safety_relevance?: string;
  governance_relevance?: string;
  technical_relevance?: string;
  international_engagement_relevance?: string;
  evidence_note_ids?: string[];
  public_status?: PublicStatus;
  internal_note?: string;
}

export interface Relationship {
  id: string;
  source_entity_id: string;
  target_entity_id: string;
  relationship_type: RelationshipType;
  description: string;
  start_date?: string;
  end_date?: string;
  evidence_note_ids: string[];
  source_ids: string[];
  confidence_level: ConfidenceLevel;
  sensitivity_level: SensitivityLevel;
  last_verified: string;
  public_safe_to_show: boolean;
  public_note?: string;
  internal_note?: string;
}

export interface Source {
  id: string;
  title: string;
  title_original?: string;
  url?: string;
  archive_url?: string;
  publisher: string;
  author?: string;
  publication_date?: string;
  access_date: string;
  language: string;
  source_type: SourceType;
  reliability_rating: ReliabilityRating;
  summary_note?: string;
  translation_caveats?: string;
}

export interface EvidenceNote {
  id: string;
  source_id: string;
  claim_text: string;
  evidence_quote?: string;
  evidence_paraphrase?: string;
  original_language_quote?: string;
  translation_note?: string;
  page_or_section?: string;
  confidence_level: ConfidenceLevel;
  public_safe_to_show: boolean;
}

export interface Event {
  id: string;
  name: string;
  name_original?: string;
  event_type: string;
  date?: string;
  location?: string;
  country?: string;
  city?: string;
  start_date?: string;
  end_date?: string;
  summary: string;
  organizer_entity_ids?: string[];
  participant_entity_ids?: string[];
  organizer_entity_ids_or_names?: string[];
  participant_entity_ids_or_names?: string[];
  source_ids: string[];
  evidence_note_ids?: string[];
  confidence_level: ConfidenceLevel;
  sensitivity_level: SensitivityLevel;
  last_verified: string;
  public_safe_to_show: boolean;
}

export interface PolicyOrStandard {
  id: string;
  title: string;
  title_original?: string;
  issuing_entity_ids: string[];
  jurisdiction?: string;
  policy_type: string;
  publication_date?: string;
  effective_date?: string;
  summary: string;
  focus_areas: FocusArea[];
  source_ids: string[];
  evidence_note_ids?: string[];
  confidence_level: ConfidenceLevel;
  sensitivity_level: SensitivityLevel;
  last_verified: string;
}

export interface ResearchOutput {
  id: string;
  title: string;
  title_original?: string;
  output_type: string;
  author_entity_ids?: string[];
  publication_date?: string;
  summary: string;
  focus_areas: FocusArea[];
  tags?: string[];
  source_ids: string[];
  evidence_note_ids?: string[];
  confidence_level: ConfidenceLevel;
  sensitivity_level: SensitivityLevel;
  last_verified: string;
}

export interface EngagementOpportunity {
  id: string;
  title: string;
  entity_ids: string[];
  summary: string;
  public_note?: string;
  internal_note?: string;
  safety_overlap: "low" | "medium" | "high";
  transparency: "low" | "medium" | "high";
  optics_risk: "low" | "medium" | "high";
  dual_use_sensitivity: SensitivityLevel;
  practical_next_step?: string;
  source_ids: string[];
  evidence_note_ids?: string[];
  confidence_level: ConfidenceLevel;
  last_verified: string;
  public_safe_to_show: boolean;
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

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  related_focus_areas?: FocusArea[];
}
