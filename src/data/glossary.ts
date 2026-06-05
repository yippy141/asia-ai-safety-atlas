import type { GlossaryEntry } from "@/types";

export const glossary: GlossaryEntry[] = [
  {
    id: "aisi",
    term: "AISI",
    definition:
      "AI Safety Institute. The atlas uses this label for public institute-style bodies focused on AI safety testing, evaluation, assurance, or coordination.",
    related_focus_areas: ["frontier_ai_safety", "evaluation", "ai_assurance"],
  },
  {
    id: "confidence-level",
    term: "Confidence level",
    definition:
      "A conservative editorial estimate of how strongly the current public source set supports a record or relationship.",
  },
  {
    id: "needs-primary-source",
    term: "Needs primary source",
    definition:
      "A flag for discovery records currently backed by research briefs or synthesis sources that should be upgraded with official pages, filings, standards, papers, or event records.",
  },
  {
    id: "dialogue-channel",
    term: "Dialogue channel",
    definition:
      "A convening, event series, working group, or organization that may support cross-border AI safety and governance discussion.",
    related_focus_areas: ["international_dialogue", "dialogue_channel"],
  },
  {
    id: "public-safe-to-show",
    term: "Public safe to show",
    definition:
      "A Boolean marker used on relationships and evidence notes to avoid publishing sensitive, speculative, or insufficiently sourced claims.",
  },
];
