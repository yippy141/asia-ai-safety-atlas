"use client";

import { ExternalLink, Library, X } from "lucide-react";
import { useState } from "react";
import { formatLabel } from "@/lib/taxonomy";
import type { Source } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type SourceDrawerProps = {
  sources: Source[];
  title?: string;
};

export function SourceDrawer({ sources, title = "Sources" }: SourceDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <Library />
        Sources
        <span className="rounded bg-stone-100 px-1.5 py-0.5 text-xs text-stone-600">
          {sources.length}
        </span>
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-slate-950/35"
            aria-label="Close source drawer"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-stone-200 bg-stone-50 shadow-xl">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-stone-200 bg-stone-50 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                  Source Register
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-950">
                  {title}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close source drawer"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>
            <div className="space-y-4 p-5">
              {sources.map((source) => (
                <article
                  key={source.id}
                  className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="muted">{source.reliability_rating}</Badge>
                    <Badge variant="outline">{source.language}</Badge>
                    <Badge variant="outline">
                      {formatLabel(source.source_type)}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-6 text-slate-950">
                    {source.title}
                  </h3>
                  <dl className="mt-3 grid gap-2 text-xs text-stone-600">
                    <div>
                      <dt className="font-medium text-stone-900">Publisher</dt>
                      <dd>{source.publisher}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-stone-900">Publication</dt>
                      <dd>{source.publication_date ?? "Not recorded"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-stone-900">Accessed</dt>
                      <dd>{source.access_date}</dd>
                    </div>
                  </dl>
                  {source.summary_note ? (
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      {source.summary_note}
                    </p>
                  ) : null}
                  {source.url ? (
                    <a
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:underline"
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open source
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </article>
              ))}
              {sources.length === 0 ? (
                <p className="rounded-lg border border-dashed border-stone-300 p-4 text-sm text-stone-600">
                  No source records are attached yet.
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
