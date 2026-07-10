import {
  AuthorityMap,
  type MapEdge,
  type MapNode,
} from "@/components/map/AuthorityMap";
import { entities, mapPositions, orgDossiers, relationships } from "@/data";
import {
  importanceAspectLabels,
  importanceBandLabels,
  renderableDossiers,
} from "@/lib/dossiers";
import { sectorClassOf, sectorLegend } from "@/lib/map";
import { formatLabel } from "@/lib/taxonomy";

export const metadata = {
  title: "Map | Asia AI Safety Atlas",
};

function firstSentence(text: string) {
  const match = text.match(/^.*?[.。](?:\s|$)/);
  return match ? match[0].trim() : text;
}

export default function MapPage() {
  const entityById = new Map(entities.map((entity) => [entity.id, entity]));
  const dossierByEntityId = new Map(
    renderableDossiers(orgDossiers).map((dossier) => [dossier.entity_id, dossier])
  );

  const nodes: MapNode[] = [];

  for (const position of mapPositions) {
    const entity = entityById.get(position.entity_id);
    if (!entity) continue;
    const sector = sectorClassOf(entity.entity_type);
    const dossier = dossierByEntityId.get(position.entity_id);

    nodes.push({
      id: entity.id,
      name: entity.name_en,
      nameLocal: entity.name_local,
      acronym: entity.acronym,
      country: entity.country,
      sectorId: sector.id,
      sectorLabel: sector.label,
      sectorColor: sector.color,
      band: position.authority_level,
      x: position.spectrum_x,
      evidenceCount: entity.source_ids.length,
      oneLiner: entity.public_summary ?? firstSentence(entity.summary),
      whyItMatters: dossier?.why_it_matters,
      topAspects:
        dossier?.importance
          .slice()
          .sort((a, b) => b.band - a.band)
          .slice(0, 3)
          .map((assessment) => ({
            label: importanceAspectLabels[assessment.aspect],
            band: assessment.band,
            bandLabel: importanceBandLabels[assessment.band],
          })) ?? [],
      placementReasoning: position.placement_reasoning,
      hasDossier: Boolean(dossier),
    });
  }

  const nodeIds = new Set(nodes.map((node) => node.id));
  const edges: MapEdge[] = relationships
    .filter(
      (relationship) =>
        relationship.public_safe_to_show &&
        nodeIds.has(relationship.source_entity_id) &&
        nodeIds.has(relationship.target_entity_id)
    )
    .map((relationship) => ({
      id: relationship.id,
      sourceId: relationship.source_entity_id,
      targetId: relationship.target_entity_id,
      typeLabel: formatLabel(relationship.relationship_type),
      confidence: relationship.confidence_level,
      description: relationship.public_note ?? relationship.description,
    }));

  const countries = Array.from(new Set(nodes.map((node) => node.country)));
  const legend = sectorLegend(new Set(nodes.map((node) => node.sectorId)));

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          The Map
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Who holds authority, and what kind of safety they do
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          Each organization sits at its level in the authority stack, from the
          party center down to labs and firms, and along the safety spectrum
          from content control to frontier alignment. Node size reflects how
          many source records back the organization.
        </p>
      </div>

      <div className="mt-8">
        <AuthorityMap
          nodes={nodes}
          edges={edges}
          countries={countries}
          legend={legend}
        />
      </div>
    </main>
  );
}
