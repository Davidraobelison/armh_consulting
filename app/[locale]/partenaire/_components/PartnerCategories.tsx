"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SubItem = {
  slug: string;
  title: string;
  description?: string;
};

type Category = {
  key: string;
  title: string;
  description: string;
  subItems?: SubItem[];
  directSlug?: string;
};

const categories: Category[] = [
  {
    key: "destinations",
    title: "Destinations & institutions touristiques",
    description: "Offices de tourisme, CRT, ministères, organisations nationales…",
    directSlug: "destinations",
  },
  {
    key: "hotels",
    title: "Hôtels et Groupes hôteliers",
    description: "",
    subItems: [
      {
        slug: "sun-siyam",
        title: "Sun Siyam Resorts",
        description: "6 resorts aux Maldives et au Sri Lanka — Luxury, Privé & Lifestyle",
      },
    ],
  },
  {
    key: "dmc",
    title: "DMC & Prestataires locaux",
    description: "",
    subItems: [
      {
        slug: "dmc",
        title: "BBVoyage / IndeXperience",
        description: "DMC Inde · Népal · Bhoutan",
      },
    ],
  },
  {
    key: "touroperateurs",
    title: "Tours Opérateurs & Agences de voyages",
    description: "",
    directSlug: "touroperateurs",
  },
  {
    key: "formation",
    title: "Organismes de formation & Écoles du tourisme",
    description: "",
    directSlug: "formation",
  },
];

export default function PartnerCategories() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleCategoryClick = (cat: Category) => {
    if (cat.subItems && cat.subItems.length > 0) {
      setExpanded(expanded === cat.key ? null : cat.key);
    } else if (cat.directSlug) {
      router.push(`/partenaires/${cat.directSlug}`);
    }
  };

  return (
    <div className="w-full">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const isExpanded = expanded === cat.key;
          const hasSubItems = cat.subItems && cat.subItems.length > 0;

          return (
            <div key={cat.key} className="flex flex-col">
              <button
                onClick={() => handleCategoryClick(cat)}
                className={cn(
                  "group w-full text-left p-6 flex flex-col transition-all duration-300 bg-white/10 backdrop-blur-sm border text-white hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(201,169,110,0.15)]",
                  isExpanded
                    ? "rounded-t-2xl border-[#C9A96E]/60 bg-white/15"
                    : "rounded-2xl border-white/20 hover:border-[#C9A96E]/60"
                )}
              >
                <span
                  className={cn(
                    "block h-0.5 mb-4 transition-all duration-500",
                    isExpanded
                      ? "w-12 bg-[#C9A96E]"
                      : "w-6 bg-[#C9A96E]/40 group-hover:w-12 group-hover:bg-[#C9A96E]"
                  )}
                />

                <p className="font-semibold text-lg md:text-xl leading-snug">
                  {cat.title}
                </p>

                {cat.description && (
                  <p className="text-white/90 text-base font-medium mt-2">
                    {cat.description}
                  </p>
                )}

                <div className="flex-1" />

                <div
                  className={cn(
                    "flex items-center gap-2 mt-5 transition-colors duration-300",
                    isExpanded
                      ? "text-[#C9A96E]"
                      : "text-[#C9A96E]/60 group-hover:text-[#C9A96E]"
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {hasSubItems
                      ? isExpanded
                        ? "Fermer"
                        : "Choisir un partenaire"
                      : "Voir les partenaires"}
                  </span>
                  {hasSubItems ? (
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={cn(
                        "transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )}
                    />
                  ) : (
                    <ArrowRight
                      size={13}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  )}
                </div>
              </button>

              {hasSubItems && isExpanded && (
                <div className="border border-t-0 border-[#C9A96E]/60 rounded-b-2xl bg-white/5 backdrop-blur-sm p-3 space-y-2">
                  {cat.subItems!.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => router.push(`/partenaires/${item.slug}`)}
                      className="group/sub w-full text-left rounded-xl p-4 flex items-center justify-between transition-all duration-200 bg-white/5 hover:bg-[#C9A96E]/10 border border-white/10 hover:border-[#C9A96E]/40 text-white"
                    >
                      <div>
                        <p className="font-semibold text-base">{item.title}</p>
                        {item.description && (
                          <p className="text-white/60 text-sm mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <ArrowRight
                        size={15}
                        strokeWidth={2}
                        className="text-[#C9A96E]/50 group-hover/sub:text-[#C9A96E] transition-all duration-200 group-hover/sub:translate-x-1 shrink-0 ml-3"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
