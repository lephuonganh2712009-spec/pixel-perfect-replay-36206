import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/content/site";

import { pillVariants } from "./pill";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-chocolate bg-cream/95 backdrop-blur-sm">
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link to="/" className="font-display text-2xl italic leading-none md:text-[1.7rem]">
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="relative text-[0.95rem] font-medium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-chocolate after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <a href={SITE.cvUrl} download className={pillVariants({ size: "sm" })}>
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-chocolate md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn("border-t border-chocolate/20 bg-cream md:hidden", open ? "block" : "hidden")}>
        <div className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="py-2 font-display text-3xl"
            >
              {l.label}
            </Link>
          ))}
          <a href={SITE.cvUrl} download className={cn(pillVariants(), "mt-3 w-fit")}>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
