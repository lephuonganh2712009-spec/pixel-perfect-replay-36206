import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Users } from "lucide-react";

import type { CaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

import { CountUp } from "./count-up";
import { BrowserFrame, FolderMini, ImagePlaceholder, StickyNote } from "./frames";
import { Marquee } from "./marquee";
import { pillVariants, Tag } from "./pill";
import { Bow, Envelope, Magnifier, PaperClip, StarSticker, Tape } from "./props";
import { Reveal } from "./reveal";

function Label({ n, children }: { n: string; children: string }) {
  return (
    <p className="micro mb-4 flex items-center gap-3 opacity-80">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-current text-[0.62rem]">
        {n}
      </span>
      ({children})
    </p>
  );
}

const FLOW_PROPS = [Magnifier, StarSticker, PaperClip, Envelope];
const NOTE_TILTS = [-2.5, 1.8, -1.2, 2.4, -2];
const INDEX_TILTS = [-2, 1.5, -1];

export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const host = cs.liveUrl.replace("https://", "");

  return (
    <article>
      {/* 1. Hero */}
      <header className="container-page grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <Link to="/" hash="ventures" className="micro mb-8 inline-block opacity-70 hover:opacity-100">
            ← Back to ventures
          </Link>
          <p className="micro mb-5">({cs.roleLabel})</p>
          <h1 className="text-7xl md:text-[7rem] md:leading-[0.9]">{cs.name}</h1>
          <p className="mt-5 font-display text-3xl italic leading-snug md:text-4xl">{cs.tagline}</p>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">{cs.intro}</p>
          <a href={cs.liveUrl} target="_blank" rel="noreferrer" className={cn(pillVariants({ size: "lg" }), "mt-9")}>
            Visit live site <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
        <Reveal delay={150} className="relative">
          <BrowserFrame url={host} tilt={3} tapeTone="blush">
            <ImagePlaceholder label={cs.heroShot} />
          </BrowserFrame>
          <StarSticker className="absolute -bottom-6 -left-4 h-16 w-16 -rotate-12" />
        </Reveal>
      </header>

      {/* 2. At a glance */}
      <section className="bg-paper py-16 md:py-20" aria-label="At a glance">
        <div className="container-page">
          <p className="micro mb-8">(At a glance)</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cs.glance.map((g, i) => (
              <Reveal key={g.tab} delay={i * 80} className="h-full">
                <FolderMini tab={g.tab} className="h-full" tone={i % 2 ? "beige" : "paper"}>
                  <p className="font-display text-2xl leading-snug">{g.value}</p>
                </FolderMini>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem  + 4. Insight */}
      <section className="container-page grid gap-14 py-24 md:py-32 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <Reveal>
          <Label n="01">The problem</Label>
          <h2 className="text-5xl md:text-6xl">
            What was <em>broken</em>
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">{cs.problem.text}</p>
        </Reveal>
        <Reveal delay={120} className="mx-auto w-full max-w-xs">
          <StickyNote tone="blush" tilt={3} className="!p-8">
            <Tape className="-top-3 left-1/2 -translate-x-1/2" tilt={-4} />
            <CountUp value={cs.problem.stat.value} className="font-display text-6xl leading-none" />
            <p className="micro mt-5 leading-snug">{cs.problem.stat.label}</p>
          </StickyNote>
        </Reveal>
      </section>

      <section className="bg-stripes border-y-[1.5px] border-chocolate py-24 md:py-32">
        <div className="container-page">
          <Reveal className="relative mx-auto max-w-4xl rounded-sm bg-cream px-6 py-14 text-center shadow-paper md:px-16 md:py-20">
            <Bow className="absolute -top-9 left-1/2 h-16 w-24 -translate-x-1/2" />
            <Label n="02">The insight</Label>
            <blockquote className="font-display text-4xl italic leading-[1.1] md:text-6xl">
              &ldquo;{cs.insight}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 5. What we built */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mb-16">
            <Label n="03">{cs.builtTitle}</Label>
            <h2 className="text-5xl md:text-7xl">
              The <em>product</em>
            </h2>
          </Reveal>
          <div className="flex flex-col gap-20 md:gap-28">
            {cs.features.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={f.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div className={cn(flip && "md:order-2")}>
                    {f.shot ? (
                      <BrowserFrame url={host} tilt={flip ? 2 : -2} tapeTone={flip ? "sage" : "butter"}>
                        <ImagePlaceholder label={f.shot} />
                      </BrowserFrame>
                    ) : (
                      <StickyNote tone={flip ? "powder" : "butter"} tilt={flip ? 2 : -2} className="mx-auto max-w-sm !p-10 text-center">
                        <PaperClip className="absolute -top-8 left-8 h-16 w-6 -rotate-6" />
                        <p className="micro mb-3 opacity-70">(Feature {String(i + 1).padStart(2, "0")})</p>
                        <p className="font-display text-4xl italic leading-tight">{f.title}</p>
                      </StickyNote>
                    )}
                  </div>
                  <div className={cn(flip && "md:order-1")}>
                    <p className="micro mb-3 opacity-70">({String(i + 1).padStart(2, "0")})</p>
                    <h3 className="text-4xl md:text-5xl">{f.title}</h3>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {cs.builtNote && (
            <Reveal className="mx-auto mt-20 max-w-2xl rounded-full border-[1.5px] border-dashed border-chocolate/40 bg-paper px-8 py-5 text-center">
              {cs.builtNote}
            </Reveal>
          )}
        </div>
      </section>

      {/* 6. Business model */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mb-14">
            <Label n="04">Business model</Label>
            <h2 className="text-5xl md:text-7xl">
              How it <em>makes money</em>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cs.model.map((m, i) => (
              <Reveal key={m.name} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border-[1.5px] border-chocolate bg-cream p-7 shadow-note transition-transform duration-300 hover:-translate-y-1.5">
                  <Tag tone={m.tone} className="w-fit">
                    {m.name}
                  </Tag>
                  <p className="mt-6 font-display text-4xl leading-tight">{m.price}</p>
                  <p className="mt-4 text-muted-foreground">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {cs.modelNote && (
            <Reveal className="mt-8 flex items-start gap-3 text-muted-foreground">
              <Users className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              <p className="max-w-3xl">{cs.modelNote}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* 7. GTM / flow */}
      <section className="bg-grid-paper border-y border-chocolate/15 py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mb-14">
            <Label n="05">{cs.gtm.title}</Label>
            <h2 className="text-5xl md:text-7xl">
              {cs.gtm.kind === "playbook" ? (
                <>
                  The growth <em>playbook</em>
                </>
              ) : (
                <>
                  Four steps, <em>one decision</em>
                </>
              )}
            </h2>
          </Reveal>

          {cs.gtm.kind === "playbook" ? (
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cs.gtm.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <li className="relative h-full rounded-xl border-[1.5px] border-chocolate bg-cream p-6 shadow-note">
                    <span className="font-display text-6xl italic leading-none text-blue">{i + 1}</span>
                    <h3 className="mt-3 text-3xl">{item.title}</h3>
                    <p className="mt-3 text-[0.95rem] text-muted-foreground">{item.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          ) : (
            <ol className="grid gap-8 md:grid-cols-4 md:gap-4">
              {cs.gtm.steps.map((s, i) => {
                const Prop = FLOW_PROPS[i];
                return (
                  <Reveal key={s.title} delay={i * 110}>
                    <li className="relative flex h-full flex-col items-center text-center">
                      <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border-[1.5px] border-chocolate bg-cream shadow-note">
                        <Prop className="h-16 w-16 rotate-[-8deg]" />
                        <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-chocolate font-mono text-sm text-cream">
                          {i + 1}
                        </span>
                      </div>
                      {i < 3 && (
                        <ArrowRight className="absolute right-[-1.4rem] top-14 hidden h-6 w-6 md:block" aria-hidden />
                      )}
                      <h3 className="text-3xl">{s.title}</h3>
                      <p className="mt-2 max-w-[14rem] text-muted-foreground">{s.body}</p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          )}
        </div>
      </section>

      {/* 8. Results */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mb-14">
            <Label n="06">Results</Label>
            <h2 className="text-5xl md:text-7xl">
              What it <em>moved</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {cs.results.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <StickyNote tone={r.tone} tilt={NOTE_TILTS[i % NOTE_TILTS.length]} className="flex min-h-48 flex-col justify-between">
                  <CountUp value={r.value} className="font-display text-5xl leading-none" />
                  <p className="micro mt-6 text-[0.66rem] leading-snug">{r.label}</p>
                </StickyNote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. My role */}
      <section className="bg-chocolate py-24 text-cream md:py-32">
        <div className="container-page">
          <Reveal className="mb-14">
            <Label n="07">My role</Label>
            <h2 className="text-5xl md:text-7xl">
              What I did, <em>honestly</em>
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="rounded-2xl bg-cream p-8 text-chocolate shadow-paper">
              <p className="micro mb-5">(Me, personally)</p>
              <ul className="space-y-4">
                {cs.roleMine.map((r, i) => (
                  <li key={i} className="flex gap-3 text-lg">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-blue" strokeWidth={3} aria-hidden />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="rounded-2xl border-[1.5px] border-cream/30 p-8">
              <p className="micro mb-5 opacity-80">(With the team)</p>
              <ul className="space-y-4">
                {cs.roleTeam.map((r, i) => (
                  <li key={i} className="flex gap-3 text-lg">
                    <Users className="mt-1 h-5 w-5 shrink-0 opacity-70" aria-hidden />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. Lessons */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mb-14">
            <Label n="08">What I learned</Label>
            <h2 className="text-5xl md:text-7xl">
              Lessons I&apos;m <em>keeping</em>
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {cs.lessons.map((l, i) => (
              <Reveal key={l} delay={i * 100}>
                <div
                  className="sticky-note bg-cream !p-0"
                  style={{ "--tilt": `${INDEX_TILTS[i % INDEX_TILTS.length]}deg` } as CSSProperties}
                >
                  <div className="h-3 rounded-t-sm bg-blush" />
                  <div className="bg-[repeating-linear-gradient(transparent_0_31px,var(--powder)_31px_32px)] px-7 pb-8 pt-6">
                    <p className="micro mb-3 opacity-60">(Lesson {String(i + 1).padStart(2, "0")})</p>
                    <p className="font-display text-3xl italic leading-[32px]">{l}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["Next case study", cs.next.name]} tone="butter" />

      {/* 11. Next */}
      <section className="container-page py-24 md:py-32">
        <Reveal>
          <Link
            to={cs.next.slug === "applyspark" ? "/work/applyspark" : "/work/vocation"}
            className="group flex flex-col gap-6 rounded-3xl border-[1.5px] border-chocolate bg-beige p-8 shadow-note transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift md:flex-row md:items-center md:justify-between md:p-14"
          >
            <div>
              <p className="micro mb-3">(Next case study)</p>
              <p className="font-display text-6xl md:text-8xl">{cs.next.name}</p>
              <p className="mt-3 font-display text-2xl italic">{cs.next.tagline}</p>
            </div>
            <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-chocolate text-cream transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowRight className="h-8 w-8" />
            </span>
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
