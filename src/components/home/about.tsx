import { FACTS } from "@/content/site";
import { Bow, PaperClip } from "@/components/site/props";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="about" className="bg-stripes border-y-[1.5px] border-chocolate py-24 md:py-32" aria-labelledby="about-title">
      <div className="container-page">
        <Reveal className="relative mx-auto max-w-3xl">
          <Bow className="absolute -top-10 left-1/2 z-10 h-20 w-28 -translate-x-1/2" />
          <PaperClip className="absolute -right-2 top-16 z-10 hidden rotate-[18deg] md:block" />
          <div className="drop-paper">
            <div className="stamp-edge bg-cream">
              <div className="border-[1.5px] border-dashed border-chocolate/30 px-6 py-12 text-center md:px-14 md:py-16">
                <p className="micro mb-4">(About me)</p>
                <h2 id="about-title" className="text-5xl md:text-6xl">
                  Hi, I&apos;m <em>Phuong Anh.</em>
                </h2>
                <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed">
                  I&apos;m a student who likes building things that solve problems I&apos;ve lived through. Applying to
                  universities abroad showed me how confusing the process is, so I co-founded ApplySpark. Watching
                  friends pick majors they&apos;d never tried led me to build Vocation. I&apos;m most at home where{" "}
                  <em className="font-display text-2xl">marketing, product and business strategy</em> meet.
                </p>

                <dl className="mx-auto mt-12 max-w-lg divide-y divide-chocolate/15 border-y border-chocolate/15 text-left">
                  {FACTS.map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <dt className="micro opacity-70">{k}</dt>
                      <dd className="font-mono text-sm sm:text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
