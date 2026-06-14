import { AlertTriangle } from "lucide-react";
import { EntityDetailDrawer } from "@/components/atlas/EntityDetailDrawer";
import { SourceDrawer } from "@/components/atlas/SourceDrawer";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { formatLabel } from "@/lib/taxonomy";
import type { Entity, Source } from "@/types";

type EntityCardProps = {
  entity: Entity;
  sources: Source[];
};

export function EntityCard({ entity, sources }: EntityCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <CardTitle>{entity.name_en}</CardTitle>
            {entity.name_local ? (
              <p className="mt-1 text-sm leading-5 text-stone-500">
                {entity.name_local}
              </p>
            ) : null}
          </div>
          <Badge variant="muted">{entity.country}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{formatLabel(entity.entity_type)}</Badge>
          <Badge variant="outline">Tier {entity.tier}</Badge>
          {entity.needs_primary_source ? (
            <Badge variant="warning" className="gap-1">
              <AlertTriangle className="size-3" />
              Needs primary
            </Badge>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-stone-700">{entity.summary}</p>
        <div className="flex flex-wrap gap-2">
          {entity.focus_areas.slice(0, 4).map((area) => (
            <Badge key={area} variant="outline">
              {formatLabel(area)}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <div className="grid gap-1 text-xs text-stone-600">
          <span>Confidence: {formatLabel(entity.confidence_level)}</span>
          <span>
            Verified:{" "}
            <span className="font-mono">{entity.last_verified}</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <EntityDetailDrawer entity={entity} sources={sources} />
          <SourceDrawer sources={sources} title={entity.name_en} />
        </div>
      </CardFooter>
    </Card>
  );
}
