import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Nos Services",
    path: "/nos-services",
  });

export default function Services() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="NOS SERVICES"
        subtitle="Des solutions sur mesure pour vos projets"
        backgroundImage="/assets/images/service/hero.webp"
      />

      {/* INTRO */}
      <Section>
        <Container>
          <p className="text-lg text-gray-700 max-w-4xl">
            ARMH Consulting accompagne les acteurs du tourisme,
            du marketing et de l’hôtellerie dans la définition
            et la mise en œuvre de stratégies performantes,
            durables et adaptées à leurs enjeux.
          </p>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Nos domaines d’expertise
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Service 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Conseil en tourisme
              </h3>
              <p className="text-gray-600">
                Analyse territoriale, développement de destinations,
                structuration de l’offre touristique et accompagnement
                des acteurs locaux.
              </p>
            </div>

            {/* Service 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Marketing & communication
              </h3>
              <p className="text-gray-600">
                Stratégie de marque, positionnement, communication
                digitale et valorisation de l’image des territoires
                et des établissements.
              </p>
            </div>

            {/* Service 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Hôtellerie & hospitalité
              </h3>
              <p className="text-gray-600">
                Accompagnement des projets hôteliers, amélioration
                de l’expérience client, optimisation des services
                et montée en gamme.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROCHE */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Notre approche
          </h2>

          <div className="space-y-6 text-lg text-gray-700 max-w-4xl">
            <p>
              Chaque mission débute par une compréhension approfondie
              de vos besoins, de votre contexte et de vos objectifs.
            </p>
            <p>
              ARMH Consulting privilégie une approche collaborative,
              pragmatique et orientée résultats, en intégrant les
              dimensions économiques, sociales et environnementales.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
