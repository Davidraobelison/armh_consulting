import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Hotel } from "@/data/hotels/sun-siyam";
import ButtonCTA from "@/components/ui/ButtonCTA";
import { ArrowRight, ArrowRightCircleIcon } from "lucide-react";

type Props = {
  hotel: Hotel;
};

export default function HotelCard({ hotel }: Props) {
  return (
    <Reveal>
      <div className="rounded-2xl overflow-hidden group flex flex-col h-full bg-white/20 border border-white/10 shadow-xl">

        {/* IMAGE — haut de la carte */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10">
            <span className={cn(
              "text-[10px] font-semibold text-white px-2.5 py-1 rounded-full uppercase tracking-wide shadow-md",
              hotel.collectionColor
            )}>
              {hotel.collection}
            </span>
          </div>
          <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[#1f4fd8] text-white text-xs font-bold flex items-center justify-center shadow-md">
            {hotel.id}
          </div>
        </div>

        {/* TEXTE — bas de la carte, complètement séparé */}
        <div className="flex flex-col gap-3 p-5">

          <h3 className="font-bold text-white text-base leading-snug">
            {hotel.name}
          </h3>

          <p className="text-base text-white/90">
            {hotel.tagline}
          </p>

          {/* Highlights */}
          <ul className="space-y-1">
            {hotel.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-semibold  text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* Tags + CTA */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {hotel.tagLabels.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#1f4fd8]/80 text-white border border-[#1f4fd8]/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ButtonCTA href={`/partenaires/sun-siyam/${hotel.slug}`} variant="secondary" className="px-3! py-1! text-base!">
              Consulter l'hotel <ArrowRightCircleIcon className="w-4 h-4 ml-2" />
            </ButtonCTA>
          </div>

        </div>

      </div>
    </Reveal>
  );
}