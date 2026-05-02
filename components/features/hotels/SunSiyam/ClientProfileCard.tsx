// components/Hotels/SunSiyam/ClientProfileCard.tsx

import Reveal from "@/components/ui/Reveal";
import { ClientProfile } from "@/data/hotels/sun-siyam";

type Props = {
  profile: ClientProfile;
};

export default function ClientProfileCard({ profile }: Props) {
  return (
    <Reveal>
      <div className="border border-[#C9A34E]/50 rounded-xl p-5 text-center space-y-2 hover:border-[#C9A34E] hover:bg-[#C9A34E]/5 transition-all cursor-default">
        <div className="flex justify-center text-[#C9A96E] mb-1">{profile.icon}</div>
        <p className="font-semibold text-white text-sm">{profile.label}</p>
        <p className="text-xs text-white/60 leading-relaxed">{profile.sub}</p>
      </div>
    </Reveal>
  );
}
