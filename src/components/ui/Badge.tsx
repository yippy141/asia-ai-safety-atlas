import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex min-h-6 w-fit items-center rounded-sm border px-2 py-0.5 text-xs font-medium leading-5",
  {
    variants: {
      variant: {
        default: "border-ink bg-ink text-paper",
        muted: "border-rule bg-paper-2 text-ink-2",
        outline: "border-rule bg-transparent text-ink-2",
        warning:
          "border-confidence-medium/30 bg-confidence-medium/10 text-confidence-medium",
        success:
          "border-confidence-high/30 bg-confidence-high/10 text-confidence-high",
        "confidence-high":
          "border-confidence-high/30 bg-confidence-high/10 text-confidence-high",
        "confidence-medium":
          "border-confidence-medium/30 bg-confidence-medium/10 text-confidence-medium",
        "confidence-low":
          "border-confidence-low/30 bg-confidence-low/10 text-confidence-low",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

export function confidenceVariant(level: string): BadgeVariant {
  if (level === "high") return "confidence-high";
  if (level === "low") return "confidence-low";
  return "confidence-medium";
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
