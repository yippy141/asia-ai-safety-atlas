import Fuse from "fuse.js";
import type { Entity, FocusArea } from "@/types";

export function searchEntities(entities: Entity[], query: string) {
  if (!query.trim()) return entities;
  const fuse = new Fuse(entities, {
    keys: ["name_en", "name_local", "acronym", "summary", "tags"],
    threshold: 0.32,
  });
  return fuse.search(query).map((result) => result.item);
}

export function filterEntities(
  entities: Entity[],
  filters: { country?: string; entity_type?: string; focus_area?: string; confidence?: string }
) {
  return entities.filter((entity) => {
    if (filters.country && entity.country !== filters.country) return false;
    if (filters.entity_type && entity.entity_type !== filters.entity_type) return false;
    if (filters.focus_area && !entity.focus_areas.includes(filters.focus_area as FocusArea)) return false;
    if (filters.confidence && entity.confidence_level !== filters.confidence) return false;
    return true;
  });
}
