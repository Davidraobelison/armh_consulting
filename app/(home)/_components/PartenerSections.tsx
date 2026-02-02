import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { partners } from "@/data/partners";
import PartnerCard from "./PartnerCard";

export function PartenariatSection() {
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
            Nos partenaires
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Des collaborations solides avec des acteurs engagés.
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
