import { countries } from "../src/data/countries.ts";
import { entities } from "../src/data/entities.ts";
import { evidenceNotes } from "../src/data/evidenceNotes.ts";
import { relationships } from "../src/data/relationships.ts";
import { sources } from "../src/data/sources.ts";
import {
  countryProfileSchema,
  validateAtlasData,
} from "../src/lib/validation.ts";

const errors: string[] = [];

try {
  validateAtlasData({
    entities,
    relationships,
    sources,
    evidenceNotes,
  });
} catch (error) {
  errors.push(error instanceof Error ? error.message : String(error));
}

const sourceIds = new Set(sources.map((source) => source.id));

for (const country of countries) {
  const result = countryProfileSchema.safeParse(country);

  if (!result.success) {
    for (const issue of result.error.issues) {
      errors.push(
        `Country ${country.slug} failed schema at ${issue.path.join(".") || "record"}: ${issue.message}`
      );
    }
  }

  for (const sourceId of country.source_ids) {
    if (!sourceIds.has(sourceId)) {
      errors.push(
        `Country ${country.slug} references missing source ${sourceId}.`
      );
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  [
    "Atlas data validation passed:",
    `${entities.length} entities`,
    `${relationships.length} relationships`,
    `${sources.length} sources`,
    `${countries.length} country profiles`,
  ].join(" ")
);
