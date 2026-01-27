import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero
        title="ARMH Consulting"
        subtitle="EXPAND your NETWORK, EXPAND your TERRITORY, EXPAND your VISIBILITY."
        backgroundImage="/assets/images/others/bg_image_principale.webp"
      />

      {/* INTRO – POSITIONNEMENT */}
      <Section
        backgroundImage="/assets/images/others/bg_main_2.webp"
        overlay
        className="py-32"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-8 text-white">
            <p className="text-xl md:text-2xl font-medium tracking-wide uppercase">
              Projets – Partenariats – Durabilité
            </p>

            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              ARMH Consulting accompagne les destinations, hôtels, DMC,
              tour-opérateurs et acteurs du tourisme pour développer
              leur visibilité, leurs leads et leurs partenariats B2B
              sur les marchés francophones.
            </p>

            <p className="text-xl md:text-2xl opacity-90">
              Sales blitz, roadshows, workshops, salons, webinaires :
              nous concevons des plans d’actions clés en main,
              mesurables et orientés résultats.
            </p>
          </div>
        </Container>
      </Section>

      {/* LES 3 PILIERS */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp" 
        className="py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-3 text-center">
            {/* PROJETS */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold uppercase">
                Projets
              </h3>
              <p className="text-gray-600">
                Des plans d’actions B2B structurés pour générer
                des opportunités concrètes et durables.
              </p>
              <Link
                href="/realisation"
                className="inline-block underline font-extrabold"
              >
                Voir nos projets
              </Link>
            </div>

            {/* PARTENARIATS */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold uppercase">
                Partenariats
              </h3>
              <p className="text-gray-600">
                Des collaborations construites dans la durée,
                fondées sur la confiance et la co-construction.
              </p>
              <Link
                href="/partenariats"
                className="inline-block underline font-medium"
              >
                Devenir partenaire
              </Link>
            </div>

            {/* DURABILITÉ */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold uppercase">
                Durabilité
              </h3>
              <p className="text-gray-600">
                Intégrer la responsabilité sociale et environnementale
                au cœur de chaque projet.
              </p>
              <Link
                href="/durabilite"
                className="inline-block underline font-medium"
              >
                Découvrir notre approche
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA PRINCIPAL */}
      <Section 
        className="py-32"
        backgroundImage="/assets/images/realisation/hero.jpg"
        >
        <Container>
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl text-white font-semibold">
              Parlons de votre projet
            </h2>

            <p className="text-lg text-white max-w-2xl mx-auto">
              Vous êtes un acteur du tourisme et souhaitez renforcer
              votre présence B2B sur les marchés francophones ?
              Construisons ensemble un projet sur mesure.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded
                         hover:bg-gray-800 transition"
            >
              Parlons de votre projet
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
