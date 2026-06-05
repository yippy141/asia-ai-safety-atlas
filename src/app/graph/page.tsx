"use client";

import { useMemo } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { entities, relationships } from "@/data";
import { formatLabel } from "@/lib/taxonomy";

const defaultGraphEdgeLimit = 24;

export default function GraphPage() {
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

    return {
      nodes: graphEntities.map<Node>((entity, index) => ({
        id: entity.id,
        position: {
          x: (index % 4) * 260,
          y: Math.floor(index / 4) * 160,
        },
        data: {
          label: `${entity.acronym ?? entity.name_en}\n${entity.country}`,
        },
        style: {
          border: "1px solid #d6d3d1",
          borderRadius: 8,
          color: "#0f172a",
          fontSize: 12,
          padding: 10,
          width: 190,
        },
      })),
      edges: visibleRelationships.map<Edge>((relationship) => ({
        id: relationship.id,
        source: relationship.source_entity_id,
        target: relationship.target_entity_id,
        label: formatLabel(relationship.relationship_type),
        animated: relationship.confidence_level === "low",
      })),
      publicRelationshipCount: publicRelationships.length,
    };
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
          Graph
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          Public-safe relationship map
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-700">
          This graph only renders relationship records marked safe for public
          display. Low-confidence edges are animated so they remain visibly
          provisional.
        </p>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Showing {edges.length} of {publicRelationshipCount} public-safe
          relationships by default.
        </p>
      </div>
      <section className="h-[640px] overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap pannable zoomable />
          <Controls />
          <Background />
        </ReactFlow>
      </section>
    </main>
  );
}
