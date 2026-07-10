import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { peClaims } from "@/data";
import { publicPeClaims } from "@/lib/pe";

export const metadata = {
  title: "Briefings | Asia AI Safety Atlas",
};

export default function BriefingsPage() {
  const claims = publicPeClaims(peClaims);
  const lastVerified = claims.reduce(
    (latest, claim) =>
      claim.last_verified > latest ? claim.last_verified : latest,
    ""
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-foreground">Briefings</h1>
        <p className="mt-3 text-base leading-7 text-foreground">
          Deep dives on one question at a time. Every claim separates the
          sourced fact from the judgment, and every judgment carries its
          evidence basis.
        </p>
      </header>

      <div className="mt-8">
        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="muted">China</Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {claims.length} claims · last verified {lastVerified}
            </span>
          </div>
          <h2 className="mt-3 text-xl font-semibold text-foreground">
            <Link
              href="/briefings/china-ai-plus"
              className="hover:text-oxblood hover:underline"
            >
              The AI+ campaign: who pushes, who pays, where 安全 fits
            </Link>
          </h2>
          <p className="mt-2 text-sm leading-6 text-foreground">
            The August 2025 State Council opinion made AI adoption a national
            mandate. This briefing traces the instrument chain from the
            central plan through ministry, SOE, and financing actions to the
            provincial race it set off, and flags where 安全 appears at each
            step.
          </p>
          <Link
            href="/briefings/china-ai-plus"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-oxblood hover:underline"
          >
            Read the briefing
            <ArrowRight className="size-4" />
          </Link>
        </Card>
      </div>
    </main>
  );
}
