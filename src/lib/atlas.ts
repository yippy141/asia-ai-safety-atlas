import type { Entity, Source } from "@/types";
export { formatLabel } from "@/lib/taxonomy";

export function getEntitySources(entity: Entity, sources: Source[]) {
  const sourceIds = new Set(entity.source_ids);
  return sources.filter((source) => sourceIds.has(source.id));
}

export function uniqueSorted<T extends string>(values: T[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}
