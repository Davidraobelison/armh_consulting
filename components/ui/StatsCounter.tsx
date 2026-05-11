"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 20, suffix: "+", label: "Ans d'expertise terrain" },
  { value: 3,  suffix: "",  label: "Destinations signature" },
  { value: 150, suffix: "+", label: "Agences partenaires" },
  { value: 2026, suffix: "", label: "Recommandé Partir.com" },
];

function useCountUp(target: number, duration = 1500, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, 1400, started);
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-8 border-r border-white/20 last:border-r-0">
      <span className="text-4xl md:text-5xl font-light text-white tracking-wide">
        {count}{suffix}
      </span>
      <span className="text-xs uppercase tracking-[2px] text-white/60 text-center">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full bg-black/30 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} started={started} />
        ))}
      </div>
    </div>
  );
}