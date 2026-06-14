"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { EntityCard } from "@/components/atlas/EntityCard";
import { Button } from "@/components/ui/Button";
import { getEntitySources } from "@/lib/atlas";
import {
  filterEntities,
  getEntityFilterOptions,
  searchEntities,
} from "@/lib/filters";
import { formatLabel } from "@/lib/taxonomy";
import type { ConfidenceLevel, Entity, EntityType, FocusArea, Source } from "@/types";

type EntityFiltersProps = {
  entities: Entity[];
  sources: Source[];
};

const ALL = "all";

export function EntityFilters({ entities, sources }: EntityFiltersProps) {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(ALL);
  const [entityType, setEntityType] = useState(ALL);
  const [focusArea, setFocusArea] = useState(ALL);
  const [confidence, setConfidence] = useState(ALL);

  const options = useMemo(() => getEntityFilterOptions(entities), [entities]);

  const visibleEntities = useMemo(() => {
    const searched = searchEntities(entities, query);

    return filterEntities(searched, {
      country: country === ALL ? undefined : country,
      entity_type:
        entityType === ALL ? undefined : (entityType as EntityType),
      focus_area: focusArea === ALL ? undefined : (focusArea as FocusArea),
      confidence:
        confidence === ALL ? undefined : (confidence as ConfidenceLevel),
    });
  }, [confidence, country, entityType, focusArea, entities, query]);

  function resetFilters() {
    setQuery("");
    setCountry(ALL);
    setEntityType(ALL);
    setFocusArea(ALL);
    setConfidence(ALL);
  }

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-rule bg-card p-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(220px,1.4fr)_repeat(4,minmax(150px,1fr))_auto]">
          <label className="relative block">
            <span className="sr-only">Search entities</span>
            <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search names, summaries, tags"
              className="h-10 w-full rounded-md border border-rule bg-card pl-9 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-tide focus:ring-2 focus:ring-tide/30"
            />
          </label>
          <FilterSelect
            value={country}
            onChange={setCountry}
            label="Country"
            options={options.countries}
          />
          <FilterSelect
            value={entityType}
            onChange={setEntityType}
            label="Actor type"
            options={options.entityTypes}
          />
          <FilterSelect
            value={focusArea}
            onChange={setFocusArea}
            label="Focus area"
            options={options.focusAreas}
          />
          <FilterSelect
            value={confidence}
            onChange={setConfidence}
            label="Confidence"
            options={options.confidenceLevels}
          />
          <Button variant="ghost" size="icon" onClick={resetFilters}>
            <X />
            <span className="sr-only">Reset filters</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {visibleEntities.length}
          </span>{" "}
          of {entities.length} entities
        </p>
        <p className="text-sm text-muted-foreground">
          {sources.length} source records loaded locally
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleEntities.map((entity) => (
          <EntityCard
            key={entity.id}
            entity={entity}
            sources={getEntitySources(entity, sources)}
          />
        ))}
      </div>
    </section>
  );
}

function FilterSelect({
  value,
  onChange,
  label,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-md border border-rule bg-card px-3 text-sm text-ink outline-none transition focus:border-tide focus:ring-2 focus:ring-tide/30"
      >
        <option value={ALL}>{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {formatLabel(option)}
          </option>
        ))}
      </select>
    </label>
  );
}
