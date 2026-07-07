import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  entities,
  orgDossiers,
  peClaims,
  peOpenQuestions,
  sources,
} from "@/data";
import { evidenceBasisLabels, renderableDossiers } from "@/lib/dossiers";
import { peActorClassLabels, peActorClassOrder, publicPeClaims } from "@/lib/pe";
import type { PEClaim } from "@/types/dossiers";
import type { EvidenceBasis } from "@/types/interlocutors";

export const metadata = {
  title: "China AI+ briefing | Asia AI Safety Atlas",
};

// Instrument chain: which claims sit at which level of the stack. The
// division-of-labor observation is structural, not an instrument, so it
// appears only in the actor breakdown below.
const chainColumns: { title: string; note: string; claimIds: string[] }[] = [
  {
    title: "The central plan",
    note: "Party-state mandates that everything below cites.",
    claimIds: [
      "pe-state-council-ai-plus-opinion",
      "pe-ai-plus-global-cooperation",
      "pe-ai-safety-governance-framework-2",
    ],
  },
  {
    title: "Ministry, SOE, and financing actions",
    note: "How the center executes and pays for the mandate.",
    claimIds: [
      "pe-ai-plus-manufacturing",
      "pe-sasac-central-soe-action",
      "pe-soe-model-compute-buildout",
      "pe-national-ai-industry-fund",
      "pe-boc-compute-loan",
      "pe-pilot-zone-designations",
      "pe-caict-benchmark-apparatus",
      "pe-foreign-investment-negative-finding",
    ],
  },
  {
    title: "Local implementation",
    note: "Provinces and cities competing to deliver it.",
    claimIds: [
      "pe-shanghai-ai-regulation",
      "pe-shanghai-voucher-measures",
      "pe-shenzhen-sez-regulation",
      "pe-shenzhen-pioneer-city-vouchers",
      "pe-beijing-ai-plus-plans",
      "pe-zhejiang-hangzhou-measures",
      "pe-jiangsu-ai-plus-plan",
      "pe-sichuan-scenario-plan-safety-rd",
      "pe-gba-hetao-joint-safety-lab",
      "pe-guangdong-opc-plan",
      "pe-fujian-cross-strait",
      "pe-compute-center-duplication",
    ],
  },
];

export default function ChinaAiPlusBriefingPage() {
  const claims = publicPeClaims(peClaims);
  const claimById = new Map(claims.map((claim) => [claim.id, claim]));
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const entityById = new Map(entities.map((entity) => [entity.id, entity]));
  const dossierEntityIds = new Set(
    renderableDossiers(orgDossiers).map((dossier) => dossier.entity_id)
  );

  const byActorClass = peActorClassOrder
    .map((actorClass) => ({
      actorClass,
      claims: claims.filter((claim) => claim.actor_class === actorClass),
    }))
    .filter((group) => group.claims.length > 0);

  const localClaims = claims.filter(
    (claim) => !claim.jurisdiction.startsWith("national")
  );

  const appendixIds: string[] = [];
  const seen = new Set<string>();
  for (const claim of claims) {
    for (const sourceId of claim.source_ids) {
      if (!seen.has(sourceId)) {
        seen.add(sourceId);
        appendixIds.push(sourceId);
      }
    }
  }

  const lastVerified = claims.reduce(
    (latest, claim) =>
      claim.last_verified > latest ? claim.last_verified : latest,
    ""
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/briefings"
        className="inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
      >
        <ArrowLeft className="size-4" />
        All briefings
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Briefing · China
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          The AI+ campaign: who pushes, who pays, where 安全 fits
        </h1>
      </header>

      {/* 1. Thesis */}
      <p className="mt-6 max-w-3xl border-l-2 border-oxblood pl-4 font-serif text-xl leading-8 text-foreground">
        In August 2025 the State Council made AI adoption a national mandate
        with numeric targets, and ministries, SASAC&apos;s central enterprises,
        state finance, and at least nine provinces and cities now each carry an
        instrument implementing it. Safety appears at every layer as 安全, a
        term spanning model safety, cybersecurity, and content control, and in
        these instruments it mostly serves deployment rather than braking it.
      </p>

      {/* Reading notes */}
      <Card className="mt-6 max-w-3xl border-dashed p-5">
        <h2 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          How to read this briefing
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
          <li>
            安全 is quoted in the original wherever it appears, because in
            these documents it can mean model safety, cybersecurity, data
            security, production safety, content security, or national
            security depending on context. Rendering it uniformly as
            &ldquo;safety&rdquo; would overstate the frontier-safety content.
          </li>
          <li>
            Taiwan is not treated as a jurisdiction of China here. The one
            Fujian item records PRC-side plans directed toward Taiwan and is
            flagged as an operating assumption inside the claim itself.
          </li>
          <li>
            Each item separates the sourced fact (the claim) from the
            judgment (the so-what). Judgments are marked and carry an
            evidence basis.
          </li>
        </ul>
      </Card>

      {/* 2. Instrument chain */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          The instrument chain
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Central plan, ministry execution, local implementation. Each entry
          links to the full claim below.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {chainColumns.map((column) => (
            <div key={column.title} className="border-t-2 border-ink pt-3">
              <h3 className="text-base font-semibold text-foreground">
                {column.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {column.note}
              </p>
              <ul className="mt-3 space-y-2">
                {column.claimIds.map((claimId) => {
                  const claim = claimById.get(claimId);
                  if (!claim) return null;

                  return (
                    <li key={claimId}>
                      <a
                        href={`#${claimId}`}
                        className="block border border-rule bg-paper p-3 transition hover:border-oxblood/50"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                          {claim.jurisdiction}
                        </span>
                        <span className="mt-1 line-clamp-2 block text-sm leading-5 text-foreground">
                          {claim.instrument}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Actor-class breakdown */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          Who does what
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Every claim, grouped by the class of actor that holds the
          instrument.
        </p>
        {byActorClass.map((group) => (
          <div key={group.actorClass} className="mt-8">
            <h3 className="border-b border-rule pb-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {peActorClassLabels[group.actorClass]} · {group.claims.length}
            </h3>
            {group.claims.map((claim) => (
              <ClaimCard
                key={claim.id}
                claim={claim}
                entityName={
                  claim.actor_entity_id
                    ? entityById.get(claim.actor_entity_id)?.name_en
                    : undefined
                }
                entityHasDossier={
                  claim.actor_entity_id
                    ? dossierEntityIds.has(claim.actor_entity_id)
                    : false
                }
              />
            ))}
          </div>
        ))}
      </section>

      {/* 4. Jurisdiction table */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          Where the local race is running
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Only jurisdictions with a sourced claim appear here.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-y border-rule text-left text-sm">
            <thead>
              <tr className="border-b border-rule font-mono text-xs uppercase tracking-wide text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Jurisdiction</th>
                <th className="py-2 pr-4 font-medium">Instrument</th>
                <th className="py-2 font-medium">Where 安全 shows up</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule align-top">
              {localClaims.map((claim) => (
                <tr key={claim.id}>
                  <td className="py-3 pr-4 font-medium text-foreground">
                    {claim.jurisdiction}
                  </td>
                  <td className="py-3 pr-4 text-foreground">
                    <a
                      href={`#${claim.id}`}
                      className="line-clamp-2 hover:text-oxblood hover:underline"
                    >
                      {claim.instrument}
                    </a>
                  </td>
                  <td className="py-3 text-muted-foreground">
                    {claim.safety_salience ? (
                      <span className="line-clamp-3">
                        {claim.safety_salience}
                      </span>
                    ) : (
                      <span className="font-mono text-xs">
                        not recorded in this instrument
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. What we don't know */}
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-foreground">
          What we don&apos;t know
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
          {peOpenQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>

      {/* Source appendix */}
      <section className="mt-12">
        <details className="border-y border-rule py-4">
          <summary className="cursor-pointer text-sm font-medium text-foreground">
            Source appendix ({appendixIds.length} records)
          </summary>
          <ul className="mt-4 space-y-3">
            {appendixIds.map((sourceId) => {
              const source = sourceById.get(sourceId);
              if (!source) return null;

              return (
                <li key={sourceId} id={`src-${sourceId}`} className="text-sm">
                  <span className="font-mono text-xs text-muted-foreground">
                    {source.id}
                  </span>
                  <p className="mt-0.5 leading-6 text-foreground">
                    {source.title}
                    {source.title_original ? (
                      <span className="text-muted-foreground">
                        {" "}
                        · {source.title_original}
                      </span>
                    ) : null}
                    <span className="text-muted-foreground">
                      {" "}
                      · {source.publisher}
                      {source.publication_date
                        ? ` · ${source.publication_date}`
                        : ""}
                    </span>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 font-medium text-oxblood hover:underline"
                      >
                        open
                      </a>
                    ) : null}
                  </p>
                </li>
              );
            })}
          </ul>
        </details>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Last verified {lastVerified}
        </p>
      </section>
    </main>
  );
}

function ClaimCard({
  claim,
  entityName,
  entityHasDossier,
}: {
  claim: PEClaim;
  entityName?: string;
  entityHasDossier: boolean;
}) {
  return (
    <article id={claim.id} className="scroll-mt-24 border-b border-rule py-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="muted">{claim.jurisdiction}</Badge>
        <ConfidenceChip level={claim.confidence_level} />
        <BasisChip basis={claim.evidence_basis} />
        {claim.actor_entity_id && entityName ? (
          entityHasDossier ? (
            <Link
              href={`/orgs/${claim.actor_entity_id}`}
              className="font-mono text-[11px] text-oxblood hover:underline"
            >
              dossier: {entityName}
            </Link>
          ) : (
            <span className="font-mono text-[11px] text-muted-foreground">
              {entityName}
            </span>
          )
        ) : null}
      </div>

      <h4 className="mt-3 font-mono text-sm leading-6 text-foreground">
        {claim.instrument}
      </h4>

      <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground">
        {claim.claim}
      </p>

      <div className="mt-4 max-w-3xl border-l-2 border-frontier pl-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          So what · judgment
        </p>
        <p className="mt-1 text-sm leading-6 text-foreground">
          {claim.so_what}
        </p>
      </div>

      {claim.safety_salience ? (
        <div className="mt-4 max-w-3xl border-l-2 border-tide pl-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            Where 安全 shows up
          </p>
          <p className="mt-1 text-sm leading-6 text-foreground">
            {claim.safety_salience}
          </p>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {claim.source_ids.map((sourceId) => (
          <a
            key={sourceId}
            href={`#src-${sourceId}`}
            className="inline-flex items-center rounded-sm border border-rule px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted-foreground hover:border-oxblood/50 hover:text-oxblood"
          >
            {sourceId}
          </a>
        ))}
      </div>
    </article>
  );
}

function BasisChip({ basis }: { basis: EvidenceBasis }) {
  const isInference =
    basis === "analyst_inference" || basis === "anonymous_reporting";

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-1.5 py-0.5 font-mono text-[11px] leading-4 ${
        isInference
          ? "border-dashed border-confidence-medium/60 text-confidence-medium"
          : "border-rule text-muted-foreground"
      }`}
    >
      {evidenceBasisLabels[basis] ?? basis}
    </span>
  );
}

function ConfidenceChip({ level }: { level: string }) {
  const color =
    level === "high"
      ? "bg-confidence-high"
      : level === "low"
        ? "bg-confidence-low"
        : "bg-confidence-medium";

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
      <span className={`inline-block size-1.5 rounded-full ${color}`} />
      {level} confidence
    </span>
  );
}
