import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Nos réalisations",
    path: "/discographie",
  });

export default function Realisation() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="NOS RÉALISATIONS"
        subtitle="Projets, collaborations & expériences terrain"
        backgroundImage="/assets/images/realisation/hero.jpg"
      />

      {/* INTRO */}
      <Section>
        <Container>
          <p className="text-lg text-gray-700 max-w-4xl">
            ARMH Consulting accompagne des acteurs publics et privés
            dans la conception et la mise en œuvre de projets liés
            au tourisme, au marketing et à l’hôtellerie.
            Chaque réalisation reflète notre approche stratégique,
            humaine et durable.
          </p>
        </Container>
      </Section>

      {/* LISTE DES RÉALISATIONS */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Quelques projets menés
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Projet 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Développement touristique territorial
              </h3>
              <p className="text-gray-600">
                Diagnostic stratégique et accompagnement des acteurs
                locaux pour structurer une offre touristique durable
                et attractive.
              </p>
            </div>

            {/* Projet 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Stratégie marketing & image de marque
              </h3>
              <p className="text-gray-600">
                Définition du positionnement, création d’une identité
                cohérente et mise en place d’actions de communication
                ciblées.
              </p>
            </div>

            {/* Projet 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Accompagnement de projets hôteliers
              </h3>
              <p className="text-gray-600">
                Conseil stratégique, amélioration de l’expérience client
                et optimisation des services pour des établissements
                hôteliers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROCHE PROJET */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Notre approche projet
          </h2>

          <div className="space-y-6 text-lg text-gray-700 max-w-4xl">
            <p>
              Chaque réalisation est menée en étroite collaboration
              avec les parties prenantes, en tenant compte des
              spécificités du territoire, des enjeux économiques
              et des impacts sociaux et environnementaux.
            </p>

            <p>
              ARMH Consulting privilégie des solutions concrètes,
              mesurables et durables, adaptées aux réalités du terrain.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
