import Fuse from "fuse.js";
import { uniqueSorted } from "@/lib/atlas";
import type { ConfidenceLevel, Entity, EntityType, FocusArea } from "@/types";

export type EntityFilterState = {
  country?: string;
  entity_type?: EntityType;
  focus_area?: FocusArea;
  confidence?: ConfidenceLevel;
};

export function searchEntities(entities: Entity[], query: string) {
  if (!query.trim()) return entities;

  const fuse = new Fuse(entities, {
    keys: ["name_en", "name_local", "acronym", "summary", "tags"],
    threshold: 0.32,
    ignoreLocation: true,
  });

  return fuse.search(query).map((result) => result.item);
}

export function filterEntities(
  entities: Entity[],
  filters: EntityFilterState
) {
  return entities.filter((entity) => {
    if (filters.country && entity.country !== filters.country) return false;
    if (filters.entity_type && entity.entity_type !== filters.entity_type) {
      return false;
    }
    if (filters.focus_area && !entity.focus_areas.includes(filters.focus_area)) {
      return false;
    }
    if (filters.confidence && entity.confidence_level !== filters.confidence) {
      return false;
    }

    return true;
  });
}

export function getEntityFilterOptions(entities: Entity[]) {
  return {
    countries: uniqueSorted(entities.map((entity) => entity.country)),
    entityTypes: uniqueSorted(entities.map((entity) => entity.entity_type)),
    focusAreas: uniqueSorted(entities.flatMap((entity) => entity.focus_areas)),
    confidenceLevels: uniqueSorted(
      entities.map((entity) => entity.confidence_level)
    ),
  };
}
