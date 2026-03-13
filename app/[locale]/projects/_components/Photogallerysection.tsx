"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Reveal from "@/components/ui/Reveal";

type GalleryPhoto = {
  src: string;
  caption?: string;
};

type ProjectGallerySectionProps = {
  label?: string;
  title: string;
  subtitle?: string;
  photos: GalleryPhoto[];
};

export default function ProjectGallerySection({
  label,
  title,
  subtitle,
  photos,
}: ProjectGallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex, photos.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex, photos.length]);

  const close = () => setLightboxIndex(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, next, prev]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div className="space-y-10">

        {/* En-tête */}
        <Reveal>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            {label && (
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
                {label}
              </p>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/65 text-base md:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        {/* Grille — pas de Reveal sur les items pour éviter l'effondrement de hauteur */}
        <div className="flex flex-wrap justify-center gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="
                group relative overflow-hidden rounded-xl bg-white/5 border border-white/10
                cursor-zoom-in
                w-full
                sm:w-[calc(50%-8px)]
                md:w-[calc(33.333%-11px)]
                lg:w-[calc(25%-12px)]
              "
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={photo.src}
                alt={photo.caption ?? title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Caption toujours visible */}
              {photo.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pt-8 pb-3 px-3">
                  <p className="text-white text-sm font-medium leading-snug text-center">
                    {photo.caption}
                  </p>
                </div>
              )}
              {/* Léger overlay hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10" />
      </div>

      {/* ── LIGHTBOX ── */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative flex items-center justify-center w-full max-w-5xl px-16 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Précédent */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white text-2xl transition-all duration-200 hover:scale-110"
              aria-label="Photo précédente"
            >
              ‹
            </button>

            {/* Image principale */}
            <div className="relative w-full max-h-[75vh] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].caption ?? title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Suivant */}
            <button
              onClick={next}
              className="absolute right-2 md:right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white text-2xl transition-all duration-200 hover:scale-110"
              aria-label="Photo suivante"
            >
              ›
            </button>

            {/* Caption + compteur */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
              {photos[lightboxIndex].caption && (
                <p className="text-white text-base font-medium">
                  {photos[lightboxIndex].caption}
                </p>
              )}
              <p className="text-white/40 text-sm">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Fermer */}
          <button
            onClick={close}
            className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white text-lg transition-all duration-200 hover:scale-110"
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Miniatures */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[90vw] overflow-x-auto pb-1">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`relative shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-all duration-200
                  ${i === lightboxIndex ? "border-white opacity-100 scale-110" : "border-white/20 opacity-50 hover:opacity-80"}`}
              >
                <Image src={p.src} alt="" fill className="object-cover" sizes="48px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}