// components/Hotels/SunSiyam/HotelCard.tsx

import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Hotel } from "@/data/hotels/sun-siyam";
import ButtonCTA from "@/components/ui/ButtonCTA";

type Props = {
  hotel: Hotel;
};

export default function HotelCard({ hotel }: Props) {
  return (
    <Reveal>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100 flex flex-col h-full">

        {/* Image */}
        <div className="relative overflow-hidden h-44">
          <div className="absolute top-3 left-3 z-10">
            <span
              className={cn(
                "text-[10px] font-semibold text-white px-2.5 py-1 rounded-full uppercase tracking-wide",
                hotel.collectionColor
              )}
            >
              {hotel.collection}
            </span>
          </div>

          <Image
            src={hotel.image}
            alt={hotel.name}
            width={400}
            height={220}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Number badge */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#1f4fd8] text-white text-xs font-bold flex items-center justify-center">
            {hotel.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="font-bold text-[#1f4fd8] text-base leading-snug">{hotel.name}</h3>
          <p className="text-sm text-[#1f4fd8]/70 leading-relaxed flex-1">{hotel.tagline}</p>

          {/* Highlights */}
          <ul className="space-y-1">
            {hotel.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-[#1a3a32]/60">
                <span className="w-1 h-1 rounded-full bg-[#C9A34E] shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {hotel.tagLabels.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f0f7f4] text-[#1a3a32] border border-[#d4e6df]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <ButtonCTA variant="secondary" href="" className="mt-2 w-full text-sm font-medium  rounded-lg py-2 hover:text-white transition-all" >
            Voir la fiche →
          </ButtonCTA>
          {/* <button className="mt-2 w-full text-sm font-medium text-[#1a3a32] border border-[#1a3a32]/30 rounded-lg py-2 hover:bg-[#1a3a32] hover:text-white transition-all">
            
          </button> */}
        </div>
      </div>
    </Reveal>
  );
}
