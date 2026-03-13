"use client";

import { useState } from "react";

type Category = {
  title: string;
  description: string;
  partners: { name: string; website?: string; social?: string }[];
};

const categories: Category[] = [
  {
    title: "Destinations & institutions touristiques",
    description: "Offices de tourisme, CRT, ministères, organisations nationales…",
    partners: [],
  },
  {
    title: "Hôtels et Groupes hôteliers",
    description: "",
    partners: [],
  },
  {
    title: "DMC & Prestataires locaux",
    description: "",
    partners: [],
  },
  {
    title: "Tours Opérateurs & Agences de voyages",
    description: "",
    partners: [],
  },
  {
    title: "Organismes de formation & Ecoles du tourisme",
    description: "",
    partners: [],
  },
];

export default function PartnerCategories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="w-full space-y-4">
      {/* Cards row — all at same height, never broken by accordion */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`
              w-full text-left rounded-xl p-6 transition-all duration-300 h-full
              bg-white/10 backdrop-blur-sm border border-white/20 text-white
              hover:bg-white/20 hover:border-white/40
              ${openIndex === i ? "bg-white/20 border-white/40 ring-1 ring-white/30" : ""}
            `}
          >
            <p className="font-bold text-lg md:text-xl leading-snug">{cat.title}</p>
            {cat.description && (
              <p className="text-white/60 text-base mt-3 leading-relaxed">{cat.description}</p>
            )}
            <span className="block mt-4 text-white/50 text-sm uppercase tracking-widest">
              {openIndex === i ? "▲ Fermer" : "▼ Nos partenaires"}
            </span>
          </button>
        ))}
      </div>

      {/* Accordion panel — full width, below all cards */}
      {openIndex !== null && (
        <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
          <p className="text-white/60 text-base font-semibold uppercase tracking-widest mb-4">
            {categories[openIndex].title}
          </p>
          {categories[openIndex].partners.length === 0 ? (
            <p className="text-white/50 italic text-base">Partenaires à venir</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories[openIndex].partners.map((p, j) => (
                <div key={j} className="space-y-1">
                  <p className="font-semibold text-base">{p.name}</p>
                  {p.website && (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 underline hover:text-white transition text-sm"
                    >
                      Site web
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}