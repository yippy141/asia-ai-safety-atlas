import { Card } from "@/components/ui/Card";
import { changelogEntries } from "@/data/changelog";

export default function ChangelogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Changelog
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Atlas changelog
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          Maintenance notes for public atlas data and site updates.
        </p>
      </div>

      <section className="mt-8 grid gap-4">
        {changelogEntries.map((entry) => (
          <Card key={entry.date} className="p-5">
            <time
              className="font-mono text-sm font-medium text-tide"
              dateTime={entry.date}
            >
              {entry.date}
            </time>
            <p className="mt-2 text-base leading-7 text-foreground">
              {entry.summary}
            </p>
          </Card>
        ))}
      </section>
    </main>
  );
}
