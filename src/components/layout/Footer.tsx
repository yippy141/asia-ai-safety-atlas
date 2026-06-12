import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-stone-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          Asia AI Safety Atlas. Static-first data shell for source-backed
          research.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-slate-950" href="/methodology">
            Evidence standards
          </Link>
          <Link className="hover:text-slate-950" href="/sources">
            Source register
          </Link>
          <Link className="hover:text-slate-950" href="/changelog">
            Changelog
          </Link>
        </div>
      </div>
    </footer>
  );
}
