import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { pillVariants, Tag, type Tone } from "@/components/site/pill";
import { BrowserFrame, Screenshot, SectionHeading } from "@/components/site/frames";
import { APPLYSPARK, VOCATION } from "@/content/case-studies";
import { Bow, Magnifier } from "@/components/site/props";
import { Reveal } from "@/components/site/reveal";

type Venture = {
  slug: "/work/applyspark" | "/work/vocation";
  name: string;
  tab: string;
  tagline: string;
  pills: { label: string; tone: Tone }[];
  live: string;
  shot: string;
  image: string;
  tilt: number;
};

const VENTURES: Venture[] = [
  {
    slug: "/work/applyspark",
    name: "ApplySpark",
    tab: "Co-founder & CMO",
    tagline: "The study-abroad planner that helps students self-apply with confidence.",
    pills: [
      { label: "200+ users", tone: "butter" },
      { label: "50 paying / month", tone: "blush" },
      { label: "61 universities · 13 countries", tone: "powder" },
    ],
    live: "https://applysparkvn.com",
    shot: "ApplySpark home page",
    image: APPLYSPARK.heroImage ?? "",
    tilt: -2,
  },
  {
    slug: "/work/vocation",
    name: "Vocation",
    tab: "Project leader & web developer",
    tagline: "Try the job before you choose the major.",
    pills: [
      { label: "16 careers to try", tone: "sage" },
      { label: "AI job simulator", tone: "butter" },
      { label: "B2C + B2B2C model", tone: "blush" },
    ],
    live: "https://vocation-lovat.vercel.app",
    shot: "Vocation home page",
    image: VOCATION.heroImage ?? "",
    tilt: 2,
  },
];

function VentureCard({ v }: { v: Venture }) {
  return (
    <article className="group relative flex h-full flex-col transition-transform duration-500 hover:-translate-y-2">
      <div className="folder-tab micro w-fit bg-tan px-6 pb-2.5 pt-3">({v.tab})</div>
      <div className="relative flex flex-1 flex-col rounded-b-2xl rounded-tr-2xl bg-tan px-5 pt-6 md:px-8 md:pt-8">
        <div className="relative z-0 transition-transform duration-500 ease-out group-hover:-translate-y-5">
          <BrowserFrame url={v.live.replace("https://", "")} tilt={v.tilt} tapeTone="powder">
            <Screenshot src={v.image} alt={`${v.name} website — ${v.shot}`} />
          </BrowserFrame>
        </div>
        <div className="relative z-10 -mx-5 -mt-16 flex flex-1 flex-col rounded-2xl border-t-[1.5px] border-chocolate/15 bg-beige p-6 shadow-paper md:-mx-8 md:-mt-24 md:p-9">
          <h3 className="text-5xl md:text-6xl">{v.name}</h3>
          <p className="mt-3 font-display text-2xl italic leading-snug text-chocolate/85">{v.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {v.pills.map((p) => (
              <Tag key={p.label} tone={p.tone}>
                {p.label}
              </Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 pt-2 md:mt-auto">
            <Link to={v.slug} className={pillVariants()}>
              Read case study <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={v.live} target="_blank" rel="noreferrer" className={pillVariants({ variant: "outline" })}>
              Visit live site <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Ventures() {
  return (
    <section id="ventures" className="relative bg-paper py-24 md:py-36" aria-labelledby="ventures-title">
      <div className="container-page">
        <Reveal className="relative mb-16 md:mb-24">
          <SectionHeading label="Flagship case studies">
            <span id="ventures-title" className="block text-6xl md:text-[7.5rem] md:leading-[0.92]">
              Featured <em>Ventures</em>
            </span>
          </SectionHeading>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Two products, both born from problems I lived through. Each case study walks from problem to insight to
            results — with the numbers to back it up.
          </p>
          <Bow className="absolute right-4 top-0 hidden h-20 w-28 rotate-12 md:block" />
          <Magnifier className="absolute bottom-0 right-40 hidden h-16 w-16 -rotate-12 lg:block" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          {VENTURES.map((v, i) => (
            <Reveal key={v.name} delay={i * 150} className={cn("h-full", i === 1 && "lg:mt-16")}>
              <VentureCard v={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
