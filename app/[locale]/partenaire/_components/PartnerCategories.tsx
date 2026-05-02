"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type Category = {
  slug: string;
  title: string;
  description: string;
};

const categories: Category[] = [
  {
    slug: "destinations",
    title: "Destinations & institutions touristiques",
    description: "Offices de tourisme, CRT, ministères, organisations nationales…",
  },
  {
    slug: "hotels",
    title: "Hôtels et Groupes hôteliers",
    description: "",
  },
  {
    slug: "sun-siyam",
    title: "Sun Siyam Resorts",
    description: "6 resorts aux Maldives et au Sri Lanka — Luxury, Privé & Lifestyle Collection",
  },
  {
    slug: "dmc",
    title: "DMC & Prestataires locaux",
    description: "",
  },
  {
    slug: "touroperateurs",
    title: "Tours Opérateurs & Agences de voyages",
    description: "",
  },
  {
    slug: "formation",
    title: "Organismes de formation & Écoles du tourisme",
    description: "",
  },
];

export default function PartnerCategories() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => router.push(`/partenaires/${cat.slug}`)}
            className="group w-full text-left rounded-2xl p-6 flex flex-col h-full transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:border-[#C9A96E]/60 hover:shadow-[0_8px_32px_rgba(201,169,110,0.15)]"
          >
            {/* Gold accent line — s'étend au hover */}
            <span className="block h-0.5 w-6 bg-[#C9A96E]/40 mb-4 transition-all duration-500 group-hover:w-12 group-hover:bg-[#C9A96E]" />

            {/* Titre */}
            <p className="font-semibold text-lg md:text-xl leading-snug">
              {cat.title}
            </p>

            {/* Description optionnelle */}
            {cat.description && (
              <p className="text-white/55 text-sm mt-2 leading-relaxed">
                {cat.description}
              </p>
            )}

            {/* Spacer pour pousser le CTA au bas */}
            <div className="flex-1" />

            {/* CTA — toujours aligné en bas */}
            <div className="flex items-center gap-2 mt-5 text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors duration-300">
              <span className="text-xs font-semibold uppercase tracking-widest">
                Voir les partenaires
              </span>
              <ArrowRight
                size={13}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
