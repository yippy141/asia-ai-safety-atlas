import type { Insight } from "@/types";

export const insights: Insight[] = [
  {
    id: "where-public-record-resists",
    slug: "where-the-public-record-resists",
    title: "Where the public record resists",
    dek: "Evidence thinness is not just a gap. It tells readers which claims the Atlas can settle, which it can only bracket, and where lab-level public records lag institutional records.",
    summary:
      "The Atlas should not make every actor look equally grounded. ETRI and Shanghai Qi Zhi now have official records that support narrow claims. The RUC Xiting Wang group remains a thinner case, visible through a conference bio but not yet through a stronger first-party lab record.",
    published_at: "2026-06-14",
    last_verified: "2026-06-14",
    confidence_level: "medium",
    entity_ids: [
      "etri-korea",
      "shanghai-qi-zhi-institute",
      "ruc-xiting-wang-group",
    ],
    source_ids: [
      "kor-aisi-vision-mission",
      "kor-etri-aisi-page",
      "shanghai-qizhi-institute-introduction-2026",
      "cnaisda-shanghai-qizhi-side-event-2025",
      "src-ruc-xiting-bio",
    ],
    tags: [
      "evidence",
      "source-integrity",
      "China",
      "South Korea",
      "research-groups",
    ],
    body: [
      "Public evidence in the Asia AI safety ecosystem is uneven. That is not a defect to smooth over. It is one of the things the Atlas is meant to show. A directory can collapse institutional home pages, event writeups, conference bios, and failed searches into the same level of apparent certainty. A source-backed atlas should not.",
      "The three records in this note show the gradient. Korea AISI is the clearest case. The Korea AI Safety Institute's own mission page establishes the institute's role around risk response, evaluation, research, and cooperation. ETRI's institutional page gives the host context. Together, those records are strong enough to treat ETRI as the public institutional home now visible in reviewed sources. The open question is not whether Korea AISI exists. It is whether the current ETRI embedding remains the long-term structure.",
      "Shanghai Qi Zhi is also better supported than the first backfill pass suggested, but the support is narrower. The institute's own introduction grounds its institutional identity. Its official CnAISDA side-event article connects it to China-facing international dialogue around AI safety research institutions. That is enough to support a cautious role in the Atlas. It is not enough to import broader IDAIS relationship claims until the exact URLs behind those claims are repaired.",
      "The RUC Xiting Wang group sits on a thinner layer of public evidence. The current register has a conference bio saying Wang works on large-model interpretability and safety alignment. That is relevant, but it is not the same as an official lab page, project page, or institutional profile tying a group to specific benchmarks, tools, or standing research programs. The Atlas therefore keeps the record at medium confidence and leaves the primary-source flag open.",
      "The pattern matters. Public institutions and formal events often leave official pages that can be checked. Research groups are different. Their public surface may be a conference profile, a publication list, or nothing durable at all. In that environment, absence is not proof that work is unimportant. It is proof that the public record cannot yet carry a stronger claim.",
      "For readers, the useful signal is the boundary. The Atlas can say where official sources establish an institution, where an event page supports a dialogue role, and where a group is only visible through secondary or conference-facing traces. It should keep those distinctions visible. The purpose is not to make the map look complete. It is to make its confidence legible.",
    ],
  },
];
