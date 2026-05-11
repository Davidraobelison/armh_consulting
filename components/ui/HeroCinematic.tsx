"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const SLIDES = [
  { image: "/assets/images/home/hero/main.webp", label: "Inde" },
  { image: "/assets/images/home/hero/2.webp", label: "Népal" },
  { image: "/assets/images/home/hero/3.webp", label: "Bhoutan" },
];

interface HeroCinematicProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
}

export default function HeroCinematic({ title, subtitle, description }: HeroCinematicProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center">

      {/* BACKGROUNDS */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* CONTENU centré verticalement */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 text-white py-10 mt-16">

          <div className="flex flex-col items-center justify-center px-2">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-light tracking-wide">
                {title}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <h3 className="mt-0 text-xl md:text-2xl font-medium tracking-wide uppercase">
              {subtitle}
            </h3>
          </Reveal>

          <Reveal delay={0.4}>
            <span className="block mt-2 text-base md:text-xl opacity-90">
              {description}
            </span>
          </Reveal>

          {/* RÉSEAUX SOCIAUX */}
          <div className="pt-6 flex items-center justify-center gap-8">
            <Reveal delay={0.6}>
              <a href="https://www.facebook.com/profile.php?id=100011643994062" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaFacebook className="w-10 h-10 hover:text-blue-500 transition" />
              </a>
            </Reveal>
            <Reveal delay={0.8}>
              <a href="https://fr.linkedin.com/company/armhconsultingofficiel" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaLinkedin className="w-10 h-10 hover:text-blue-500 transition" />
              </a>
            </Reveal>
            <Reveal delay={1}>
              <a href="https://www.instagram.com/rina_andria_pro/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaInstagram className="w-10 h-10 hover:text-pink-500 transition" />
              </a>
            </Reveal>
          </div>

          {/* DOTS NAVIGATION */}
          <div className="flex items-center justify-center gap-3">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => setCurrent(i)}
                aria-label={`Voir ${slide.label}`}
                className={`transition-all duration-300 rounded-full w-2 h-2 ${
                  i === current
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}