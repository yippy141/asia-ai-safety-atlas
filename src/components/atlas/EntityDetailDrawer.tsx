"use client";

import { Info, ShieldAlert, X } from "lucide-react";
import { useState } from "react";
import { formatLabel } from "@/lib/taxonomy";
import type { Entity, Source } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type EntityDetailDrawerProps = {
  entity: Entity;
  sources: Source[];
};

export function EntityDetailDrawer({
  entity,
  sources,
}: EntityDetailDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <Info />
        Details
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-ink/35"
            aria-label="Close entity drawer"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col overflow-y-auto border-l border-rule bg-background ">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-rule bg-background px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tide">
                  Entity Profile
                </p>
                <h2 className="mt-1 text-xl font-semibold leading-7 text-foreground">
                  {entity.name_en}
                </h2>
                {entity.name_local ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entity.name_local}
                  </p>
                ) : null}
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close entity drawer"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>
            <div className="space-y-5 p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="muted">{entity.country}</Badge>
                <Badge variant="outline">{formatLabel(entity.entity_type)}</Badge>
                <Badge variant="outline">Tier {entity.tier}</Badge>
                <Badge
                  variant={
                    entity.needs_primary_source ? "warning" : "success"
                  }
                >
                  {entity.needs_primary_source
                    ? "Needs primary source"
                    : "Source-backed"}
                </Badge>
              </div>
              <p className="text-sm leading-6 text-foreground">
                {entity.summary}
              </p>
              <dl className="grid gap-3 rounded-lg border border-rule bg-card p-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-foreground">Region</dt>
                  <dd className="mt-1 text-muted-foreground">{entity.region}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Last verified</dt>
                  <dd className="mt-1 font-mono text-muted-foreground">
                    {entity.last_verified}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Confidence</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {formatLabel(entity.confidence_level)}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Sensitivity</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {formatLabel(entity.sensitivity_level)}
                  </dd>
                </div>
              </dl>
              <section>
                <h3 className="text-sm font-semibold text-foreground">
                  Focus areas
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {entity.focus_areas.map((area) => (
                    <Badge key={area} variant="outline">
                      {formatLabel(area)}
                    </Badge>
                  ))}
                </div>
              </section>
              <section>
                <h3 className="text-sm font-semibold text-foreground">Tags</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {entity.tags.map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </section>
              {entity.open_questions?.length ? (
                <section className="rounded-lg border border-confidence-medium/30 bg-confidence-medium/10 p-4">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-confidence-medium">
                    <ShieldAlert className="size-4" />
                    Open questions
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-confidence-medium">
                    {entity.open_questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
              <section>
                <h3 className="text-sm font-semibold text-foreground">
                  Attached sources
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-foreground">
                  {sources.map((source) => (
                    <li
                      key={source.id}
                      className="rounded-md border border-rule bg-card px-3 py-2"
                    >
                      {source.title}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
