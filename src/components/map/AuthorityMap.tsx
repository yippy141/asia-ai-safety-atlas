"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { authorityBandLabels } from "@/lib/map";

export type MapNode = {
  id: string;
  name: string;
  nameLocal?: string;
  acronym?: string;
  country: string;
  sectorId: string;
  sectorLabel: string;
  sectorColor: string;
  band: 0 | 1 | 2 | 3 | 4;
  x: number; // 0..1 on the safety spectrum
  evidenceCount: number;
  oneLiner: string;
  whyItMatters?: string;
  topAspects: { label: string; bandLabel: string; band: number }[];
  placementReasoning: string;
  hasDossier: boolean;
};

export type MapEdge = {
  id: string;
  sourceId: string;
  targetId: string;
  typeLabel: string;
  confidence: string;
  description: string;
};

type AuthorityMapProps = {
  nodes: MapNode[];
  edges: MapEdge[];
  countries: string[];
  legend: { id: string; label: string; color: string }[];
};

const W = 960;
const H = 620;
const PLOT_LEFT = 150;
const PLOT_RIGHT = 930;
const BANDS_TOP = 56;
const BAND_HEIGHT = 108;

function nodeRadius(evidenceCount: number) {
  return 7 + 2 * Math.sqrt(evidenceCount);
}

function sourceCountLabel(count: number) {
  return count === 1 ? "1 source record" : `${count} source records`;
}

type PlacedNode = MapNode & {
  px: number;
  py: number;
  r: number;
  labelAbove: boolean;
};

// Deterministic collision handling inside a band: nodes keep their exact x
// (it encodes the spectrum judgment) and close neighbors cycle through small
// vertical offsets that stay inside the band.
function placeNodes(nodes: MapNode[]): PlacedNode[] {
  const placed: PlacedNode[] = [];
  const offsets = [0, -30, 30, -15, 15];

  for (let band = 0; band < 5; band += 1) {
    const inBand = nodes
      .filter((node) => node.band === band)
      .sort((a, b) => a.x - b.x || a.id.localeCompare(b.id));
    let cluster = 0;
    let lastX = -Infinity;

    for (const node of inBand) {
      const px = PLOT_LEFT + node.x * (PLOT_RIGHT - PLOT_LEFT);
      const r = nodeRadius(node.evidenceCount);
      cluster = px - lastX < 60 ? cluster + 1 : 0;
      const offset = offsets[cluster % offsets.length];
      const py = BANDS_TOP + band * BAND_HEIGHT + BAND_HEIGHT / 2 + offset;
      placed.push({ ...node, px, py, r, labelAbove: offset < 0 });
      lastX = px;
    }
  }

  return placed;
}

export function AuthorityMap({
  nodes,
  edges,
  countries,
  legend,
}: AuthorityMapProps) {
  const [country, setCountry] = useState(countries[0] ?? "China");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showEdges, setShowEdges] = useState(false);

  const visibleNodes = useMemo(
    () => placeNodes(nodes.filter((node) => node.country === country)),
    [nodes, country]
  );
  const nodeById = useMemo(
    () => new Map(visibleNodes.map((node) => [node.id, node])),
    [visibleNodes]
  );

  const selected = selectedId ? (nodeById.get(selectedId) ?? null) : null;
  const hovered = hoveredId ? (nodeById.get(hoveredId) ?? null) : null;

  const selectedEdges = useMemo(() => {
    if (!selected) return [];
    return edges.filter(
      (edge) =>
        (edge.sourceId === selected.id || edge.targetId === selected.id) &&
        nodeById.has(edge.sourceId) &&
        nodeById.has(edge.targetId)
    );
  }, [edges, selected, nodeById]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Country
            </span>
            <select
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
                setSelectedId(null);
              }}
              className="rounded-sm border border-rule bg-paper px-2 py-1 text-sm"
            >
              {countries.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={showEdges}
              onChange={(event) => setShowEdges(event.target.checked)}
              className="size-4 accent-[var(--oxblood)]"
            />
            Show connections for the selected node
          </label>
        </div>

        <div className="relative mt-4 border border-rule bg-paper">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Fixed grid of organizations: authority level vertically, safety spectrum horizontally"
            className="block w-full"
          >
            {/* Spectrum axis */}
            <text
              x={PLOT_LEFT}
              y={26}
              fill="var(--governance)"
              fontSize={13}
              fontFamily="var(--font-mono)"
            >
              ← Content control
            </text>
            <text
              x={PLOT_RIGHT}
              y={26}
              textAnchor="end"
              fill="var(--frontier)"
              fontSize={13}
              fontFamily="var(--font-mono)"
            >
              Frontier alignment →
            </text>
            <line
              x1={PLOT_LEFT}
              y1={38}
              x2={PLOT_RIGHT}
              y2={38}
              stroke="var(--rule)"
              strokeWidth={1}
            />

            {/* Authority bands */}
            {authorityBandLabels.map((label, band) => {
              const top = BANDS_TOP + band * BAND_HEIGHT;

              return (
                <g key={label}>
                  <line
                    x1={16}
                    y1={top}
                    x2={W - 16}
                    y2={top}
                    stroke="var(--rule)"
                    strokeWidth={1}
                  />
                  <text
                    x={20}
                    y={top + BAND_HEIGHT / 2}
                    fill="var(--ink-2)"
                    fontSize={12}
                    fontFamily="var(--font-mono)"
                  >
                    {label
                      .split(/(?<=,) |(?<= and) /)
                      .map((part, index) => (
                        <tspan key={part} x={20} dy={index === 0 ? 0 : 14}>
                          {part}
                        </tspan>
                      ))}
                  </text>
                </g>
              );
            })}
            <line
              x1={16}
              y1={BANDS_TOP + 5 * BAND_HEIGHT}
              x2={W - 16}
              y2={BANDS_TOP + 5 * BAND_HEIGHT}
              stroke="var(--rule)"
              strokeWidth={1}
            />

            {/* Edges, only for the selected node and only when toggled on */}
            {showEdges && selected
              ? selectedEdges.map((edge) => {
                  const a = nodeById.get(edge.sourceId);
                  const b = nodeById.get(edge.targetId);
                  if (!a || !b) return null;

                  return (
                    <line
                      key={edge.id}
                      x1={a.px}
                      y1={a.py}
                      x2={b.px}
                      y2={b.py}
                      stroke="var(--ink-2)"
                      strokeOpacity={0.55}
                      strokeWidth={1.5}
                    >
                      <title>{edge.typeLabel}</title>
                    </line>
                  );
                })
              : null}

            {/* Nodes */}
            {visibleNodes.map((node) => {
              const isSelected = selectedId === node.id;

              return (
                <g
                  key={node.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${node.name}, ${node.sectorLabel}, ${sourceCountLabel(node.evidenceCount)}`}
                  className="cursor-pointer focus:outline-none"
                  onClick={() =>
                    setSelectedId(isSelected ? null : node.id)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedId(isSelected ? null : node.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <circle
                    cx={node.px}
                    cy={node.py}
                    r={node.r}
                    fill={node.sectorColor}
                    fillOpacity={isSelected ? 1 : 0.85}
                    stroke={isSelected ? "var(--ink)" : "var(--paper)"}
                    strokeWidth={isSelected ? 2 : 1}
                  />
                  <text
                    x={node.px}
                    y={
                      node.labelAbove
                        ? node.py - node.r - 6
                        : node.py + node.r + 14
                    }
                    textAnchor="middle"
                    fill="var(--ink)"
                    fontSize={11.5}
                    fontFamily="var(--font-sans)"
                  >
                    {node.acronym ?? node.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Hover card */}
          {hovered && hovered.id !== selectedId ? (
            <div
              className="pointer-events-none absolute z-10 w-60 -translate-x-1/2 border border-rule bg-paper-2 p-3 shadow-none"
              style={{
                left: `${(hovered.px / W) * 100}%`,
                top: `${((hovered.py - hovered.r - 8) / H) * 100}%`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <p className="text-sm font-semibold text-foreground">
                {hovered.name}
              </p>
              <p className="mt-1 line-clamp-3 text-xs leading-5 text-foreground">
                {hovered.oneLiner}
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {sourceCountLabel(hovered.evidenceCount)}
              </p>
            </div>
          ) : null}
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          {legend.map((sector) => (
            <span
              key={sector.id}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ backgroundColor: sector.color }}
              />
              {sector.label}
            </span>
          ))}
          <span className="text-xs text-muted-foreground">
            Node size: number of linked source records
          </span>
        </div>

        <p className="mt-3 border-t border-rule pt-3 text-sm leading-6 text-muted-foreground">
          Placements on the horizontal axis are analyst judgments, each with
          recorded reasoning. Click a node to read it.
        </p>
      </div>

      {/* Side panel */}
      <div>
        {selected ? (
          <Card className="p-5 lg:sticky lg:top-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="muted">{selected.sectorLabel}</Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {sourceCountLabel(selected.evidenceCount)}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-foreground">
              {selected.name}
            </h2>
            {selected.nameLocal ? (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {selected.nameLocal}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-6 text-foreground">
              {selected.whyItMatters ?? selected.oneLiner}
            </p>

            {selected.topAspects.length > 0 ? (
              <div className="mt-4">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Top importance aspects
                </h3>
                <ul className="mt-2 space-y-1">
                  {selected.topAspects.map((aspect) => (
                    <li
                      key={aspect.label}
                      className="flex items-center justify-between gap-2 text-sm text-foreground"
                    >
                      <span>{aspect.label}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {aspect.band} · {aspect.bandLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-4">
              <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Why it sits here
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground">
                {selected.placementReasoning}
              </p>
              <span className="mt-2 inline-flex items-center rounded-sm border border-dashed border-confidence-medium/60 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-confidence-medium">
                analyst judgment
              </span>
            </div>

            {showEdges ? (
              <div className="mt-4">
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Connections shown
                </h3>
                {selectedEdges.length > 0 ? (
                  <ul className="mt-2 space-y-2">
                    {selectedEdges.map((edge) => {
                      const otherId =
                        edge.sourceId === selected.id
                          ? edge.targetId
                          : edge.sourceId;
                      const other = nodeById.get(otherId);

                      return (
                        <li
                          key={edge.id}
                          className="text-sm leading-6 text-foreground"
                        >
                          <span className="font-medium">
                            {other?.name ?? otherId}
                          </span>{" "}
                          <span className="font-mono text-xs text-muted-foreground">
                            {edge.typeLabel} · {edge.confidence}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    No public relationship records connect this node to others
                    on the map.
                  </p>
                )}
              </div>
            ) : null}

            {selected.hasDossier ? (
              <Link
                href={`/orgs/${selected.id}`}
                className="mt-5 inline-block text-sm font-medium text-oxblood hover:underline"
              >
                Open dossier
              </Link>
            ) : null}
          </Card>
        ) : (
          <Card className="border-dashed p-5 text-sm leading-6 text-muted-foreground lg:sticky lg:top-6">
            Click a node to see why it matters, its assessed importance, and
            the reasoning behind its placement.
          </Card>
        )}
      </div>
    </div>
  );
}
