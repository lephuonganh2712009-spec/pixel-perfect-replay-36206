import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyPage } from "@/components/site/case-study";
import { VOCATION } from "@/content/case-studies";

const TITLE = "Vocation case study — Phuong Anh Le";
const DESCRIPTION =
  "Vocation lets high schoolers try a job before choosing a major: assessment, AI career matching and a job simulator across 16 careers.";

export const Route = createFileRoute("/work/vocation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CaseStudyPage cs={VOCATION} />,
});
