import { IMPACT } from "@/content/site";
import { CountUp } from "@/components/site/count-up";
import { SectionHeading, StickyNote } from "@/components/site/frames";
import { Reveal } from "@/components/site/reveal";

export function Impact() {
  return (
    <section className="bg-grid-paper border-b border-chocolate/15 py-24 md:py-32" aria-labelledby="impact-title">
      <div className="container-page">
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading label="Impact at a glance">
            <span id="impact-title">
              Impact, <em>in numbers</em>
            </span>
          </SectionHeading>
          <p className="max-w-sm text-muted-foreground">
            Every number here came from something I launched, promoted or led — not a class project.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {IMPACT.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 90}>
              <StickyNote tone={item.tone} tilt={item.tilt} className="flex min-h-44 flex-col justify-between md:min-h-52">
                <CountUp value={item.value} className="font-display text-5xl leading-none md:text-6xl" />
                <p className="micro mt-6 text-[0.68rem] leading-snug">{item.label}</p>
              </StickyNote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
