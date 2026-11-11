import { Link } from "@tanstack/react-router";

import { NAV_LINKS, SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t-[1.5px] border-chocolate bg-paper">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/" className="font-display text-4xl italic">
            {SITE.name}
          </Link>
          <p className="micro mt-3 opacity-70">(Hanoi → the world)</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="text-sm font-medium hover:underline">
              {l.label}
            </Link>
          ))}
          <Link to="/work/applyspark" className="text-sm font-medium hover:underline">
            ApplySpark
          </Link>
          <Link to="/work/vocation" className="text-sm font-medium hover:underline">
            Vocation
          </Link>
        </nav>
      </div>
      <div className="border-t border-chocolate/20">
        <p className="container-page micro py-5 opacity-70">
          © 2026 Phuong Anh Le · Designed &amp; built with intention.
        </p>
      </div>
    </footer>
  );
}
