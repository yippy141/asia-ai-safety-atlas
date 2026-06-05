import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { sources } from "@/data";
import { formatLabel } from "@/lib/taxonomy";

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Sources
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          Source register
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          PR 1 starts with research briefs as structured discovery records.
          Public claims should be upgraded with canonical primary sources where
          possible.
        </p>
      </div>

      <div className="mt-8 grid gap-4">
        {sources.map((source) => (
          <Card key={source.id} className="p-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant="muted">{source.reliability_rating}</Badge>
              <Badge variant="outline">{source.language}</Badge>
              <Badge variant="outline">{formatLabel(source.source_type)}</Badge>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-slate-950">
              {source.title}
            </h2>
            <dl className="mt-3 grid gap-3 text-sm text-stone-600 sm:grid-cols-3">
              <div>
                <dt className="font-medium text-stone-900">Publisher</dt>
                <dd className="mt-1">{source.publisher}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-900">Publication</dt>
                <dd className="mt-1">{source.publication_date ?? "Not recorded"}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-900">Accessed</dt>
                <dd className="mt-1">{source.access_date}</dd>
              </div>
            </dl>
            {source.summary_note ? (
              <p className="mt-4 text-sm leading-6 text-stone-700">
                {source.summary_note}
              </p>
            ) : null}
            {source.url ? (
              <a
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:underline"
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                Open source
                <ExternalLink className="size-4" />
              </a>
            ) : null}
          </Card>
        ))}
      </div>
    </main>
  );
}
