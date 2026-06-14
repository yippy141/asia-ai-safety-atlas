import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, confidenceVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { insights } from "@/data";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/insights"
        className="text-sm font-medium text-oxblood hover:underline"
      >
        Back to insights
      </Link>

      <article className="mt-6">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={confidenceVariant(insight.confidence_level)}
            className="font-mono"
          >
            {insight.confidence_level}
          </Badge>
          <time
            className="font-mono text-sm font-medium text-tide"
            dateTime={insight.published_at}
          >
            {insight.published_at}
          </time>
        </div>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          {insight.title}
        </h1>
        <p className="mt-4 font-serif text-lg leading-8 text-foreground">
          {insight.dek}
        </p>

        <div className="mt-8 space-y-5 font-serif text-lg leading-8 text-foreground">
          {insight.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <Card className="mt-10 p-5">
        <h2 className="text-xl font-semibold text-foreground">Evidence used</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Entity IDs
            </h3>
            <ul className="mt-3 grid gap-2">
              {insight.entity_ids.map((id) => (
                <li key={id} className="font-mono text-sm text-foreground">
                  {id}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Source IDs
            </h3>
            <ul className="mt-3 grid gap-2">
              {insight.source_ids.map((id) => (
                <li key={id} className="font-mono text-sm text-foreground">
                  {id}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </main>
  );
}
