import { createFileRoute } from "@tanstack/react-router";

import { Marquee } from "@/components/site/marquee";
import { Hero } from "@/components/home/hero";
import { Impact } from "@/components/home/impact";
import { Ventures } from "@/components/home/ventures";
import { Experience } from "@/components/home/experience";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Contact } from "@/components/home/contact";

const TITLE = "Phuong Anh Le — Student Founder & Marketer";
const DESCRIPTION =
  "Hanoi-based student founder, marketer and web builder. Co-founder & CMO of ApplySpark and builder of Vocation — real products, real users, real numbers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marquee items={["Founder", "Marketer", "Builder", "Storyteller", "Hanoi → the world"]} />
      <Impact />
      <Ventures />
      <Marquee items={["Proof, not promises"]} tone="powder" />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
