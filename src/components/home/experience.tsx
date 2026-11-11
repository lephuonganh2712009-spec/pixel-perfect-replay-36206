import type { CSSProperties, ReactNode } from "react";
import { Megaphone, Search } from "lucide-react";

import { SectionHeading } from "@/components/site/frames";
import m4uPhoto from "@/assets/m4u_showcase_2025.png.asset.json";
import { PaperClip, StarSticker, Tape } from "@/components/site/props";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type Item = {
  role: string;
  org: string;
  dates: string;
  impact: ReactNode;
  icon: typeof Megaphone;
  tone: string;
  tilt: number;
  photo?: { src: string; alt: string };
  prop: "clip" | "tape" | "star";
};

const ITEMS: Item[] = [
  {
    role: "Head of Public Relations",
    org: "Music For You Club (M4U)",
    dates: "Sep 2025 – Sep 2026",
    impact:
      "Led a 20-member comms team; grew Facebook following to 15,000 in two months and sold out all 300 concert tickets.",
    icon: Megaphone,
    tone: "bg-cream",
    tilt: -3,
    photo: { src: m4uPhoto.url, alt: "M4U members on stage at the Showcase 2025 concert" },
    prop: "tape",
  },
  {
    role: "Retail Strategy & Market Research Intern",
    org: "Retail World Investment Consultant LLC",
    dates: "Jun – Aug 2026 · Remote",
    impact:
      "Built competitor benchmarks across pricing, promotions, channels and expansion signals in Vietnam's retail sector; turned research into evidence-based summaries.",
    icon: Search,
    tone: "bg-powder",
    tilt: 2,
    prop: "clip",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-chocolate py-24 text-cream md:py-32" aria-labelledby="experience-title">
      <div className="container-page">
        <Reveal className="mb-16">
          <SectionHeading label="Experience & leadership">
            <span id="experience-title">
              Where I&apos;ve <em>worked &amp; led</em>
            </span>
          </SectionHeading>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.role} delay={i * 100} className={cn(i % 2 === 1 && "lg:mt-12")}>
                <article
                  className={cn("sticky-note h-full !p-6 text-chocolate", item.tone)}
                  style={{ "--tilt": `${item.tilt}deg` } as CSSProperties}
                >
                  {item.prop === "tape" && <Tape className="-top-3 left-6" tilt={-5} tone="powder" />}
                  {item.prop === "clip" && <PaperClip className="absolute -top-7 right-6 h-16 w-6 rotate-6" />}
                  {item.prop === "star" && <StarSticker className="absolute -right-3 -top-4 h-12 w-12 rotate-12" />}

                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-chocolate bg-cream">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  {item.photo && (
                    <figure className="mb-5 bg-cream p-2 pb-3 shadow-note">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="micro mt-2 text-right text-[0.6rem] opacity-70">Showcase 2025</figcaption>
                    </figure>
                  )}
                  <p className="micro text-[0.65rem] opacity-75">({item.dates})</p>
                  <h3 className="mt-2 text-3xl leading-tight">{item.role}</h3>
                  <p className="mt-1 font-display text-xl italic">{item.org}</p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed">{item.impact}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
