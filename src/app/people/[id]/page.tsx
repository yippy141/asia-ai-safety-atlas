import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge, confidenceVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { entities, orgDossiers, people, sources } from "@/data";
import { evidenceBasisLabels, renderableDossiers } from "@/lib/dossiers";
import { renderablePeople } from "@/lib/people";

type PersonPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return renderablePeople(people).map((person) => ({ id: person.id }));
}

export const dynamicParams = false;

export default async function PersonPage({ params }: PersonPageProps) {
  const { id } = await params;
  const person = renderablePeople(people).find((record) => record.id === id);

  if (!person) {
    notFound();
  }

  const entityById = new Map(entities.map((entity) => [entity.id, entity]));
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const dossierEntityIds = new Set(
    renderableDossiers(orgDossiers).map((dossier) => dossier.entity_id)
  );
  const appearsIn = renderableDossiers(orgDossiers).filter((dossier) =>
    dossier.leadership.some((role) => role.person_id === person.id)
  );
  const citedSourceIds = Array.from(
    new Set([
      ...person.current_public_roles.flatMap((role) => role.source_ids),
      ...(person.governance_frame?.source_ids ?? []),
      ...(person.selected_public_items?.map((item) => item.source_id) ?? []),
    ])
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/orgs"
        className="inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
      >
        <ArrowLeft className="size-4" />
        Organizations
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted">Person</Badge>
          <Badge variant={confidenceVariant(person.confidence_level)}>
            confidence: {person.confidence_level}
          </Badge>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          {person.name_en}
        </h1>
        {person.name_local ? (
          <p className="mt-1 text-lg text-muted-foreground">
            {person.name_local}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Roles listed here are limited to what a verifiable public source
          states. The atlas records no photos, no biography, and no inferred
          views.
        </p>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Sourced roles</h2>
        <div className="mt-4 space-y-4">
          {person.current_public_roles.map((role) => {
            const entity = role.entity_id
              ? entityById.get(role.entity_id)
              : undefined;

            return (
              <Card key={role.role} className="p-5">
                <p className="text-sm leading-6 text-foreground">{role.role}</p>
                {entity ? (
                  <p className="mt-2 text-sm">
                    {dossierEntityIds.has(entity.id) ? (
                      <Link
                        href={`/orgs/${entity.id}`}
                        className="font-medium text-oxblood hover:underline"
                      >
                        {entity.name_en}
                      </Link>
                    ) : (
                      <span className="font-medium text-foreground">
                        {entity.name_en}
                      </span>
                    )}
                    {entity.name_local ? (
                      <span className="ml-2 text-muted-foreground">
                        {entity.name_local}
                      </span>
                    ) : null}
                  </p>
                ) : null}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {role.source_ids.map((sourceId) => {
                    const source = sourceById.get(sourceId);

                    return (
                      <span
                        key={sourceId}
                        title={source?.title}
                        className="inline-flex items-center rounded-sm border border-rule px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted-foreground"
                      >
                        {sourceId}
                      </span>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {person.governance_frame ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">
            Public governance frame
          </h2>
          <Card className="mt-4 border-dashed p-5">
            <span className="inline-flex items-center rounded-sm border border-dashed border-confidence-medium/60 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-confidence-medium">
              {evidenceBasisLabels[person.governance_frame.evidence_basis] ??
                person.governance_frame.evidence_basis}
            </span>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {person.governance_frame.text}
            </p>
          </Card>
        </section>
      ) : null}

      {person.selected_public_items && person.selected_public_items.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">
            Selected public items
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {person.selected_public_items.map((item) => {
              const source = sourceById.get(item.source_id);

              return (
                <li key={item.source_id + item.title}>
                  {source?.url ? (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-oxblood hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {appearsIn.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">
            Appears in dossiers
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {appearsIn.map((dossier) => {
              const entity = entityById.get(dossier.entity_id);

              return (
                <li key={dossier.entity_id}>
                  <Link
                    href={`/orgs/${dossier.entity_id}`}
                    className="font-medium text-oxblood hover:underline"
                  >
                    {entity?.name_en ?? dossier.entity_id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {person.open_questions && person.open_questions.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">
            Open questions
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
            {person.open_questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-8">
        <details className="border-y border-rule py-4">
          <summary className="cursor-pointer text-sm font-medium text-foreground">
            Source appendix ({citedSourceIds.length} records)
          </summary>
          <ul className="mt-4 space-y-3">
            {citedSourceIds.map((sourceId) => {
              const source = sourceById.get(sourceId);
              if (!source) return null;

              return (
                <li key={sourceId} className="text-sm">
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
          Last verified {person.last_verified}
        </p>
      </section>
    </main>
  );
}
