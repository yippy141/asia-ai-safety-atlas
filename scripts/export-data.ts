import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { entities } from "../src/data/entities.ts";
import { relationships } from "../src/data/relationships.ts";
import { sources } from "../src/data/sources.ts";
import type { Entity, Relationship, Source } from "../src/types/index.ts";

type ExportRecord = Record<string, unknown>;

const outputDir = path.join(process.cwd(), "public", "data");

const entityFields: (keyof Entity)[] = [
  "id",
  "name_en",
  "name_local",
  "acronym",
  "entity_type",
  "country",
  "city",
  "region",
  "website",
  "summary",
  "focus_areas",
  "tags",
  "source_ids",
  "confidence_level",
  "sensitivity_level",
  "last_verified",
  "tier",
  "needs_primary_source",
  "open_questions",
  "public_summary",
  "safety_relevance",
  "governance_relevance",
  "technical_relevance",
  "international_engagement_relevance",
  "evidence_note_ids",
  "public_status",
  "internal_note",
];

const sourceFields: (keyof Source)[] = [
  "id",
  "title",
  "title_original",
  "url",
  "archive_url",
  "publisher",
  "author",
  "publication_date",
  "access_date",
  "language",
  "source_type",
  "reliability_rating",
  "summary_note",
  "translation_caveats",
];

const relationshipFields: (keyof Relationship)[] = [
  "id",
  "source_entity_id",
  "target_entity_id",
  "relationship_type",
  "description",
  "start_date",
  "end_date",
  "evidence_note_ids",
  "source_ids",
  "confidence_level",
  "sensitivity_level",
  "last_verified",
  "public_safe_to_show",
  "public_note",
  "internal_note",
];

const exportsToWrite = [
  { filename: "entities", rows: entities, fields: entityFields },
  { filename: "sources", rows: sources, fields: sourceFields },
  { filename: "relationships", rows: relationships, fields: relationshipFields },
];

function serializeCsv(rows: ExportRecord[], fields: string[]) {
  const header = fields.map(quoteCsvValue).join(",");
  const body = rows.map((row) =>
    fields.map((field) => quoteCsvValue(formatCsvValue(row[field]))).join(",")
  );

  return [header, ...body].join("\n") + "\n";
}

function formatCsvValue(value: unknown) {
  if (value === undefined || value === null) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item)).join("; ");
  }

  return String(value);
}

function quoteCsvValue(value: unknown) {
  const stringValue = String(value);
  return `"${stringValue.replaceAll('"', '""')}"`;
}

await mkdir(outputDir, { recursive: true });

for (const exportItem of exportsToWrite) {
  const jsonPath = path.join(outputDir, `${exportItem.filename}.json`);
  const csvPath = path.join(outputDir, `${exportItem.filename}.csv`);

  await writeFile(jsonPath, JSON.stringify(exportItem.rows, null, 2) + "\n");
  await writeFile(
    csvPath,
    serializeCsv(
      exportItem.rows as unknown as ExportRecord[],
      exportItem.fields as string[]
    )
  );
}

console.log(
  [
    "Exported atlas public data:",
    `${entities.length} entities`,
    `${sources.length} sources`,
    `${relationships.length} relationships`,
  ].join(" ")
);
