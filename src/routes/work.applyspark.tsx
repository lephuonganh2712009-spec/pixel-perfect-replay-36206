import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyPage } from "@/components/site/case-study";
import { APPLYSPARK } from "@/content/case-studies";

const TITLE = "ApplySpark case study — Phuong Anh Le";
const DESCRIPTION =
  "How I co-founded ApplySpark and grew it to 1,000+ community members, 200+ registrations and 50 paying subscribers a month as CMO.";

export const Route = createFileRoute("/work/applyspark")({
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
  component: () => <CaseStudyPage cs={APPLYSPARK} />,
});
