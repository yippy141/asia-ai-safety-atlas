import { Card } from "@/components/ui/Card";
import { focusAreas, relationshipTypes } from "@/lib/taxonomy";
import { formatLabel } from "@/lib/taxonomy";

const evidenceRules = [
  "Every public fact should trace to a source record.",
  "Research briefs are discovery inputs, not final authority.",
  "For non-Western actors, local-language research comes first.",
  "Relationship edges require direct evidence, not inferred proximity.",
  "Confidence ratings and open questions are preferred over overclaiming.",
];

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
        Methodology
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">
        Evidence standards for the atlas
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-foreground">
        The atlas is built as a static-first research product. The data model
        stays small and explicit until the source workflow is reliable enough
        for a database or CMS.
      </p>

      <section className="mt-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Evidence rules
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground">
            {evidenceRules.map((rule) => (
              <li key={rule} className="border-l-2 border-tide pl-3">
                {rule}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Controlled focus areas
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-rule bg-background px-2.5 py-1 text-sm text-foreground"
              >
                {formatLabel(area)}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-4">
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Conservative relationship labels
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {relationshipTypes.map((type) => (
              <span
                key={type}
                className="rounded-md border border-rule bg-card px-2.5 py-1 text-sm text-foreground"
              >
                {formatLabel(type)}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-foreground">
            The atlas avoids partnership wording unless a source explicitly
            supports it. Broad proximity is captured with open questions or
            lower-confidence notes instead of stronger edge labels.
          </p>
        </Card>
      </section>
    </main>
  );
}
