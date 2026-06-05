export const entityTypes = [
  "government",
  "standards_body",
  "ai_safety_institute",
  "evaluation_institution",
  "university",
  "research_group",
  "think_tank",
  "company",
  "industry_alliance",
  "dialogue_convenor",
  "event",
  "policy_program",
  "other",
] as const;

export const focusAreas = [
  "frontier_ai_safety",
  "technical_alignment",
  "ai_governance",
  "standards",
  "evaluation",
  "model_security",
  "cybersecurity",
  "biosecurity",
  "content_safety",
  "ethics",
  "open_source_governance",
  "international_dialogue",
  "capacity_building",
  "ai_assurance",
  "red_teaming",
  "agent_safety",
  "dangerous_capability_evaluation",
  "open_model_governance",
  "policy_regulation",
  "technical_safety_research",
  "testing_infrastructure",
  "dialogue_channel",
  "frontier_model_developer",
] as const;

export const relationshipTypes = [
  "oversees",
  "hosts",
  "member_of",
  "publishes",
  "co_issues",
  "maintains",
  "establishes",
  "chairs",
  "operates",
  "organizes",
  "co_hosts",
  "participates_in",
  "conducts_testing_with",
  "supplements",
  "adopts",
  "evaluates",
  "certifies",
  "affiliated_with",
] as const;

export const sourceTypes = [
  "research_brief",
  "primary_source",
  "policy_document",
  "standard",
  "news",
  "academic_paper",
  "website",
  "public_filing",
] as const;

export const confidenceLevels = ["low", "medium", "high"] as const;
export const sensitivityLevels = ["low", "medium", "high"] as const;
export const reliabilityRatings = ["A", "B", "C", "D", "E", "F"] as const;

export function formatLabel(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
