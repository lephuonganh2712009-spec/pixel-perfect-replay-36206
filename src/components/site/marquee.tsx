import { cn } from "@/lib/utils";

import { Sparkle } from "./props";

export function Marquee({
  items,
  tone = "chocolate",
}: {
  items: string[];
  tone?: "chocolate" | "powder" | "butter";
}) {
  const row = [...items, ...items, ...items, ...items];
  const toneClass = {
    chocolate: "bg-chocolate text-cream",
    powder: "bg-powder text-chocolate",
    butter: "bg-butter text-chocolate",
  }[tone];

  return (
    <div className={cn("relative overflow-hidden border-y border-chocolate py-4", toneClass)} aria-label={items.join(", ")}>
      <div className="flex w-max animate-marquee" aria-hidden>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-3xl italic leading-none md:text-4xl">{item}</span>
                <Sparkle className="h-4 w-4 opacity-80" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
