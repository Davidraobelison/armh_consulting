"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type SubItem = {
  slug: string;
  title: string;
  description?: string;
  href?: string;
  groupLabel?: string;
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
        description: "6 resorts aux Maldives et au Sri Lanka - Luxury, Privé & Lifestyle",
        groupLabel: "Sun Siyam Resorts",
      },
      {
        slug: "mbmh-zanzibar",
        title: "Zanzibar White Sand Luxury Villa & Spa",
        href: "https://www.mb-mh.fr/zanzibar-white-sand",
        groupLabel: "MB-MH",
      },
      {
        slug: "mbmh-wood",
        title: "The Wood Hotel & Spa",
        href: "https://www.mb-mh.fr/copie-de-la-flora-resort-spa",
      },
      {
        slug: "mbmh-maradiva",
        title: "Maradiva Villa Resort & Spa",
        href: "https://www.mb-mh.fr/fr-maradiva",
      },
      {
        slug: "mbmh-sands",
        title: "Sands Suite Resort & Spa",
        href: "https://www.mb-mh.fr/fr-sands",
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

  const handleSubItemClick = (item: SubItem) => {
    setExpanded(null);
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(`/partenaires/${item.slug}`);
    }
  };

  return (
    <div className="w-full">
      {/* Fond sombre derrière le dropdown — pointer-events-none pour ne pas bloquer le hover */}
      {expanded && (
        <div className="fixed inset-0 z-40 bg-black/60 pointer-events-none" aria-hidden="true" />
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const hasSubItems = !!(cat.subItems?.length);
          const isExpanded = expanded === cat.key;

          return (
            /*
             * Le wrapper est en `relative` — le dropdown est en `absolute top-full`.
             * onMouseLeave se déclenche seulement quand la souris quitte
             * l'ensemble (carte + dropdown), pas l'espace entre les deux.
             */
            <div
              key={cat.key}
              className={cn("relative flex flex-col", isExpanded && "z-50")}
              onMouseEnter={() => hasSubItems && setExpanded(cat.key)}
              onMouseLeave={() => hasSubItems && setExpanded(null)}
            >
              {/* ── Carte ── */}
              <button
                onClick={() =>
                  !hasSubItems && cat.directSlug &&
                  router.push(`/partenaires/${cat.directSlug}`)
                }
                className={cn(
                  "group w-full flex-1 text-left p-6 flex flex-col transition-all duration-300",
                  "bg-white/10 backdrop-blur-sm border text-white rounded-2xl",
                  "hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(201,169,110,0.15)] hover:border-[#C9A96E]/60",
                  isExpanded && "border-[#C9A96E]/60 bg-white/15 rounded-b-none"
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
                    {hasSubItems ? "Choisir un partenaire" : "Voir les partenaires"}
                  </span>
                  {hasSubItems ? (
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={cn("transition-transform duration-300", isExpanded && "rotate-180")}
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

              {/* ── Dropdown collé sous la carte (absolute) ── */}
              {hasSubItems && isExpanded && (
                <div
                  className="absolute top-full left-0 right-0 z-50
                             bg-[#071e36]/95 backdrop-blur-md
                             border border-t-0 border-[#C9A96E]/50
                             rounded-b-2xl shadow-[0_16px_40px_rgba(0,0,0,0.5)]
                             p-3 space-y-1"
                >
                  {cat.subItems!.map((item, idx) => {
                    const showGroupLabel = !!item.groupLabel;
                    const isNewGroup = showGroupLabel && idx > 0;

                    return (
                      <div key={item.slug}>
                        {showGroupLabel && (
                          <div className={cn("px-1", isNewGroup && "pt-2 mt-1 border-t border-white/10")}>
                            <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-widest mb-1.5 px-2">
                              {item.groupLabel}
                            </p>
                          </div>
                        )}

                        <button
                          onClick={() => handleSubItemClick(item)}
                          className="group/sub w-full text-left rounded-xl px-4 py-3 flex items-center justify-between
                                     transition-all duration-200 bg-white/5 hover:bg-[#C9A96E]/15
                                     border border-white/10 hover:border-[#C9A96E]/40 text-white"
                        >
                          <div className="min-w-0 pr-3">
                            <p className="font-medium text-sm leading-snug truncate">{item.title}</p>
                            {item.description && (
                              <p className="text-white/50 text-xs mt-0.5">{item.description}</p>
                            )}
                          </div>
                          {item.href ? (
                            <ExternalLink
                              size={13}
                              strokeWidth={2}
                              className="text-[#C9A96E]/50 group-hover/sub:text-[#C9A96E] transition shrink-0"
                            />
                          ) : (
                            <ArrowRight
                              size={13}
                              strokeWidth={2}
                              className="text-[#C9A96E]/50 group-hover/sub:text-[#C9A96E] group-hover/sub:translate-x-0.5 transition shrink-0"
                            />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
