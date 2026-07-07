import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Asia AI Safety Atlas. Claims first, sources attached.</p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-foreground" href="/atlas">
            Atlas
          </Link>
          <Link className="hover:text-foreground" href="/graph">
            Graph
          </Link>
          <Link className="hover:text-foreground" href="/insights">
            Insights
          </Link>
          <Link className="hover:text-foreground" href="/data">
            Data downloads
          </Link>
          <Link className="hover:text-foreground" href="/glossary">
            Glossary
          </Link>
          <Link className="hover:text-foreground" href="/methodology">
            Evidence standards
          </Link>
          <Link className="hover:text-foreground" href="/changelog">
            Changelog
          </Link>
        </div>
      </div>
    </footer>
  );
}
