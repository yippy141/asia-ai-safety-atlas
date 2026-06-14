import { statSync } from "node:fs";
import path from "node:path";
import { FileDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const citationLine =
  "Yip, JinHua. Asia AI Safety Atlas. 2026. https://aisafety.jhyip.com. Accessed [date].";

const dataFiles = [
  {
    name: "entities.json",
    href: "/data/entities.json",
    description: "JSON export of atlas entity records.",
  },
  {
    name: "entities.csv",
    href: "/data/entities.csv",
    description: "CSV export of atlas entity records.",
  },
  {
    name: "sources.json",
    href: "/data/sources.json",
    description: "JSON export of source register records.",
  },
  {
    name: "sources.csv",
    href: "/data/sources.csv",
    description: "CSV export of source register records.",
  },
  {
    name: "relationships.json",
    href: "/data/relationships.json",
    description: "JSON export of public relationship records.",
  },
  {
    name: "relationships.csv",
    href: "/data/relationships.csv",
    description: "CSV export of public relationship records.",
  },
];

export default function DataPage() {
  const files = dataFiles.map((file) => ({
    ...file,
    size: getFileSize(file.name),
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Data
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Download atlas data
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          Researchers can download the atlas entities, sources, and public
          relationships as JSON or CSV files generated from the typed local
          data.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {files.map((file) => (
          <Card key={file.name} className="flex flex-col p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-mono text-base font-semibold text-foreground">
                  {file.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {file.description}
                </p>
              </div>
              <span className="rounded-md border border-rule bg-background px-2.5 py-1 text-sm text-foreground">
                {file.size}
              </span>
            </div>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-5 self-start"
              )}
              href={file.href}
              download
            >
              <FileDown />
              Download
            </a>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-5">
          <h2 className="text-xl font-semibold text-foreground">License</h2>
          <p className="mt-3 text-sm leading-6 text-foreground">
            Data is released under CC BY 4.0. You may reuse it with
            attribution.
          </p>
        </Card>
        <Card className="p-5">
          <h2 className="text-xl font-semibold text-foreground">Citation</h2>
          <pre className="mt-3 overflow-x-auto rounded-md border border-rule bg-background p-4 font-mono text-sm leading-6 text-foreground">{citationLine}</pre>
          <p className="mt-3 text-sm leading-6 text-foreground">
            The atlas is versioned through its changelog. Cite the access date.
          </p>
        </Card>
      </section>
    </main>
  );
}

function getFileSize(filename: string) {
  const filePath = path.join(process.cwd(), "public", "data", filename);
  const bytes = statSync(filePath).size;

  return formatBytes(bytes);
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
