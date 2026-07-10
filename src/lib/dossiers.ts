import type { OrgDossier } from "@/types/dossiers";

export const importanceAspects = [
  "regulatory_authority",
  "standards_influence",
  "technical_capacity",
  "convening_power",
  "international_interface",
] as const;

export const importanceAspectLabels: Record<string, string> = {
  regulatory_authority: "Regulatory authority",
  standards_influence: "Standards influence",
  technical_capacity: "Technical capacity",
  convening_power: "Convening power",
  international_interface: "International interface",
};

export const importanceBandLabels = [
  "none",
  "emerging",
  "established",
  "central",
] as const;

export const evidenceBasisLabels: Record<string, string> = {
  official: "official",
  first_party: "first party",
  credible_reporting: "credible reporting",
  anonymous_reporting: "anonymous reporting",
  analyst_inference: "analyst judgment",
};

export function dossierSourceIds(dossier: OrgDossier): string[] {
  const ids = new Set<string>();
  for (const assessment of dossier.importance) {
    for (const id of assessment.source_ids) ids.add(id);
  }
  for (const id of dossier.safety_conception.source_ids) ids.add(id);
  for (const item of dossier.history) {
    for (const id of item.source_ids) ids.add(id);
  }
  for (const role of dossier.leadership) {
    for (const id of role.source_ids) ids.add(id);
  }
  for (const output of dossier.selected_outputs) ids.add(output.source_id);
  return Array.from(ids);
}

// Threshold rule from the spec: a dossier page renders only if the record has
// why_it_matters, at least two importance aspects, and three sources.
export function meetsDossierThreshold(dossier: OrgDossier): boolean {
  return (
    dossier.why_it_matters.trim().length > 0 &&
    dossier.importance.length >= 2 &&
    dossierSourceIds(dossier).length >= 3
  );
}

export function renderableDossiers(dossiers: OrgDossier[]): OrgDossier[] {
  return dossiers.filter(
    (dossier) => dossier.public_safe_to_show && meetsDossierThreshold(dossier)
  );
}
