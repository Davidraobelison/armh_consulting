"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/assets/images/partenaires/sun-siyam/hero/hero-1.JPG",
  "/assets/images/partenaires/sun-siyam/hero/hero-2.JPG",
  "/assets/images/partenaires/sun-siyam/hero/hero-4.JPG",
  "/assets/images/partenaires/sun-siyam/hero/hero-3.JPG",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-[-10%] bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}