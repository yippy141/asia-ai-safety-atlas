import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import type { Entity } from "@/types";

export function EntityCard({ entity }: { entity: Entity }) {
  return (
    <Card className="h-full border-neutral-200 bg-white/90 shadow-sm transition hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg leading-tight">{entity.name_en}</CardTitle>
            {entity.name_local ? (
              <p className="mt-1 text-sm text-neutral-500">{entity.name_local}</p>
            ) : null}
          </div>
          <Badge variant="muted">{entity.country}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-neutral-700">{entity.summary}</p>
        <div className="flex flex-wrap gap-2">
          {entity.focus_areas.slice(0, 4).map((area) => (
            <Badge key={area} variant="outline" className="text-xs">
              {area.replaceAll("_", " ")}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between border-t pt-3 text-xs text-neutral-500">
          <span>Confidence: {entity.confidence_level}</span>
          <span>Verified: {entity.last_verified}</span>
        </div>
      </CardContent>
    </Card>
  );
}
