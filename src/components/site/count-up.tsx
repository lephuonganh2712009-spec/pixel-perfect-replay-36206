import { useEffect, useRef, useState } from "react";

import { useInView } from "./reveal";

const PATTERN = /^([^\d]*)([\d,]+)(.*)$/;

/** Animates the first number in a string like "1,000+", "25%" or "300/300". */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(PATTERN);
  const target = match ? parseInt((match[2] ?? "0").replace(/,/g, ""), 10) : 0;
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState<number | null>(null);
  const armed = useRef(false);

  useEffect(() => {
    if (!match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    armed.current = true;
    setN(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || !armed.current) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  if (!match) return <span className={className}>{value}</span>;
  const shown = n === null ? match[2] : n.toLocaleString("en-US");

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden>
        {match[1]}
        {shown}
        {match[3]}
      </span>
    </span>
  );
}
