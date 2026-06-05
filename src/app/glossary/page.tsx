import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { glossary } from "@/data";
import { formatLabel } from "@/lib/taxonomy";

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Glossary
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          Atlas terms and editorial flags
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          Short definitions for the labels that appear across entity cards,
          country pages, source records, and relationship maps.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {glossary.map((entry) => (
          <Card key={entry.id} className="p-5">
            <h2 className="text-lg font-semibold text-slate-950">
              {entry.term}
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-700">
              {entry.definition}
            </p>
            {entry.related_focus_areas?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.related_focus_areas.map((area) => (
                  <Badge key={area} variant="outline">
                    {formatLabel(area)}
                  </Badge>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </main>
  );
}
