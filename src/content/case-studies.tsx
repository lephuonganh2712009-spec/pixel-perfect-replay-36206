import type { ReactNode } from "react";

import { Fill, type Tone } from "@/components/site/pill";

export type CaseStudy = {
  slug: "applyspark" | "vocation";
  name: string;
  roleLabel: string;
  tagline: string;
  intro: string;
  liveUrl: string;
  heroShot: string;
  glance: { tab: string; value: ReactNode }[];
  problem: { text: string; stat: { value: string; label: string } };
  insight: string;
  builtTitle: string;
  features: { title: string; body: ReactNode; shot?: string }[];
  builtNote?: ReactNode;
  model: { name: string; price: ReactNode; body: ReactNode; tone: Tone }[];
  modelNote?: ReactNode;
  gtm:
    | { kind: "playbook"; title: string; items: { title: string; body: ReactNode }[] }
    | { kind: "flow"; title: string; steps: { title: string; body: string }[] };
  results: { value: string; label: ReactNode; tone: Tone }[];
  roleMine: ReactNode[];
  roleTeam: ReactNode[];
  lessons: string[];
  next: { slug: "applyspark" | "vocation"; name: string; tagline: string };
};

export const APPLYSPARK: CaseStudy = {
  slug: "applyspark",
  name: "ApplySpark",
  roleLabel: "Co-founder & CMO · 2026—Now",
  tagline: "The study-abroad planner that helps students self-apply with confidence.",
  intro:
    "A planning platform for Vietnamese students applying abroad on their own — deadlines, universities, resources and mentors in one place.",
  liveUrl: "https://applysparkvn.com",
  heroShot: "ApplySpark home page",
  glance: [
    { tab: "My role", value: "Co-founder & Chief Marketing Officer" },
    { tab: "Team", value: <><Fill>number</Fill> co-founders</> },
    { tab: "Timeline", value: "Sep 2026 — present" },
    { tab: "Tools", value: <Fill>e.g. Lovable, Meta Business Suite, Canva, CapCut</Fill> },
  ],
  problem: {
    text: "Vietnamese students who self-apply abroad juggle deadlines, requirements and scholarships across dozens of scattered websites and spreadsheets — and pay high fees for agencies to do what they could do themselves with the right tools.",
    stat: { value: "Dozens", label: "of scattered sites & spreadsheets per applicant" },
  },
  insight:
    "Students don't need someone to apply for them — they need structure, proven resources, and people who've done it before.",
  builtTitle: "What we built",
  features: [
    {
      title: "Deadline tracker",
      body: "Every application deadline in one place, with automatic reminders 14, 7 and 1 day before each one — so nothing slips.",
      shot: "ApplySpark deadline tracker",
    },
    {
      title: "University database",
      body: "61 universities across 13 countries. Compare QS & U.S. News rankings, tuition, requirements, test scores, scholarships and majors side by side.",
      shot: "ApplySpark university compare",
    },
    {
      title: "Proven application resources",
      body: "Curated guides and examples that have actually worked — replacing hours of searching through forums and old posts.",
    },
    {
      title: "Alumni & expert mentors",
      body: "A network of students who've been through it and experts who know the process, for the questions a checklist can't answer.",
    },
  ],
  model: [
    {
      name: "Basic",
      price: "Free",
      body: "The deadline tracker and core tools, free — builds trust and fills the top of the funnel.",
      tone: "sage",
    },
    {
      name: "Paid subscription",
      price: <Fill>price / month</Fill>,
      body: <>Unlocks <Fill>what paid users get</Fill>.</>,
      tone: "butter",
    },
    {
      name: "Why freemium",
      price: "25% convert",
      body: "One in four students who sign up become paying subscribers — free earns the trust, paid earns its price.",
      tone: "powder",
    },
  ],
  gtm: {
    kind: "playbook",
    title: "How I got users",
    items: [
      {
        title: "Brand & PR from zero",
        body: "Built ApplySpark's brand identity and PR strategy from scratch — voice, visuals and the story we tell students.",
      },
      {
        title: "Community first",
        body: "Grew a Facebook community to 1,000+ followers — students who trust us before they ever sign up.",
      },
      {
        title: "Targeted campaigns",
        body: "Campaigns aimed at self-applying students drove 200+ registrations and 50 monthly paying subscribers.",
      },
      {
        title: "Best campaigns",
        body: <Fill>1–2 best campaigns — what you did and the result</Fill>,
      },
    ],
  },
  results: [
    { value: "1,000+", label: "Community followers", tone: "butter" },
    { value: "200+", label: "Registrations", tone: "powder" },
    { value: "50", label: "Paying subscribers / month", tone: "blush" },
    { value: "25%", label: "Sign-up → paid conversion", tone: "sage" },
    { value: "Profitable", label: <Fill>revenue / month or time to profitability</Fill>, tone: "beige" },
  ],
  roleMine: [
    "Led brand, content, PR and growth end to end",
    "Built the Facebook community to 1,000+",
    "Ran the campaigns behind 200+ sign-ups and 50 paying users",
    "Co-designed and built the website, translating user needs into core features",
  ],
  roleTeam: [
    "Co-founders shared product decisions and website build",
    <><Fill>what your co-founders owned</Fill></>,
  ],
  lessons: [
    "Distribution is a product feature.",
    "Free earns trust; paid must earn its price.",
    "Talk to users before you build.",
  ],
  next: { slug: "vocation", name: "Vocation", tagline: "Try the job before you choose the major." },
};

export const VOCATION: CaseStudy = {
  slug: "vocation",
  name: "Vocation",
  roleLabel: "Project leader & web developer · 2026—Now",
  tagline: "Try the job before you choose the major.",
  intro:
    "A career-trial platform where high schoolers take an assessment, get matched to careers, then actually do a mini work day before picking a major.",
  liveUrl: "https://vocation-lovat.vercel.app",
  heroShot: "Vocation job simulator",
  glance: [
    { tab: "My role", value: "Project Leader & Web Developer (original idea)" },
    { tab: "Team", value: "4 people" },
    { tab: "Timeline", value: "Oct 2026 — present" },
    { tab: "Tools", value: <Fill>e.g. React, Vercel, AI API</Fill> },
  ],
  problem: {
    text: "Vietnamese students in grades 10–12 choose university majors based on rumours, parents' wishes or test scores — without ever trying the work. Many end up in the wrong field.",
    stat: { value: "0", label: "hours of real work tried before choosing a major" },
  },
  insight: "Try the job before choosing the major. Experience beats personality quizzes.",
  builtTitle: "What I built",
  features: [
    {
      title: "Two-stage assessment",
      body: "12 everyday school situations (12–15 min), then a 3-minute deep dive into the student's top industry group.",
      shot: "Vocation assessment",
    },
    {
      title: "AI recommendations",
      body: "1–2 best-fit careers, with reasons drawn from the student's own answers and a learning path to get there.",
      shot: "Vocation result page",
    },
    {
      title: "Job Simulator + AI mentor",
      body: "A mini work day at a virtual company: tasks from a virtual manager — writing captions, reading data, prioritising, allocating budget, fixing code — with an AI mentor for hints along the way.",
      shot: "Vocation job simulator",
    },
    {
      title: "AI feedback & personal report",
      body: "Feedback on every task, rolled into a personal report the student can share with parents and teachers.",
      shot: "Vocation personal report",
    },
    {
      title: "Mini-MT Program",
      body: "Two weeks with a real industry specialist — the step from simulation to the real thing.",
    },
  ],
  builtNote: (
    <>
      16 careers across Marketing &amp; Communications, Business &amp; Management, and Technology &amp; IT.{" "}
      <strong>Privacy-first:</strong> no account needed, data stays in the browser.
    </>
  ),
  model: [
    { name: "Free", price: "0 VND", body: "Assessment + 1 career trial. Lets every student try before anyone pays.", tone: "sage" },
    { name: "Family", price: "249,000 VND / year", body: "Full access for one student, bought by parents (B2C).", tone: "butter" },
    { name: "School", price: "149,000 VND / student / year", body: "Sold to schools for whole grades (B2B2C).", tone: "powder" },
  ],
  modelNote:
    "Specialists are provided by sponsoring partner companies — 200 specialist hours per company per year — which keeps costs low.",
  gtm: {
    kind: "flow",
    title: "Product & user flow",
    steps: [
      { title: "Assess", body: "12 school situations + a deep dive" },
      { title: "Get matched", body: "AI picks 1–2 best-fit careers" },
      { title: "Try the job", body: "A mini work day in the simulator" },
      { title: "Get feedback", body: "AI feedback + personal report" },
    ],
  },
  results: [
    { value: "16", label: "Careers students can try", tone: "butter" },
    { value: "5-year", label: "Business plan & financial model (team)", tone: "powder" },
    { value: "From 0", label: "Working product built from scratch", tone: "blush" },
    { value: "—", label: <Fill>students tested, survey responses or waitlist</Fill>, tone: "sage" },
  ],
  roleMine: [
    "Came up with the idea and the solution",
    "Led the 4-person team from concept to full business plan",
    "Single-handedly designed the site structure and user flow",
    "Built the website",
  ],
  roleTeam: ["Financial model led by a teammate", "Business plan written together as a team of 4"],
  lessons: ["Leading means setting priorities, not doing everything.", "A demo convinces faster than a deck."],
  next: {
    slug: "applyspark",
    name: "ApplySpark",
    tagline: "The study-abroad planner that helps students self-apply with confidence.",
  },
};
