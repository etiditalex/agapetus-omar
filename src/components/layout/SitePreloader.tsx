"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

export function SitePreloader() {
  const [progress, setProgress] = useState(8);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 250 : 1300;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const next = Math.min(100, ((now - start) / duration) * 100);
      setProgress(next);
      if (next < 100) frame = window.requestAnimationFrame(tick);
      else window.setTimeout(() => setVisible(false), 160);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-white" role="status" aria-live="polite" aria-label="Loading the site">
      <div className="grid h-full place-items-center">
        <Logo />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#ececf2]">
        <div className="h-full bg-teal transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
