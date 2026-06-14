import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { insights } from "@/data";

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Insights
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Insights</h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          Analyst notes built from the Atlas source register. Each note states
          the source ids it uses and preserves uncertainty where the public
          record is thin.
        </p>
      </div>

      <section className="mt-8 grid gap-4">
        {insights.map((insight) => (
          <Card key={insight.id} className="p-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant="warning">{insight.confidence_level}</Badge>
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">
              {insight.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-700">
              {insight.dek}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <time
                className="font-mono text-sm font-medium text-teal-800"
                dateTime={insight.published_at}
              >
                {insight.published_at}
              </time>
              <Link
                href={`/insights/${insight.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:underline"
              >
                Read insight
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
