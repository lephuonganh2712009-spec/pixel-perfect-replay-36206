import type { CSSProperties, ReactNode } from "react";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Tape } from "./props";
import type { Tone } from "./pill";

/** Clearly labelled spot for a real photo or screenshot to be dropped in later. */
export function ImagePlaceholder({
  label,
  className,
  ratio = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "bg-grid-paper relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center",
        ratio,
        className,
      )}
    >
      <ImageIcon className="h-7 w-7 text-chocolate/40" strokeWidth={1.5} aria-hidden />
      <span className="micro text-chocolate/55">(Image placeholder)</span>
      <span className="font-display text-xl italic leading-tight text-chocolate/80 md:text-2xl">{label}</span>
    </div>
  );
}

/** Full-page website screenshot: shows the top, then slowly scrolls to the bottom on hover. */
export function Screenshot({
  src,
  alt,
  className,
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={cn("group/shot relative w-full overflow-hidden bg-paper", ratio, className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-[object-position] duration-[6000ms] ease-in-out group-hover/shot:object-bottom motion-reduce:transition-none"
      />
    </div>
  );
}

export function BrowserFrame({
  url,
  children,
  className,
  tilt = 0,
  tape = true,
  tapeTone = "butter",
}: {
  url: string;
  children: ReactNode;
  className?: string;
  tilt?: number;
  tape?: boolean;
  tapeTone?: "butter" | "blush" | "powder" | "sage";
}) {
  return (
    <div className={cn("tilt relative", className)} style={{ "--tilt": `${tilt}deg` } as CSSProperties}>
      {tape && <Tape tone={tapeTone} className="-top-3 -right-6" tilt={28} />}
      <div className="overflow-hidden rounded-xl border-[1.5px] border-chocolate bg-cream shadow-paper">
        <div className="flex items-center gap-3 border-b-[1.5px] border-chocolate bg-paper px-3 py-2">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-blush ring-1 ring-chocolate/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-butter ring-1 ring-chocolate/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-sage ring-1 ring-chocolate/40" />
          </div>
          <div className="micro flex-1 truncate rounded-full bg-cream px-3 py-1 text-[0.65rem] normal-case tracking-normal text-chocolate/70">
            {url}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

const NOTE_TONES: Record<Tone, string> = {
  butter: "bg-butter",
  blush: "bg-blush",
  powder: "bg-powder",
  beige: "bg-beige",
  sage: "bg-sage",
  cream: "bg-cream",
};

export function StickyNote({
  tone = "butter",
  tilt = 0,
  className,
  children,
}: {
  tone?: Tone;
  tilt?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("sticky-note text-chocolate", NOTE_TONES[tone], className)}
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Small manila folder card with a labelled tab. */
export function FolderMini({
  tab,
  children,
  className,
  tone = "beige",
}: {
  tab: string;
  children: ReactNode;
  className?: string;
  tone?: "beige" | "paper" | "powder";
}) {
  const bg = { beige: "bg-beige", paper: "bg-paper", powder: "bg-powder" }[tone];
  return (
    <div className={cn("group flex flex-col transition-transform duration-300 hover:-translate-y-1.5", className)}>
      <div className={cn("folder-tab micro w-fit px-5 pb-2 pt-2.5 text-chocolate/80", bg)}>({tab})</div>
      <div className={cn("flex-1 rounded-b-xl rounded-tr-xl p-5 shadow-note group-hover:shadow-paper", bg)}>
        {children}
      </div>
    </div>
  );
}

export function SectionHeading({
  label,
  children,
  className,
  align = "left",
  as: Tag = "h2",
}: {
  label: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className="micro mb-4 opacity-80">({label})</p>
      <Tag className="text-5xl md:text-7xl">{children}</Tag>
    </div>
  );
}
