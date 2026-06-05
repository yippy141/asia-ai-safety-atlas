import { EntityFilters } from "@/components/atlas/EntityFilters";
import { entities, sources } from "@/data";

export default function AtlasPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Atlas
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          Source-backed entity profiles
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          Search and filter stakeholder records by country, actor type, focus
          area, and confidence level. This first slice uses local static data
          while the research model stabilizes.
        </p>
      </div>
      <EntityFilters entities={entities} sources={sources} />
    </main>
  );
}
