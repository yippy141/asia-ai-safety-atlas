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
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Sources
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Source register
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          Research briefs remain discovery records. Official primary sources
          cover China standards and evaluation bodies; the Japan, Korea, and
          Singapore AI safety institutes; China-West dialogue and event
          records; Chinese frontier-developer public disclosures; ASEAN
          governance implementation; technical safety research groups;
          Western and Asia-Pacific comparators; and the instruments behind
          the China AI+ briefing.
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
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
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
              <Badge variant="muted" className="font-mono">
                {source.reliability_rating}
              </Badge>
              <Badge variant="outline">{source.language}</Badge>
              <Badge variant="outline">{formatLabel(source.source_type)}</Badge>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {source.title}
            </h3>
            <dl className="mt-3 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div>
                <dt className="font-medium text-foreground">Publisher</dt>
                <dd className="mt-1">{source.publisher}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Publication</dt>
                <dd className="mt-1">
                  {source.publication_date ?? "Not recorded"}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Accessed</dt>
                <dd className="mt-1">{source.access_date}</dd>
              </div>
            </dl>
            {source.summary_note ? (
              <p className="mt-4 text-sm leading-6 text-foreground">
                {source.summary_note}
              </p>
            ) : null}
            {source.url ? (
              <a
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
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
