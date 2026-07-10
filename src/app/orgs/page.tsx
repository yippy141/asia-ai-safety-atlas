import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { entities, orgDossiers } from "@/data";
import { dossierSourceIds, renderableDossiers } from "@/lib/dossiers";
import { formatLabel } from "@/lib/taxonomy";

export const metadata = {
  title: "Organizations | Asia AI Safety Atlas",
};

export default function OrganizationsPage() {
  const dossiers = renderableDossiers(orgDossiers);
  const entityById = new Map(entities.map((entity) => [entity.id, entity]));

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Organizations
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Organization dossiers
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          Full dossiers exist for organizations where the source record is deep
          enough to support one: a claim about why the organization matters, at
          least two assessed importance aspects, and three or more source
          records. Organizations below that bar keep their card in the{" "}
          <Link href="/atlas" className="text-oxblood hover:underline">
            atlas
          </Link>
          .
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {dossiers.map((dossier) => {
          const entity = entityById.get(dossier.entity_id);
          if (!entity) return null;
          const sourceCount = dossierSourceIds(dossier).length;

          return (
            <Link key={dossier.entity_id} href={`/orgs/${dossier.entity_id}`}>
              <Card className="h-full p-5 transition hover:border-oxblood/50">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="muted">{formatLabel(entity.entity_type)}</Badge>
                  <Badge variant="outline">{entity.country}</Badge>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {sourceCount} sources
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                  {entity.name_en}
                </h2>
                {entity.name_local ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entity.name_local}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-6 text-foreground">
                  {dossier.why_it_matters}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
