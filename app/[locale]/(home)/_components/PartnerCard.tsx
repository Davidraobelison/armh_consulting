import Image from "next/image";
import ButtonCTA from "@/components/ui/ButtonCTA";
import { getTranslations } from "next-intl/server";

type PartnerCardProps = {
  name: string;
  description: string;
  logo: string;
  website: string;
};

export default async function PartnerCard({
  name,
  description,
  logo,
  website,
}: PartnerCardProps) {
  const tPartners = await getTranslations("partner")

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg bg-white/70 shadow-sm hover:shadow-md transition-shadow">

      {/* LOGO */}
      <div className="relative h-40 w-full bg-white flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENU */}
      <div className="flex flex-col justify-between flex-1 px-6 py-6 space-y-4 text-center">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {name}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6 flex justify-center">
          <ButtonCTA href={website} variant="secondary">
            {tPartners("buttonCTA")}
          </ButtonCTA>
        </div>
      </div>
    </div>
  );
}
