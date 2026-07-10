import { entities, mapPositions } from "@/data";
import { sectorClassOf } from "@/lib/map";

// Static, non-interactive miniature of the Map for the landing page.
export function MapPreview() {
  const entityById = new Map(entities.map((entity) => [entity.id, entity]));
  const W = 480;
  const H = 250;
  const left = 24;
  const right = W - 24;
  const top = 34;
  const bandHeight = (H - top - 12) / 5;

  const placed = mapPositions
    .map((position) => {
      const entity = entityById.get(position.entity_id);
      if (!entity) return null;

      return {
        id: position.entity_id,
        x: left + position.spectrum_x * (right - left),
        y: top + position.authority_level * bandHeight + bandHeight / 2,
        r: 4 + Math.sqrt(entity.source_ids.length) * 1.4,
        color: sectorClassOf(entity.entity_type).color,
      };
    })
    .filter((node) => node !== null);

  // Deterministic nudge so close nodes in a band stay legible at this size.
  const byBand = new Map<number, number>();
  const nudged = placed
    .sort((a, b) => a.y - b.y || a.x - b.x)
    .map((node) => {
      const count = byBand.get(node.y) ?? 0;
      byBand.set(node.y, count + 1);
      const offset = count % 2 === 0 ? -(count % 4) * 3 : ((count + 1) % 4) * 3;
      return { ...node, y: node.y + offset };
    });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Preview of the authority and safety-spectrum map"
      className="block w-full"
    >
      <text
        x={left}
        y={18}
        fill="var(--governance)"
        fontSize={10}
        fontFamily="var(--font-mono)"
      >
        ← Content control
      </text>
      <text
        x={right}
        y={18}
        textAnchor="end"
        fill="var(--frontier)"
        fontSize={10}
        fontFamily="var(--font-mono)"
      >
        Frontier alignment →
      </text>
      {[0, 1, 2, 3, 4, 5].map((band) => (
        <line
          key={band}
          x1={8}
          y1={top + band * bandHeight}
          x2={W - 8}
          y2={top + band * bandHeight}
          stroke="var(--rule)"
          strokeWidth={1}
        />
      ))}
      {nudged.map((node) => (
        <circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={node.color}
          fillOpacity={0.85}
          stroke="var(--paper)"
          strokeWidth={1}
        />
      ))}
    </svg>
  );
}
