import { z } from "zod";
import {
  confidenceLevels,
  entityTypes,
  focusAreas,
  relationshipTypes,
  reliabilityRatings,
  sensitivityLevels,
  sourceTypes,
} from "./taxonomy.ts";
import type { Entity, Event, EvidenceNote, Relationship, Source } from "@/types";

export const focusAreaSchema = z.enum(focusAreas);
export const confidenceLevelSchema = z.enum(confidenceLevels);
export const sensitivityLevelSchema = z.enum(sensitivityLevels);
export const entityTypeSchema = z.enum(entityTypes);
export const relationshipTypeSchema = z.enum(relationshipTypes);
export const sourceTypeSchema = z.enum(sourceTypes);
export const reliabilityRatingSchema = z.enum(reliabilityRatings);

const tierSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);

export const entitySchema = z.object({
  id: z.string().min(1),
  name_en: z.string().min(1),
  name_local: z.string().optional(),
  acronym: z.string().optional(),
  entity_type: entityTypeSchema,
  country: z.string().min(1),
  city: z.string().optional(),
  region: z.string().min(1),
  website: z.string().url().optional(),
  summary: z.string().min(1),
  focus_areas: z.array(focusAreaSchema).min(1),
  tags: z.array(z.string().min(1)),
  source_ids: z.array(z.string().min(1)).min(1),
  confidence_level: confidenceLevelSchema,
  sensitivity_level: sensitivityLevelSchema,
  last_verified: z.string().min(1),
  tier: tierSchema,
  needs_primary_source: z.boolean().optional(),
  open_questions: z.array(z.string().min(1)).optional(),
  public_summary: z.string().optional(),
  safety_relevance: z.string().optional(),
  governance_relevance: z.string().optional(),
  technical_relevance: z.string().optional(),
  international_engagement_relevance: z.string().optional(),
  evidence_note_ids: z.array(z.string().min(1)).optional(),
  public_status: z.enum(["public", "internal", "hold"]).optional(),
  internal_note: z.string().optional(),
});

export const sourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  title_original: z.string().optional(),
  url: z.string().url().optional(),
  archive_url: z.string().url().optional(),
  publisher: z.string().min(1),
  author: z.string().optional(),
  publication_date: z.string().optional(),
  access_date: z.string().min(1),
  language: z.string().min(1),
  source_type: sourceTypeSchema,
  reliability_rating: reliabilityRatingSchema,
  summary_note: z.string().optional(),
  translation_caveats: z.string().optional(),
});

export const relationshipSchema = z.object({
  id: z.string().min(1),
  source_entity_id: z.string().min(1),
  target_entity_id: z.string().min(1),
  relationship_type: relationshipTypeSchema,
  description: z.string().min(1),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  evidence_note_ids: z.array(z.string().min(1)),
  source_ids: z.array(z.string().min(1)).min(1),
  confidence_level: confidenceLevelSchema,
  sensitivity_level: sensitivityLevelSchema,
  last_verified: z.string().min(1),
  public_safe_to_show: z.boolean(),
  public_note: z.string().optional(),
  internal_note: z.string().optional(),
});

export const evidenceNoteSchema = z.object({
  id: z.string().min(1),
  source_id: z.string().min(1),
  claim_text: z.string().min(1),
  evidence_quote: z.string().optional(),
  evidence_paraphrase: z.string().optional(),
  original_language_quote: z.string().optional(),
  translation_note: z.string().optional(),
  page_or_section: z.string().optional(),
  confidence_level: confidenceLevelSchema,
  public_safe_to_show: z.boolean(),
});

export const eventSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  name_original: z.string().optional(),
  event_type: z.string().min(1),
  date: z.string().optional(),
  location: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  summary: z.string().min(1),
  organizer_entity_ids: z.array(z.string()).optional(),
  participant_entity_ids: z.array(z.string()).optional(),
  organizer_entity_ids_or_names: z.array(z.string().min(1)).optional(),
  participant_entity_ids_or_names: z.array(z.string().min(1)).optional(),
  source_ids: z.array(z.string().min(1)).min(1),
  evidence_note_ids: z.array(z.string()).optional(),
  confidence_level: confidenceLevelSchema,
  sensitivity_level: sensitivityLevelSchema,
  last_verified: z.string().min(1),
  public_safe_to_show: z.boolean(),
});

export const policyOrStandardSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  title_original: z.string().optional(),
  issuing_entity_ids: z.array(z.string()).default([]),
  jurisdiction: z.string().optional(),
  policy_type: z.string().min(1),
  publication_date: z.string().optional(),
  effective_date: z.string().optional(),
  summary: z.string().min(1),
  focus_areas: z.array(focusAreaSchema).default([]),
  source_ids: z.array(z.string()).default([]),
  evidence_note_ids: z.array(z.string()).optional(),
  confidence_level: confidenceLevelSchema,
  sensitivity_level: sensitivityLevelSchema,
  last_verified: z.string().min(1),
});

export const researchOutputSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  title_original: z.string().optional(),
  output_type: z.string().min(1),
  author_entity_ids: z.array(z.string()).optional(),
  publication_date: z.string().optional(),
  summary: z.string().min(1),
  focus_areas: z.array(focusAreaSchema).default([]),
  source_ids: z.array(z.string()).default([]),
  evidence_note_ids: z.array(z.string()).optional(),
  confidence_level: confidenceLevelSchema,
  sensitivity_level: sensitivityLevelSchema,
  last_verified: z.string().min(1),
});

export const countryProfileSchema = z.object({
  slug: z.string().min(1),
  country: z.string().min(1),
  region: z.string().min(1),
  summary: z.string().min(1),
  government_posture: z.string().min(1),
  standards_evaluation: z.string().min(1),
  research_ecosystem: z.string().min(1),
  industry_ecosystem: z.string().min(1),
  international_engagement: z.string().min(1),
  open_questions: z.array(z.string().min(1)),
  source_ids: z.array(z.string().min(1)),
  last_verified: z.string().min(1),
});

export type AtlasData = {
  entities: Entity[];
  relationships: Relationship[];
  sources: Source[];
  evidenceNotes: EvidenceNote[];
  events?: Event[];
};

export function validateAtlasData({
  entities,
  relationships,
  sources,
  evidenceNotes,
  events = [],
}: AtlasData) {
  const errors: string[] = [];
  collectSchemaErrors("Entity", entities, entitySchema, errors);
  collectSchemaErrors("Relationship", relationships, relationshipSchema, errors);
  collectSchemaErrors("Source", sources, sourceSchema, errors);
  collectSchemaErrors("Evidence note", evidenceNotes, evidenceNoteSchema, errors);
  collectSchemaErrors("Event", events, eventSchema, errors);

  const entityIds = new Set(entities.map((entity) => entity.id));
  const eventIds = new Set(events.map((event) => event.id));
  const sourceIds = new Set(sources.map((source) => source.id));
  const evidenceNoteIds = new Set(evidenceNotes.map((note) => note.id));
  const sourcesById = new Map(sources.map((source) => [source.id, source]));
  const eventRelationshipTypes = new Set([
    "hosts",
    "co_hosts",
    "organizes",
    "participates_in",
  ]);

  collectDuplicateIds("Entity", entities, errors);
  collectDuplicateIds("Relationship", relationships, errors);
  collectDuplicateIds("Source", sources, errors);
  collectDuplicateIds("Evidence note", evidenceNotes, errors);
  collectDuplicateIds("Event", events, errors);

  for (const entity of entities) {
    if (entity.tier === 1) {
      if (!entity.last_verified) {
        errors.push(`Tier 1 entity ${entity.id} is missing last_verified.`);
      }

      if (!entity.confidence_level) {
        errors.push(`Tier 1 entity ${entity.id} is missing confidence_level.`);
      }

      if (!entity.sensitivity_level) {
        errors.push(`Tier 1 entity ${entity.id} is missing sensitivity_level.`);
      }

      if (entity.source_ids.length === 0) {
        errors.push(`Tier 1 entity ${entity.id} must have at least one source_id.`);
      }
    }

    if (entity.needs_primary_source === false) {
      const canonicalSourceCount = entity.source_ids.filter((sourceId) => {
        const source = sourcesById.get(sourceId);

        return (
          source &&
          source.source_type !== "research_brief" &&
          (source.reliability_rating === "A" || source.reliability_rating === "B")
        );
      }).length;

      if (canonicalSourceCount < 2) {
        errors.push(
          `Entity ${entity.id} sets needs_primary_source to false but has fewer than two good canonical sources.`
        );
      }
    }

    for (const sourceId of entity.source_ids) {
      if (!sourceIds.has(sourceId)) {
        errors.push(`Entity ${entity.id} references missing source ${sourceId}.`);
      }
    }

    for (const noteId of entity.evidence_note_ids ?? []) {
      if (!evidenceNoteIds.has(noteId)) {
        errors.push(
          `Entity ${entity.id} references missing evidence note ${noteId}.`
        );
      }
    }
  }

  for (const relationship of relationships) {
    if (
      relationship.public_safe_to_show &&
      (relationship.evidence_note_ids ?? []).length === 0
    ) {
      errors.push(
        `Public relationship ${relationship.id} must reference at least one evidence note.`
      );
    }

    if (!entityIds.has(relationship.source_entity_id)) {
      errors.push(
        `Relationship ${relationship.id} references missing source entity ${relationship.source_entity_id}.`
      );
    }

    const targetIsEntity = entityIds.has(relationship.target_entity_id);
    const targetIsEvent = eventIds.has(relationship.target_entity_id);

    if (!targetIsEntity && !targetIsEvent) {
      errors.push(
        `Relationship ${relationship.id} references missing target entity or event ${relationship.target_entity_id}.`
      );
    }

    if (
      targetIsEvent &&
      !eventRelationshipTypes.has(relationship.relationship_type)
    ) {
      errors.push(
        `Relationship ${relationship.id} targets an event but uses non-event relationship type ${relationship.relationship_type}.`
      );
    }

    for (const sourceId of relationship.source_ids) {
      if (!sourceIds.has(sourceId)) {
        errors.push(
          `Relationship ${relationship.id} references missing source ${sourceId}.`
        );
      }
    }

    for (const noteId of relationship.evidence_note_ids ?? []) {
      if (!evidenceNoteIds.has(noteId)) {
        errors.push(
          `Relationship ${relationship.id} references missing evidence note ${noteId}.`
        );
      }
    }
  }

  for (const note of evidenceNotes) {
    if (!sourceIds.has(note.source_id)) {
      errors.push(
        `Evidence note ${note.id} references missing source ${note.source_id}.`
      );
    }
  }

  for (const event of events) {
    for (const sourceId of event.source_ids) {
      if (!sourceIds.has(sourceId)) {
        errors.push(`Event ${event.id} references missing source ${sourceId}.`);
      }
    }

    for (const noteId of event.evidence_note_ids ?? []) {
      if (!evidenceNoteIds.has(noteId)) {
        errors.push(
          `Event ${event.id} references missing evidence note ${noteId}.`
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Atlas data validation failed:\n${errors.join("\n")}`);
  }
}

function collectSchemaErrors<T>(
  label: string,
  records: T[],
  schema: z.ZodType,
  errors: string[]
) {
  for (const record of records) {
    const result = schema.safeParse(record);

    if (!result.success) {
      const id = hasId(record) ? record.id : "unknown";
      for (const issue of result.error.issues) {
        errors.push(
          `${label} ${id} failed schema at ${issue.path.join(".") || "record"}: ${issue.message}`
        );
      }
    }
  }
}

function collectDuplicateIds<T extends { id: string }>(
  label: string,
  records: T[],
  errors: string[]
) {
  const seen = new Set<string>();
  for (const record of records) {
    if (seen.has(record.id)) {
      errors.push(`${label} ${record.id} uses a duplicate id.`);
    }
    seen.add(record.id);
  }
}

function hasId(value: unknown): value is { id: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string"
  );
}
