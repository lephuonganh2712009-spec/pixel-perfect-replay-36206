import type { ReactNode } from "react";

import type { Tone } from "@/components/site/pill";
import applysparkShot from "@/assets/applyspark_homepage.png.asset.json";
import applysparkDeadlines from "@/assets/applyspark_deadlines.jpg";
import applysparkUniversities from "@/assets/applyspark_universities.jpg";
import applysparkProfileAnalyzer from "@/assets/applyspark_profile_analyzer.jpg";
import vocationShot from "@/assets/vocation_homepage.png.asset.json";
import vocationJobSim from "@/assets/vocation_job_sim.png.asset.json";
import vocationMiniMt from "@/assets/vocation_mini_mt.png.asset.json";
import vocationFinalReport from "@/assets/vocation_final_report.png.asset.json";
import vocationAssessment from "@/assets/vocation_assessment.webp";
import vocationJobReport from "@/assets/vocation_job_report.webp";
import vocationResults from "@/assets/vocation_results.jpg";

export type CaseStudy = {
  slug: "applyspark" | "vocation";
  name: string;
  roleLabel: string;
  tagline: string;
  intro: string;
  liveUrl: string;
  heroShot: string;
  /** Real screenshot URL; falls back to a labelled placeholder when absent. */
  heroImage?: string;
  glance: { tab: string; value: ReactNode }[];
  problem: {
    text: string;
    stat: { value: string; label: string; source?: string };
    /** Optional groups of supporting numbers, each with its own source. */
    evidence?: { title: string; items: { value: string; label: string; source?: string }[]; source?: string }[];
  };
  insight: string;
  builtTitle: string;
  /** `shot` labels the screenshot; `image` is the real screenshot URL (placeholder shown when absent). */
  features: { title: string; body: ReactNode; shot?: string; image?: string }[];
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
  heroImage: applysparkShot.url,
  glance: [
    { tab: "My role", value: "Co-founder & Chief Marketing Officer" },
    { tab: "Team", value: "5 co-founders" },
    { tab: "Timeline", value: "Sep 2026 — present" },
  ],
  problem: {
    text: "Students who self-apply abroad juggle deadlines, requirements and scholarships across dozens of scattered websites and spreadsheets — and pay high fees for agencies to do what they could do themselves with the right tools.",
    stat: {
      value: "7.3M",
      label: "students study outside their home country",
      source: "UNESCO Higher Education Global Trends Report (2023 data)",
    },
    evidence: [
      {
        title: "Why it's hard",
        items: [
          {
            value: "7",
            label: "applications per applicant on average — each with its own deadlines and requirements",
            source: "Common App End of Season Report, 2025–26",
          },
          {
            value: "376",
            label: "students per school counselor — well above the recommended 250",
            source: "ASCA, 2023–24 (U.S.)",
          },
          {
            value: "23%",
            label: "of international applicants turn to paid agents to get through the process",
            source: "World Education Services survey of 5,880 students",
          },
        ],
      },
    ],
  },
  insight:
    "Students don't need someone to apply for them — they need structure, proven resources, and people who've done it before.",
  builtTitle: "What we built",
  features: [
    {
      title: "Deadline tracker",
      body: "Every application deadline in one place, with automatic reminders 14, 7 and 1 day before each one — so nothing slips.",
      shot: "ApplySpark deadline tracker",
      image: applysparkDeadlines,
    },
    {
      title: "University database",
      body: "61 universities across 13 countries. Compare QS & U.S. News rankings, tuition, requirements, test scores, scholarships and majors side by side.",
      shot: "ApplySpark university compare",
      image: applysparkUniversities,
    },
    {
      title: "Profile analyzer",
      body: "Pick a target university and get a school-by-school read of your profile — academics, activities, essays and recommendations — with an estimated match, your strengths and gaps, and a month-by-month roadmap to the deadline.",
      shot: "ApplySpark profile analyzer",
      image: applysparkProfileAnalyzer,
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
      body: "Globe, country pages and every deadline; a university list with reports to inbox and email; reminders 14, 7 and 1 day before each deadline; requests to alumni; profile analysis 3 times every 30 days.",
      tone: "sage",
    },
    {
      name: "Premium",
      price: "49,000 VND / month",
      body: "Everything in Basic, plus unlimited profile analysis, agency discount codes and direct enquiries, the full archive of successful profiles, new internships 48 hours early and priority on alumni requests.",
      tone: "butter",
    },
    {
      name: "VIP",
      price: "149,000 VND / month",
      body: "Everything in Premium, plus hand-matched alumni, personal introductions to agencies, featured team posts, top priority on every request and personal support in your inbox.",
      tone: "powder",
    },
  ],
  modelNote:
    "Freemium on purpose: the free plan earns students' trust, and one in four who sign up go on to pay.",
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
    ],
  },
  results: [
    { value: "1,000+", label: "Community followers", tone: "butter" },
    { value: "200+", label: "Registrations", tone: "powder" },
    { value: "50", label: "Paying subscribers / month", tone: "blush" },
    { value: "25%", label: "Sign-up → paid conversion", tone: "sage" },
  ],
  roleMine: [
    "Led brand, content, PR and growth end to end",
    "Built the Facebook community to 1,000+",
    "Ran the campaigns behind 200+ sign-ups and 50 paying users",
    "Co-designed and built the website, translating user needs into core features",
  ],
  roleTeam: [
    "Co-founders shared product decisions and website build",
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
  heroShot: "Vocation home page",
  heroImage: vocationShot.url,
  glance: [
    { tab: "My role", value: "Project Leader & Web Developer (original idea)" },
    { tab: "Team", value: "4 people" },
    { tab: "Timeline", value: "Oct 2026 — present" },
  ],
  problem: {
    text: "Choosing a career is a big, costly and hard-to-reverse decision — yet Vietnamese students in grades 10–12 make it without real data, based on rumours, parents' wishes or test scores, and without ever trying the work.",
    stat: { value: "37.6%", label: "of students struggle to choose a career", source: "VNU Hanoi, 2019" },
    evidence: [
      {
        title: "The reason",
        source: "Vocation project survey",
        items: [
          { value: "71%", label: "lack thorough career guidance at school" },
          { value: "66%", label: "have theoretical knowledge without first-hand experience" },
          { value: "70%", label: "are unclear about their own identity and strengths" },
        ],
      },
      {
        title: "The consequences",
        items: [
          {
            value: "60%",
            label: "of students pick the wrong major; only 5% truly understand it",
            source: "HCMC Labor Forecast Center (2019), ZNews",
          },
          {
            value: "20%",
            label: "realise they chose the wrong career only after graduating",
            source: "Dr. Huỳnh Văn Sơn, SGGP",
          },
          {
            value: "20%",
            label: "of students drop out, mostly in their first year",
            source: "Dr. Huỳnh Văn Sơn, SGGP",
          },
        ],
      },
    ],
  },
  insight: "Try the job before choosing the major. Experience beats personality quizzes.",
  builtTitle: "What I built",
  features: [
    {
      title: "Two-stage assessment",
      body: "12 everyday school situations (12–15 min), then a 3-minute deep dive into the student's top industry group.",
      shot: "Vocation assessment",
      image: vocationAssessment,
    },
    {
      title: "AI recommendations",
      body: "1–2 best-fit careers, with reasons drawn from the student's own answers and a learning path to get there.",
      shot: "Vocation result page",
      image: vocationResults,
    },
    {
      title: "Job Simulator + AI mentor",
      body: "A mini work day at a virtual company: tasks from a virtual manager — writing captions, reading data, prioritising, allocating budget, fixing code — with an AI mentor for hints along the way.",
      shot: "Vocation job simulator",
      image: vocationJobSim.url,
    },
    {
      title: "AI feedback & personal report",
      body: "Feedback on every task, rolled into a personal report the student can share with parents and teachers.",
      shot: "Vocation personal report",
      image: vocationJobReport,
    },
    {
      title: "Mini-MT Program",
      body: "Two weeks, 12 sessions, real tasks from 3 careers at partner companies — with feedback from a specialist who does the job. The step from simulation to the real thing.",
      shot: "Vocation Mini-MT program",
      image: vocationMiniMt.url,
    },
    {
      title: "Final report",
      body: "After the 12 days, one clear direction: competence, interest and energy scored for each career, a verdict (pursue, build skills or try another), concrete next steps and a section written for parents.",
      shot: "Vocation Mini-MT final report",
      image: vocationFinalReport.url,
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
