// components/Hotels/SunSiyam/HotelsGrid.tsx

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import HotelCard from "./HotelCard";
import Reveal from "@/components/ui/Reveal";
import { HOTELS, FILTER_TABS, HotelFilter } from "@/data/hotels/sun-siyam";

export default function HotelsGrid() {
  const [activeFilter, setActiveFilter] = useState<HotelFilter>("tous");

  const filtered = HOTELS.filter((h) => h.tags.includes(activeFilter));

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <Reveal>
          <p className="text-sm font-semibold text-white uppercase tracking-widest">
            Les hôtels
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Six fiches prêtes à vendre
          </h2>
        </Reveal>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => setActiveFilter(tab.slug)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === tab.slug
                ? "bg-[#1f4fd8] text-white"
                : "bg-white text-[#1f4fd8] border border-[#d4e6df] hover:border-[#1f4fd8]/40"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
