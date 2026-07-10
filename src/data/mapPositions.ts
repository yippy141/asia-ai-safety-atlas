import type { MapPosition } from "@/types/dossiers";

// One record per entity that appears on the Map. Coverage rule from the
// build spec: every entity with a rendered dossier, plus ministries and
// standards bodies whose records justify a placement. x placements are
// analyst judgments; each carries its reasoning. Entities whose records
// cannot justify an x placement are left off and logged in BUILD_REPORT.md.
export const mapPositions: MapPosition[] = [
  {
    entity_id: "cn-cac",
    authority_level: 2,
    spectrum_x: 0.1,
    placement_reasoning:
      "All four of its recorded binding instruments govern information services: recommendation algorithms, deep synthesis, generative AI services, and content labeling. That is the content-control end of the spectrum.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cn-miit",
    authority_level: 2,
    spectrum_x: 0.3,
    placement_reasoning:
      "Co-issuer on the content rules, but its own recorded output centers on industrial standardization and testing, which pulls it toward the middle of the spectrum.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cn-most",
    authority_level: 2,
    spectrum_x: 0.45,
    placement_reasoning:
      "Its one sourced output is the 2019 responsible-AI principles: an ethics and governance frame, neither content enforcement nor frontier evaluation. Thin record; placement is provisional.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cn-tc260",
    authority_level: 3,
    spectrum_x: 0.35,
    placement_reasoning:
      "Its recorded documents split between content-adjacent work (labeling methods, generative service security tied to the CAC rules) and lifecycle model-security framing, placing it left of center.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "tc260-wg9",
    authority_level: 3,
    spectrum_x: 0.55,
    placement_reasoning:
      "Its remit on record is AI security standard research and drafting with a frontier-lab scientist as group head: model security and measurement rather than content governance.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cesi",
    authority_level: 3,
    spectrum_x: 0.4,
    placement_reasoning:
      "Its recorded outputs are model evaluation standards and benchmark systems: capability measurement inside the formal standards apparatus, without a content-enforcement role.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cn-caict",
    authority_level: 3,
    spectrum_x: 0.45,
    placement_reasoning:
      "Its benchmarks and commitment frameworks span content safety and model safety in roughly equal measure, which lands it at the center of the spectrum.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "miit-tc1",
    authority_level: 3,
    spectrum_x: 0.35,
    placement_reasoning:
      "A ministry-level AI standardization committee; its recorded role is industrial standards architecture, slightly left of center and away from frontier evaluation.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "tc28-sc42",
    authority_level: 3,
    spectrum_x: 0.4,
    placement_reasoning:
      "The national AI subcommittee's recorded role is general AI standardization with CESI as secretariat; no content-enforcement or frontier-evaluation lean in the record.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "aiia",
    authority_level: 4,
    spectrum_x: 0.45,
    placement_reasoning:
      "An industry alliance, not a state organ, so it sits at the industry layer even though a ministry institute runs its secretariat. Its safety commitments and benchmark cover both content and model safety.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "opencompass",
    authority_level: 4,
    spectrum_x: 0.7,
    placement_reasoning:
      "An open model-capability evaluation platform with safety and trustworthiness dimensions: frontier-evaluation work, though not alignment research as such.",
    evidence_basis: "analyst_inference",
  },
  {
    entity_id: "cn-tsinghua-ciss",
    authority_level: 4,
    spectrum_x: 0.65,
    placement_reasoning:
      "Its recorded activity treats AI risk as an international-security problem worked through track-2 dialogue: far from domestic content governance, adjacent to but not itself frontier-alignment research.",
    evidence_basis: "analyst_inference",
  },
];
