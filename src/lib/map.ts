import type { EntityType } from "@/types";

export const authorityBandLabels = [
  "Party center",
  "State Council",
  "Ministries and agencies",
  "Institutes and standards bodies",
  "Labs, universities, firms",
] as const;

export type SectorClass = {
  id: string;
  label: string;
  color: string; // CSS variable reference, from the fixed token set only
};

const sectorClasses: SectorClass[] = [
  { id: "state", label: "State and regulators", color: "var(--governance)" },
  { id: "standards", label: "Standards bodies", color: "var(--tide)" },
  {
    id: "evaluation",
    label: "Evaluation institutes and platforms",
    color: "var(--frontier)",
  },
  { id: "industry", label: "Industry and alliances", color: "var(--risk)" },
  {
    id: "research",
    label: "Universities and think tanks",
    color: "var(--confidence-high)",
  },
];

export function sectorClassOf(entityType: EntityType): SectorClass {
  switch (entityType) {
    case "government":
      return sectorClasses[0];
    case "standards_body":
    case "standards_committee":
    case "working_group":
      return sectorClasses[1];
    case "evaluation_institution":
    case "evaluation_platform":
    case "ai_safety_institute":
      return sectorClasses[2];
    case "industry_alliance":
    case "company":
      return sectorClasses[3];
    default:
      return sectorClasses[4];
  }
}

export function sectorLegend(usedIds: Set<string>): SectorClass[] {
  return sectorClasses.filter((sector) => usedIds.has(sector.id));
}
