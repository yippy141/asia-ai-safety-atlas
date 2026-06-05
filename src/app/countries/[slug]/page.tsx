import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EntityCard } from "@/components/atlas/EntityCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { countries, entities, sources } from "@/data";
import { getEntitySources } from "@/lib/atlas";

type CountryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export const dynamicParams = false;

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = countries.find((profile) => profile.slug === slug);

  if (!country) {
    notFound();
  }

  const countryEntities = entities.filter(
    (entity) => entity.country === country.country
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:underline"
      >
        <ArrowLeft className="size-4" />
        Back to overview
      </Link>
      <div className="mt-6 max-w-3xl">
        <Badge variant="muted">{country.region}</Badge>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          {country.country}
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          {country.summary}
        </p>
      </div>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <ProfileBlock title="Government posture" text={country.government_posture} />
        <ProfileBlock
          title="Standards and evaluation"
          text={country.standards_evaluation}
        />
        <ProfileBlock
          title="Research ecosystem"
          text={country.research_ecosystem}
        />
        <ProfileBlock
          title="International engagement"
          text={country.international_engagement}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-950">
          Seed entities
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {countryEntities.map((entity) => (
            <EntityCard
              key={entity.id}
              entity={entity}
              sources={getEntitySources(entity, sources)}
            />
          ))}
        </div>
        {countryEntities.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-stone-300 p-4 text-sm text-stone-600">
            No entity records are attached to this country page yet.
          </p>
        ) : null}
      </section>

      <section className="mt-8">
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-slate-950">
            Open questions
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
            {country.open_questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </Card>
      </section>
    </main>
  );
}

function ProfileBlock({ title, text }: { title: string; text: string }) {
  return (
    <Card className="p-5">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-stone-700">{text}</p>
    </Card>
  );
}
