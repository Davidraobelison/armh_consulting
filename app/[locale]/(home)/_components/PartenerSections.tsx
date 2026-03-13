import PartnerCard from "./PartnerCard";
import { getLocale, getTranslations } from "next-intl/server";
import { partnersByLocale } from "@/data/partners/index";
import { Locale } from "@/lib/i18n/routing";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";



export default async function PartnersPage() {
  const locale = await getLocale(); // "fr" | "en"
  const partners = partnersByLocale[locale as Locale];
  const tPartners = await getTranslations("partner")

  return (
    <Section
      backgroundImage="/assets/images/others/bg_image_principale.webp" 
      overlay
      id="partenaires" 
      className="py-28 bg-neutral-900">
      <Container>

        {/* TITRE */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl font-semibold uppercase text-white">
            {tPartners("title")}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            {tPartners("subtitle")}
          </p>
        </div>

        {/* GRILLE PARTENAIRES */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              logo={partner.logo}
              description={partner.summary}
              website={partner.website}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
