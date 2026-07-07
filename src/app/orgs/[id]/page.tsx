import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { entities, events, orgDossiers, relationships, sources } from "@/data";
import {
  dossierSourceIds,
  evidenceBasisLabels,
  importanceAspectLabels,
  importanceAspects,
  importanceBandLabels,
  renderableDossiers,
} from "@/lib/dossiers";
import { formatLabel } from "@/lib/taxonomy";
import type { EvidenceBasis } from "@/types/interlocutors";

type OrgPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return renderableDossiers(orgDossiers).map((dossier) => ({
    id: dossier.entity_id,
  }));
}

export const dynamicParams = false;

export default async function OrgDossierPage({ params }: OrgPageProps) {
  const { id } = await params;
  const dossier = renderableDossiers(orgDossiers).find(
    (record) => record.entity_id === id
  );
  const entity = entities.find((record) => record.id === id);

  if (!dossier || !entity) {
    notFound();
  }

  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const entityById = new Map(entities.map((record) => [record.id, record]));
  const eventById = new Map(events.map((event) => [event.id, event]));
  const dossierEntityIds = new Set(
    renderableDossiers(orgDossiers).map((record) => record.entity_id)
  );

  const appendixIds = Array.from(
    new Set([...dossierSourceIds(dossier), ...entity.source_ids])
  );

  const connections = relationships.filter(
    (relationship) =>
      relationship.public_safe_to_show &&
      (relationship.source_entity_id === id ||
        relationship.target_entity_id === id)
  );
  const connectionsByType = new Map<string, typeof connections>();
  for (const relationship of connections) {
    const list = connectionsByType.get(relationship.relationship_type) ?? [];
    list.push(relationship);
    connectionsByType.set(relationship.relationship_type, list);
  }

  const assessed = new Map(
    dossier.importance.map((assessment) => [assessment.aspect, assessment])
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/orgs"
        className="inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
      >
        <ArrowLeft className="size-4" />
        All organizations
      </Link>

      {/* 1. Identity */}
      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted">{formatLabel(entity.entity_type)}</Badge>
          <Badge variant="outline">{entity.country}</Badge>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          {entity.name_en}
        </h1>
        {entity.name_local ? (
          <p className="mt-1 text-lg text-muted-foreground">
            {entity.name_local}
          </p>
        ) : null}
        {entity.website ? (
          <a
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
            href={entity.website}
            target="_blank"
            rel="noreferrer"
          >
            Official site
            <ExternalLink className="size-4" />
          </a>
        ) : null}
      </header>

      {/* 2. Why it matters */}
      <p className="mt-6 border-l-2 border-oxblood pl-4 font-serif text-xl leading-8 text-foreground">
        {dossier.why_it_matters}
      </p>

      {/* 3. Importance */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Importance</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Assessed per aspect, band 0 to 3. There is no composite score.
        </p>
        <div className="mt-4 divide-y divide-rule border-y border-rule">
          {importanceAspects.map((aspect) => {
            const assessment = assessed.get(aspect);

            if (!assessment) {
              return (
                <div
                  key={aspect}
                  className="grid gap-2 py-4 sm:grid-cols-[200px_1fr]"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {importanceAspectLabels[aspect]}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    not assessed
                  </span>
                </div>
              );
            }

            return (
              <div
                key={aspect}
                className="grid gap-2 py-4 sm:grid-cols-[200px_1fr]"
              >
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {importanceAspectLabels[aspect]}
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <BandMeter band={assessment.band} />
                    <span className="font-mono text-xs text-muted-foreground">
                      {assessment.band} · {importanceBandLabels[assessment.band]}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm leading-6 text-foreground">
                    {assessment.reasoning}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <BasisChip basis={assessment.evidence_basis} />
                    {assessment.source_ids.map((sourceId) => (
                      <SourceChip key={sourceId} sourceId={sourceId} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. What safety means here */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">
          What safety means here
        </h2>
        <Card className="mt-4 p-5">
          <p className="text-sm leading-6 text-foreground">
            {dossier.safety_conception.text}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <BasisChip basis={dossier.safety_conception.evidence_basis} />
            {dossier.safety_conception.source_ids.map((sourceId) => (
              <SourceChip key={sourceId} sourceId={sourceId} />
            ))}
          </div>
        </Card>
      </section>

      {/* 5. Leadership */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Leadership</h2>
        {dossier.leadership.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {dossier.leadership.map((role) => (
              <Card key={role.person_id} className="p-5">
                <p className="text-base font-semibold text-foreground">
                  {role.person_display}
                </p>
                <p className="mt-1 text-sm leading-6 text-foreground">
                  {role.role}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {role.source_ids.map((sourceId) => (
                    <SourceChip key={sourceId} sourceId={sourceId} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            No leadership roles are recorded with a verifiable source.
          </p>
        )}
      </section>

      {/* 6. History */}
      {dossier.history.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">History</h2>
          <ul className="mt-4 space-y-3 border-l border-rule pl-4">
            {dossier.history.map((item) => (
              <li key={`${item.date}-${item.event}`}>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.date}
                </span>
                <p className="mt-0.5 text-sm leading-6 text-foreground">
                  {item.event}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* 7. Connections */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Connections</h2>
        {dossier.connections_note ? (
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {dossier.connections_note.text}{" "}
            <BasisChip basis={dossier.connections_note.evidence_basis} />
          </p>
        ) : null}
        {connections.length > 0 ? (
          <div className="mt-4 space-y-5">
            {Array.from(connectionsByType.entries()).map(([type, list]) => (
              <div key={type}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {formatLabel(type)}
                </h3>
                <ul className="mt-2 space-y-2">
                  {list.map((relationship) => {
                    const otherId =
                      relationship.source_entity_id === id
                        ? relationship.target_entity_id
                        : relationship.source_entity_id;
                    const otherEntity = entityById.get(otherId);
                    const otherEvent = eventById.get(otherId);
                    const label =
                      otherEntity?.name_en ?? otherEvent?.name ?? otherId;

                    return (
                      <li
                        key={relationship.id}
                        className="flex items-start gap-2 text-sm leading-6 text-foreground"
                      >
                        <ConfidenceDot level={relationship.confidence_level} />
                        <span>
                          {otherEntity && dossierEntityIds.has(otherId) ? (
                            <Link
                              href={`/orgs/${otherId}`}
                              className="font-medium text-oxblood hover:underline"
                            >
                              {label}
                            </Link>
                          ) : (
                            <span className="font-medium">{label}</span>
                          )}{" "}
                          <span className="text-muted-foreground">
                            {relationship.public_note ??
                              relationship.description}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            No public relationship records touch this organization yet.
          </p>
        )}
      </section>

      {/* 8. Selected outputs */}
      {dossier.selected_outputs.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Selected outputs
          </h2>
          <ul className="mt-4 space-y-2">
            {dossier.selected_outputs.map((output) => {
              const source = sourceById.get(output.source_id);

              return (
                <li key={output.source_id + output.title} className="text-sm leading-6">
                  {source?.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-oxblood hover:underline"
                    >
                      {output.title}
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">
                      {output.title}
                    </span>
                  )}
                  {output.year ? (
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      {output.year}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {/* 9. Engagement fit */}
      {dossier.engagement_fit ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Engagement fit
          </h2>
          <Card className="mt-4 border-dashed p-5">
            <div className="flex items-center gap-2">
              <Badge variant="warning">Assessment</Badge>
              <BasisChip basis={dossier.engagement_fit.evidence_basis} />
            </div>
            <dl className="mt-3 space-y-3 text-sm leading-6">
              <div>
                <dt className="font-medium text-foreground">Plausible for</dt>
                <dd className="text-foreground">
                  {dossier.engagement_fit.plausible_for}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Constrained by</dt>
                <dd className="text-foreground">
                  {dossier.engagement_fit.constrained_by}
                </dd>
              </div>
            </dl>
          </Card>
        </section>
      ) : null}

      {/* 10. Open questions + source appendix */}
      {dossier.open_questions.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Open questions
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
            {dossier.open_questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <details className="border-y border-rule py-4">
          <summary className="cursor-pointer text-sm font-medium text-foreground">
            Source appendix ({appendixIds.length} records)
          </summary>
          <ul className="mt-4 space-y-3">
            {appendixIds.map((sourceId) => {
              const source = sourceById.get(sourceId);
              if (!source) return null;

              return (
                <li key={sourceId} id={`src-${sourceId}`} className="text-sm">
                  <span className="font-mono text-xs text-muted-foreground">
                    {source.id}
                  </span>
                  <p className="mt-0.5 leading-6 text-foreground">
                    {source.title}
                    <span className="text-muted-foreground">
                      {" "}
                      · {source.publisher}
                      {source.publication_date
                        ? ` · ${source.publication_date}`
                        : ""}
                    </span>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 font-medium text-oxblood hover:underline"
                      >
                        open
                      </a>
                    ) : null}
                  </p>
                </li>
              );
            })}
          </ul>
        </details>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last verified {dossier.last_verified}
        </p>
      </section>
    </main>
  );
}

function BandMeter({ band }: { band: 0 | 1 | 2 | 3 }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={`h-2 w-4 rounded-sm ${
            band >= step ? "bg-tide" : "bg-rule"
          }`}
        />
      ))}
    </span>
  );
}

function BasisChip({ basis }: { basis: EvidenceBasis }) {
  const isInference =
    basis === "analyst_inference" || basis === "anonymous_reporting";

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono text-[11px] leading-4 ${
        isInference
          ? "border-dashed border-confidence-medium/60 text-confidence-medium"
          : "border-rule text-muted-foreground"
      }`}
    >
      {evidenceBasisLabels[basis] ?? basis}
    </span>
  );
}

function SourceChip({ sourceId }: { sourceId: string }) {
  return (
    <a
      href={`#src-${sourceId}`}
      className="inline-flex items-center rounded-sm border border-rule px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted-foreground hover:border-oxblood/50 hover:text-oxblood"
    >
      {sourceId}
    </a>
  );
}

function ConfidenceDot({ level }: { level: string }) {
  const color =
    level === "high"
      ? "bg-confidence-high"
      : level === "low"
        ? "bg-confidence-low"
        : "bg-confidence-medium";

  return (
    <span
      className={`mt-2 inline-block size-1.5 shrink-0 rounded-full ${color}`}
      title={`confidence: ${level}`}
    />
  );
}
