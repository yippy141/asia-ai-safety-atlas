export interface ChangelogEntry {
  date: string;
  summary: string;
}

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-06-14",
    summary:
      'First analyst insight published: "Where the public record resists."',
  },
  {
    date: "2026-06-12",
    summary:
      "Primary-source backfill: 18 entities re-grounded in official sources; 32 source records added or confirmed.",
  },
  {
    date: "2026-06-12",
    summary: "Public data downloads added. Changelog started.",
  },
];
