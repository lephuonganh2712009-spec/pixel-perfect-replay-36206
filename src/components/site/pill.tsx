import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const pillVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-paper",
        outline:
          "border-[1.5px] border-foreground text-foreground hover:bg-foreground hover:text-background",
        cream: "bg-cream text-chocolate hover:-translate-y-0.5 hover:bg-butter",
        outlineCream:
          "border-[1.5px] border-cream/70 text-cream hover:border-cream hover:bg-cream hover:text-chocolate",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type PillVariantProps = VariantProps<typeof pillVariants>;

export const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border border-chocolate/10 px-3.5 py-1.5 text-sm font-medium leading-tight text-chocolate",
  {
    variants: {
      tone: {
        blush: "bg-blush",
        butter: "bg-butter",
        sage: "bg-sage",
        powder: "bg-powder",
        beige: "bg-beige",
        cream: "bg-cream",
      },
    },
    defaultVariants: { tone: "butter" },
  },
);

export type Tone = NonNullable<VariantProps<typeof tagVariants>["tone"]>;

export function Tag({
  tone,
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return <span className={cn(tagVariants({ tone }), className)}>{children}</span>;
}

/** Visible marker for content Phuong Anh still needs to supply. */
export function Fill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-0.5 inline rounded-md border border-dashed border-chocolate/40 bg-butter/70 px-1.5 py-0.5 align-middle font-mono text-[0.72rem] leading-normal tracking-wide text-chocolate">
      to add: {children}
    </span>
  );
}
