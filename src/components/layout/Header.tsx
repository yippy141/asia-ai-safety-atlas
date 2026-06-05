import Link from "next/link";
import { Database, GitBranch, Library, Map, ScrollText } from "lucide-react";

const navItems = [
  { href: "/atlas", label: "Atlas", icon: Database },
  { href: "/graph", label: "Graph", icon: GitBranch },
  { href: "/methodology", label: "Methodology", icon: ScrollText },
  { href: "/sources", label: "Sources", icon: Library },
  { href: "/glossary", label: "Glossary", icon: Map },
];

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="min-w-0">
          <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">
            Asia AI Safety Atlas
          </span>
          <span className="mt-1 block text-xs text-stone-600">
            Static, source-backed stakeholder intelligence
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-stone-700 transition hover:bg-white hover:text-slate-950"
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
