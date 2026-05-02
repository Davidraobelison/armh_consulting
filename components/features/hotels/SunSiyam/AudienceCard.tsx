// components/Hotels/SunSiyam/AudienceCard.tsx

import Reveal from "@/components/ui/Reveal";
import { AudienceSunCard } from "@/data/hotels/sun-siyam";

type Props = {
  card: AudienceSunCard;
};

export default function AudienceCard({ card }: Props) {
  return (
    <Reveal>
      <div className="bg-white border border-[#d4e6df] rounded-2xl p-6 flex items-start gap-4 h-full hover:shadow-md transition-shadow">
        <div className="w-10 h-10 rounded-full bg-[#1a3a32]/10 flex items-center justify-center text-[#1a3a32] shrink-0">
          {card.icon}
        </div>
        <div>
          <h4 className="font-semibold text-[#1a3a32] mb-1">{card.title}</h4>
          <p className="text-sm text-[#1a3a32]/70 leading-relaxed">{card.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
