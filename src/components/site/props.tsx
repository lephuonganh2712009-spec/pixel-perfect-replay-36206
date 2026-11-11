import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type P = { className?: string; style?: CSSProperties };

export function PaperClip({ className, style }: P) {
  return (
    <svg viewBox="0 0 40 110" fill="none" aria-hidden className={cn("h-24 w-9", className)} style={style}>
      <path
        d="M27 32v52a9.5 9.5 0 0 1-19 0V20a13 13 0 0 1 26 0v62"
        className="stroke-muted-foreground"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M17 34v46" className="stroke-muted-foreground" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Bow({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 92" aria-hidden className={cn("h-16 w-20", className)} style={style}>
      <g className="fill-blush stroke-chocolate" strokeWidth="2" strokeLinejoin="round">
        <path d="M56 46 L38 88 L48 81 L54 90 L62 48Z" />
        <path d="M64 46 L82 88 L72 81 L66 90 L58 48Z" />
        <path d="M60 42 C40 8 6 14 13 40 C18 58 44 54 60 42Z" />
        <path d="M60 42 C80 8 114 14 107 40 C102 58 76 54 60 42Z" />
        <ellipse cx="60" cy="43" rx="10" ry="9" />
      </g>
      <path d="M26 30 C34 34 44 38 52 41 M94 30 C86 34 76 38 68 41" className="stroke-chocolate/40" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function StarSticker({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("h-12 w-12 drop-paper", className)} style={style}>
      <path
        d="M50 4 L62 37 L97 38 L69 59 L79 94 L50 73 L21 94 L31 59 L3 38 L38 37 Z"
        className="fill-gold stroke-chocolate/50"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M50 18 L57 39" className="stroke-cream/80" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Magnifier({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("h-14 w-14", className)} style={style}>
      <path d="M60 60 L90 90" className="stroke-chocolate" strokeWidth="11" strokeLinecap="round" />
      <circle cx="40" cy="40" r="27" className="fill-powder/70 stroke-chocolate" strokeWidth="6" />
      <path d="M26 32 a16 16 0 0 1 12 -10" className="stroke-cream" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Envelope({ className, style }: P) {
  return (
    <svg viewBox="0 0 220 150" aria-hidden className={cn("w-56", className)} style={style}>
      <g className="stroke-chocolate" strokeWidth="2.5" strokeLinejoin="round">
        <rect x="6" y="6" width="208" height="138" rx="8" className="fill-paper" />
        <path d="M6 144 L88 76 M214 144 L132 76" fill="none" />
        <path d="M8 10 L110 86 L212 10" className="fill-beige" />
      </g>
      <g transform="translate(110 86)">
        <path
          d="M0 -24 C9 -25 14 -19 20 -15 C26 -9 24 -2 25 5 C24 13 18 18 11 22 C4 26 -5 25 -12 21 C-20 17 -25 10 -24 1 C-25 -8 -20 -15 -13 -20 C-9 -23 -5 -24 0 -24Z"
          className="fill-chocolate"
        />
        <circle r="14" className="stroke-cream/50 fill-none" strokeWidth="1.5" />
        <path d="M0 -8 L2.5 -2.5 L8 -2 L4 2 L5 8 L0 5 L-5 8 L-4 2 L-8 -2 L-2.5 -2.5Z" className="fill-cream" />
      </g>
    </svg>
  );
}

export function Sparkle({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-4 w-4 shrink-0", className)}>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill="currentColor" />
    </svg>
  );
}

const TAPE: Record<string, string> = {
  butter: "color-mix(in oklab, var(--butter) 78%, transparent)",
  blush: "color-mix(in oklab, var(--blush) 85%, transparent)",
  powder: "color-mix(in oklab, var(--powder) 85%, transparent)",
  sage: "color-mix(in oklab, var(--sage) 85%, transparent)",
};

export function Tape({
  className,
  tone = "butter",
  tilt = -6,
}: {
  className?: string;
  tone?: keyof typeof TAPE;
  tilt?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn("tape", className)}
      style={{ "--tape-color": TAPE[tone], transform: `rotate(${tilt}deg)` } as CSSProperties}
    />
  );
}

/** Scalloped postage stamp. */
export function PostageStamp({
  children,
  className,
  tilt = 6,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <div className={cn("drop-paper", className)} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="stamp-edge bg-cream">
        <div className="flex flex-col items-center justify-center border border-chocolate/30 bg-blush px-4 py-3 text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
