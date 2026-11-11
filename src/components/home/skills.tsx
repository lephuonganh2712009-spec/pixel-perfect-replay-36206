import type { CSSProperties } from "react";

import { SKILLS } from "@/content/site";
import { tagVariants, type Tone } from "@/components/site/pill";
import { SectionHeading } from "@/components/site/frames";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const TONES: Tone[] = ["butter", "blush", "powder", "sage", "beige"];
const TILTS = [-4, 3, -2, 5, -3, 2, -5, 4, -1, 3, -3, 2, -4];
const OFFSETS = ["", "md:translate-y-3", "md:-translate-y-2", "md:translate-y-5", "", "md:-translate-y-4"];

export function Skills() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="skills-title">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
        <Reveal>
          <SectionHeading label="Toolkit">
            <span id="skills-title">
              Skills I <em>bring</em>
            </span>
          </SectionHeading>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Half storyteller, half builder — the mix that gets a product made and gets it noticed.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="flex flex-wrap gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-7">
            {SKILLS.map((s, i) => (
              <li
                key={s}
                className={cn(OFFSETS[i % OFFSETS.length])}
              >
                <span
                  className={cn(
                    tagVariants({ tone: TONES[i % TONES.length] }),
                    "tilt px-5 py-2.5 text-base shadow-note transition-transform duration-300 hover:-translate-y-1 md:text-lg",
                  )}
                  style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` } as CSSProperties}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
