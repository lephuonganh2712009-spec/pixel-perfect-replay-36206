import { Mail, Linkedin, Download } from "lucide-react";

import { SITE } from "@/content/site";
import { Fill, pillVariants } from "@/components/site/pill";
import { Envelope, StarSticker } from "@/components/site/props";
import { Reveal } from "@/components/site/reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-grid-paper border-t-[1.5px] border-chocolate py-24 md:py-36" aria-labelledby="contact-title">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <Envelope className="w-full -rotate-6 drop-paper" />
          <StarSticker className="absolute -right-2 -top-6 h-16 w-16 rotate-12" />
        </Reveal>
        <Reveal delay={120}>
          <p className="micro mb-4">(Say hello)</p>
          <h2 id="contact-title" className="text-5xl md:text-7xl">
            Let&apos;s build <em>something</em> students will love.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Admissions officers, founders, mentors — I&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${SITE.email}`} className={pillVariants({ size: "lg" })}>
              <Mail className="h-4 w-4" /> Email me
            </a>
            {SITE.linkedinUrl ? (
              <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" className={pillVariants({ variant: "outline", size: "lg" })}>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            ) : (
              <span className={pillVariants({ variant: "outline", size: "lg" })} aria-disabled>
                <Linkedin className="h-4 w-4" /> LinkedIn <Fill>URL</Fill>
              </span>
            )}
            <a href={SITE.cvUrl} download className={pillVariants({ variant: "outline", size: "lg" })}>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
          <p className="mt-6 font-mono text-sm opacity-75">{SITE.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
