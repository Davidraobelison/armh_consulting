"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/assets/images/partenaires/sun-siyam/hero/hero-1.webp",
  "/assets/images/partenaires/sun-siyam/hero/hero-2.webp",
  "/assets/images/partenaires/sun-siyam/hero/hero-4.webp",
  "/assets/images/partenaires/sun-siyam/hero/hero-3.webp",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-[-10%]"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-center"
              priority={i === 0}        // ← seulement la 1ère charge en priorité
              loading={i === 0 ? "eager" : "lazy"}  // ← les autres en lazy
              sizes="100vw"
              quality={80}
            />
          </div>
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