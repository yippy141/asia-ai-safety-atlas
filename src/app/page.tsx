import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Database,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import { MapPreview } from "@/components/map/MapPreview";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { countries, entities, insights, relationships, sources } from "@/data";
import { changelogEntries } from "@/data/changelog";
import { cn } from "@/lib/utils";

export default function Home() {
  const sourceBackedEntities = entities.filter(
    (entity) => entity.source_ids.length > 0,
  ).length;
  const needsPrimarySource = entities.filter(
    (entity) => entity.needs_primary_source,
  ).length;
  const latestInsight = insights.reduce(
    (latest, insight) =>
      !latest || insight.published_at > latest.published_at ? insight : latest,
    insights[0],
  );
  const latestChangelogDate = changelogEntries.reduce(
    (latest, entry) => (entry.date > latest ? entry.date : latest),
    changelogEntries[0]?.date ?? "",
  );

  return (
    <main>
      <section className="border-b border-rule bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
              Bootstrap shell
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Mapping AI safety and governance ecosystems across China and
              Asia-Pacific.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground">
              A static-first stakeholder intelligence atlas for researchers,
              bridge-building organizations, and policy teams working from
              source-backed public evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className={cn(buttonVariants({ size: "lg" }))}
                href="/atlas"
              >
                Open atlas
                <ArrowRight />
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
                href="/methodology"
              >
                Review methodology
              </Link>
            </div>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Metric label="Entities loaded" value={entities.length} />
            <Metric
              label="Source-backed entities"
              value={sourceBackedEntities}
            />
            <Metric label="Needs primary source" value={needsPrimarySource} />
            <Metric label="Public relationships" value={relationships.length} />
            <p className="text-sm text-muted-foreground sm:col-span-2 lg:col-span-1">
              Last updated {latestChangelogDate}. See the{" "}
              <Link
                href="/changelog"
                className="font-medium text-oxblood hover:underline"
              >
                changelog
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
              The Map
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Who holds authority, and what kind of safety they do
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground">
              One fixed grid: the authority stack from party center down to
              labs and firms, against the safety spectrum from content control
              to frontier alignment. Every placement carries its reasoning.
            </p>
            <Link
              href="/map"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
            >
              Open the Map
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <Link
            href="/map"
            aria-label="Open the Map"
            className="block border border-rule bg-paper p-3 transition hover:border-oxblood/40"
          >
            <MapPreview />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <Principle
          icon={<Database />}
          title="Typed local data"
          text={`${sources.length} research-brief source records seed the shell while primary-source backfill begins.`}
        />
        <Principle
          icon={<ShieldCheck />}
          title="Conservative claims"
          text="Confidence, sensitivity, and primary-source flags are visible in the public interface."
        />
        <Principle
          icon={<GitBranch />}
          title="Relationship graph"
          text="Only public-safe relationship edges are shown, using conservative labels from the controlled taxonomy."
        />
      </section>

      {latestInsight ? (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <Card className="p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
              Latest insight
            </p>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              {latestInsight.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground">
              {latestInsight.dek}
            </p>
            <Link
              href={`/insights/${latestInsight.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
            >
              Read insight
              <ArrowRight className="size-4" />
            </Link>
          </Card>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
              Country slices
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Static country pages
            </h2>
          </div>
          <Link
            href="/sources"
            className="inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
          >
            View source register
            <BookOpen className="size-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="rounded-lg border border-rule bg-card p-5 transition hover:border-oxblood/40 "
            >
              <div className="text-sm font-medium text-muted-foreground">
                {country.region}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {country.country}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-foreground">
                {country.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-5">
      <div className="text-3xl font-semibold text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}

function Principle({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="p-5">
      <div className="flex size-9 items-center justify-center rounded-md bg-tide text-paper [&_svg]:size-4">
        {icon}
      </div>
      <h2 className="mt-4 text-base font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-foreground">{text}</p>
    </Card>
  );
}
