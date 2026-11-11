import { Link } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";
import { pillVariants } from "@/components/site/pill";
import { ImagePlaceholder } from "@/components/site/frames";
import { Envelope, PaperClip, PostageStamp, StarSticker, Tape } from "@/components/site/props";
import { Reveal } from "@/components/site/reveal";

export function Hero() {
  return (
    <section className="container-page grid items-center gap-16 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pb-28">
      <Reveal>
        <p className="micro mb-6">(Student founder · Marketer · Builder)</p>
        <h1 className="text-[3.1rem] leading-[0.98] sm:text-7xl lg:text-[5.4rem]">
          I turn student problems into <em className="text-chocolate/90">real products</em> — and make sure people{" "}
          <span className="relative inline-block">
            find them.
            <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full" aria-hidden preserveAspectRatio="none">
              <path d="M2 14 C80 4 200 4 298 12" className="stroke-blue" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Co-founder &amp; CMO of ApplySpark. Builder of Vocation. High school senior in Hanoi, heading into business.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" hash="ventures" className={pillVariants({ size: "lg" })}>
            See my ventures <ArrowDownRight className="h-4 w-4" />
          </Link>
          <a href={SITE.cvUrl} download className={pillVariants({ variant: "outline", size: "lg" })}>
            Download CV
          </a>
        </div>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative mx-auto w-[82%] sm:w-[72%] lg:w-[80%]">
          {/* polaroid portrait */}
          <div className="tilt relative bg-cream p-3 pb-14 shadow-lift" style={{ "--tilt": "-4deg" } as React.CSSProperties}>
            <Tape className="-top-3 left-1/2 -translate-x-1/2" tone="powder" tilt={-3} />
            <ImagePlaceholder label="Portrait of Phuong Anh" ratio="aspect-[4/5]" />
            <p className="absolute bottom-4 left-0 right-0 text-center font-display text-2xl italic">Phuong Anh, Hanoi</p>
          </div>
          <PaperClip className="absolute -left-4 -top-8 rotate-[-12deg]" />
          <PostageStamp className="absolute -right-8 -top-6 w-28 sm:-right-14" tilt={9}>
            <span className="micro text-[0.6rem]">Hanoi · VN</span>
            <span className="font-display text-4xl italic leading-none">PA &apos;27</span>
            <span className="micro text-[0.55rem]">Air mail</span>
          </PostageStamp>
          <StarSticker className={cn("absolute -bottom-5 -right-3 h-14 w-14 rotate-12")} />
          <Envelope className="absolute -bottom-12 -left-10 w-36 -rotate-[10deg] drop-paper sm:-left-16 sm:w-44" />
        </div>
      </Reveal>
    </section>
  );
}
