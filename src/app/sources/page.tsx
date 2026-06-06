import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { sources } from "@/data";
import { formatLabel } from "@/lib/taxonomy";

export default function SourcesPage() {
  const researchBriefs = sources.filter(
    (source) => source.source_type === "research_brief"
  );
  const corroboratingSources = sources.filter(
    (source) => source.source_type === "news"
  );
  const primarySources = sources.filter(
    (source) =>
      source.source_type !== "research_brief" && source.source_type !== "news"
  );

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
          Research briefs remain discovery records. Official primary sources now
          include the PR 2A China standards/evaluation backfill and the PR 2B
          Japan, Korea, and Singapore AISI comparison backfill. PR 2C adds a
          filtered China-West dialogue and event-layer source set; PR 2D adds
          Chinese frontier-developer public-disclosure sources; PR 2E adds ASEAN
          governance implementation and Southeast Asia policy sources; PR 2F
          adds technical safety research group and research-output sources.
        </p>
      </div>

      <SourceSection
        title="Official primary sources"
        description="Official regulations, standards, institutional pages, announcements, and reports used for public claims."
        sources={primarySources}
      />
      <SourceSection
        title="Corroborating public sources"
        description="Non-official public reporting used only where primary-source retrieval is incomplete and the claim remains low-risk."
        sources={corroboratingSources}
      />
      <SourceSection
        title="Research briefs"
        description="Discovery and synthesis records retained for provenance, not final public-claim authority."
        sources={researchBriefs}
      />
    </main>
  );
}

function SourceSection({
  title,
  description,
  sources,
}: {
  title: string;
  description: string;
  sources: typeof import("@/data").sources;
}) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
        </div>
        <Badge variant="muted">{sources.length} records</Badge>
      </div>
      <div className="mt-4 grid gap-4">
        {sources.map((source) => (
          <Card key={source.id} className="p-5">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={
                  source.source_type === "research_brief"
                    ? "warning"
                    : source.source_type === "news"
                      ? "muted"
                      : "success"
                }
              >
                {getSourceBadgeLabel(source.source_type)}
              </Badge>
              <Badge variant="muted">{source.reliability_rating}</Badge>
              <Badge variant="outline">{source.language}</Badge>
              <Badge variant="outline">{formatLabel(source.source_type)}</Badge>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              {source.title}
            </h3>
            <dl className="mt-3 grid gap-3 text-sm text-stone-600 sm:grid-cols-3">
              <div>
                <dt className="font-medium text-stone-900">Publisher</dt>
                <dd className="mt-1">{source.publisher}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-900">Publication</dt>
                <dd className="mt-1">
                  {source.publication_date ?? "Not recorded"}
                </dd>
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
    </section>
  );
}

function getSourceBadgeLabel(sourceType: string) {
  if (sourceType === "research_brief") {
    return "Research brief";
  }

  if (sourceType === "news") {
    return "Corroborating";
  }

  return "Official primary";
}
