import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "A propos",
    path: "/a-propos",
  });

export default function About() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="QUI SOMMES-NOUS ?"
        subtitle="Dynamique · Passionné · Impliqué"
        backgroundImage="/assets/images/about/hero.jpg"
      />

      {/* HISTOIRE */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            L’histoire de ARMH Consulting
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              ARMH Consulting est né d’une passion pour le tourisme,
              le marketing et l’hôtellerie, avec une volonté forte
              d’accompagner les acteurs du secteur vers une croissance
              durable et responsable.
            </p>

            <p>
              Fort d’une expérience terrain et stratégique, le cabinet
              intervient auprès d’organisations publiques et privées
              pour concevoir des solutions sur mesure, adaptées aux
              réalités locales et aux enjeux internationaux.
            </p>
          </div>
        </Container>
      </Section>

      {/* MISSION & VALEURS */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Mission & valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-medium mb-3">Engagement</h3>
              <p className="text-gray-600">
                Un accompagnement impliqué, fondé sur l’écoute,
                la proximité et la confiance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Expertise</h3>
              <p className="text-gray-600">
                Une maîtrise des enjeux du tourisme, du marketing
                et de l’hôtellerie.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Durabilité</h3>
              <p className="text-gray-600">
                Des solutions responsables, respectueuses des
                territoires et des communautés.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ENGAGEMENTS */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Engagements sociaux & environnementaux
          </h2>

          <p className="text-lg text-gray-700 max-w-4xl">
            ARMH Consulting place la responsabilité sociale et
            environnementale au cœur de ses actions, en intégrant
            des pratiques durables, inclusives et respectueuses
            des écosystèmes locaux dans l’ensemble de ses missions.
          </p>
        </Container>
      </Section>
    </>
  );
}
