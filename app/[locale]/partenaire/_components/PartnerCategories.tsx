"use client";

import { useRouter } from "next/navigation";

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
    <div className="w-full space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => router.push(`/partenaires/${cat.slug}`)}
            className="
              w-full text-left rounded-xl p-6 transition-all duration-300 h-full
              bg-white/10 backdrop-blur-sm border border-white/20 text-white
              hover:bg-white/20 hover:border-white/40
            "
          >
            <p className="font-bold text-lg md:text-xl leading-snug">{cat.title}</p>
            {cat.description && (
              <p className="text-white/60 text-base mt-3 leading-relaxed">
                {cat.description}
              </p>
            )}
            <span className="block mt-4 text-white/50 text-sm uppercase tracking-widest">
              Voir les partenaires →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}