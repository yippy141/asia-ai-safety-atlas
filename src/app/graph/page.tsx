"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { entities, events, relationships } from "@/data";
import { formatLabel } from "@/lib/taxonomy";

const defaultGraphEdgeLimit = 24;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function GraphPage() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const { nodes, edges, publicRelationshipCount } = useMemo(() => {
    const publicRelationships = relationships.filter(
      (relationship) => relationship.public_safe_to_show
    );
    const visibleRelationships = publicRelationships.slice(0, defaultGraphEdgeLimit);
    const connectedIds = new Set(
      visibleRelationships.flatMap((relationship) => [
        relationship.source_entity_id,
        relationship.target_entity_id,
      ])
    );
    const graphEntities = entities.filter((entity) => connectedIds.has(entity.id));
    const graphEvents = events.filter((event) => connectedIds.has(event.id));

    return {
      nodes: [
        ...graphEntities.map<Node>((entity, index) => ({
          id: entity.id,
          position: {
            x: (index % 4) * 260,
            y: Math.floor(index / 4) * 160,
          },
          data: {
            label: `${entity.acronym ?? entity.name_en}\n${entity.country}`,
          },
          style: {
            background: "var(--paper-2)",
            border: "1px solid var(--rule)",
            borderRadius: 4,
            color: "var(--ink)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            padding: 10,
            width: 190,
          },
        })),
        ...graphEvents.map<Node>((event, index) => {
          const nodeIndex = graphEntities.length + index;

          return {
            id: event.id,
            position: {
              x: (nodeIndex % 4) * 260,
              y: Math.floor(nodeIndex / 4) * 160,
            },
            data: {
              label: `${event.name}\n${event.event_type}`,
            },
            style: {
              background: "var(--paper-2)",
              border: "1px dashed var(--tide)",
              borderRadius: 4,
              color: "var(--ink)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              padding: 10,
              width: 210,
            },
          };
        }),
      ],
      edges: visibleRelationships.map<Edge>((relationship) => ({
        id: relationship.id,
        source: relationship.source_entity_id,
        target: relationship.target_entity_id,
        label: formatLabel(relationship.relationship_type),
        animated:
          !prefersReducedMotion && relationship.confidence_level === "low",
        style:
          relationship.confidence_level === "low"
            ? { stroke: "var(--confidence-low)", strokeDasharray: "4 4" }
            : { stroke: "var(--ink-2)" },
      })),
      publicRelationshipCount: publicRelationships.length,
    };
  }, [prefersReducedMotion]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tide">
          Graph
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Public-safe relationship map
        </h1>
        <p className="mt-4 text-base leading-7 text-foreground">
          This graph only renders relationship records marked safe for public
          display. Low-confidence edges remain visibly provisional.
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Showing {edges.length} of {publicRelationshipCount} public-safe
          relationships by default.
        </p>
      </div>
      <section className="h-[640px] overflow-hidden rounded-lg border border-rule bg-card">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap pannable zoomable />
          <Controls />
          <Background />
        </ReactFlow>
      </section>
    </main>
  );
}
