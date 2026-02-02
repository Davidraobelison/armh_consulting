import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsPreview } from "@/data/projectsPreview";
import { PartenariatSection } from "./_components/PartenerSections";

export default function Home() {
  return (
    <>
      {/* HERO – MESSAGE MÉTIER CLAIR */}
      <Hero
        title="ARMH Consulting"
        subtitle={
          <>
            <strong>Projets et partenariats durables</strong> pour booster votre
            présence <strong>B2B</strong>
            <br />
            <span className="block mt-2 text-base md:text-lg opacity-90">
              <strong>Représentation touristique B2B</strong> – marchés français et
              francophones
            </span>
          </>
        }
        backgroundImage="/assets/images/others/bg_image_principale.webp"
      />

      {/* INTRO – POSITIONNEMENT */}
      <Section
        backgroundImage="/assets/images/others/bg_main_2.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-8 text-white">
            
            <h3 className="text-xl md:text-2xl font-medium tracking-wide uppercase">
              Des projets et partenariats durables pour développer votre business B2B
            </h3>

            <p className="text-xl md:text-2xl font-light leading-relaxed">
              ARMH Consulting accompagne les destinations, hôtels, DMC,
              tour-opérateurs et acteurs du tourisme dans le développement
              de leur visibilité, de leurs leads et de leurs partenariats B2B
              sur les marchés francophones.
            </p>

            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Sales blitz, roadshows, workshops, salons et webinaires :
              nous concevons et déployons des plans d’actions B2B clés en main,
              mesurables et orientés résultats, pour remplir vos agendas,
              développer vos ventes indirectes et sécuriser vos investissements.
            </p>

            {/* CTA INTERMÉDIAIRE – PRINCIPAL + SECONDAIRE */}
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonCTA href="/contact">
                Parlons de votre projet
              </ButtonCTA>

              <ButtonCTA href="/realisation" variant="secondary">
                Voir nos projets
              </ButtonCTA>
            </div>

          </div>
        </Container>
      </Section>


      {/* NOTRE ADN */}
      {/* <Section className="py-24"
        // backgroundImage="/assets/images/others/img5.webp"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Notre ADN : Projets, Partenariats, Durabilité
            </h2>
            <p className="text-lg text-gray-600">
              Trois piliers qui guident toutes nos actions et garantissent
              des résultats concrets sur vos marchés cibles.
            </p>
          </div>
        </Container>
      </Section> */}

      {/* LES 3 PILIERS */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        className="py-5"
        overlay
      >
        <Container>
          {/* TITRE DE SECTION */}
          <div className="max-w-3xl mx-auto text-center mb-8 space-y-4">
            <h3 className="text-2xl font-semibold uppercase text-white">
              Trois piliers qui guident toutes nos actions
            </h3>

            <p className="text-white/75 text-lg leading-relaxed">
              et garantissent des résultats concrets sur vos marchés cibles.
            </p>
          </div>

          {/* PILIERS */}
          <div className="grid gap-16 md:grid-cols-3 text-center">

            {/* PROJETS */}
            <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold uppercase text-white">
                  Projets
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-white/80">
                  Des actions B2B qui génèrent du business
                </h4>

                <p className="text-white/70 font-medium leading-relaxed text-center">
                  Nous créons des plans d’actions structurés – sales blitz,
                  roadshows, workshops, salons, webinaires – pensés pour
                  remplir vos agendas, développer vos ventes indirectes
                  et sécuriser vos investissements.
                </p>
              </div>

              <div className="flex justify-center">
                <ButtonCTA href="/realisation" variant="secondary">
                  Voir nos projets →
                </ButtonCTA>
              </div>
            </div>

            {/* PARTENARIATS */}
            <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold uppercase text-white">
                  Partenariats
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-white/80">
                  Le prolongement de vos équipes sur les marchés francophones
                </h4>

                <p className="text-white/70 font-medium leading-relaxed text-center">
                  Destinations, hôtels, DMC, TO, agences, institutions…
                  Nous co-construisons des partenariats pluriannuels qui
                  renforcent votre présence B2B et fidélisent vos marchés clés.
                </p>
              </div>

              <div className="flex justify-center">
                <ButtonCTA href="/partenariats" variant="secondary">
                  Devenir partenaire →
                </ButtonCTA>
              </div>
            </div>

            {/* DURABILITÉ */}
            <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold uppercase text-white">
                  Durabilité
                </h3>

                <h4 className="text-lg md:text-xl font-medium text-white/80">
                  Performance commerciale & impact responsable
                </h4>

                <p className="text-white/70 font-medium leading-relaxed text-center">
                  Nous intégrons la durabilité dans vos messages, vos actions
                  et vos choix de partenaires. Avec nos offres “projets durables”
                  et nos partenaires formation, nous alignons vos objectifs
                  business avec vos engagements RSE.
                </p>
              </div>

              <div className="flex justify-center">
                <ButtonCTA href="/durabilite" variant="secondary">
                  Découvrir notre approche →
                </ButtonCTA>
              </div>
            </div>

          </div>
        </Container>
      </Section>


      <Section className="py-32" id="projects"
      backgroundImage="/assets/images/realisation/hero.jpg"
      overlay
      >
        <Container>

          {/* TITRE DE SECTION */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-2xl font-semibold uppercase text-white">
              Quelques projets qui parlent pour nous
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Un aperçu des actions que nous menons avec nos partenaires
              sur les marchés francophones.
            </p>
          </div>

          {/* GRILLE DES CARTES PROJETS */}
          <div className="grid gap-12 md:grid-cols-3">
            {projectsPreview.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                subtitle={project.subtitle}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            ))}
          </div>

          {/* CTA FINAL */}
          <div className="flex justify-center pt-16">
            <ButtonCTA href="/projets">
              Voir tous nos projets
            </ButtonCTA>
          </div>

        </Container>
      </Section>

      <PartenariatSection/>



      {/* NOTRE MANIFESTE */}
      <Section 
        className="py-32"
        backgroundImage="/assets/images/others/img5.webp"
        overlay
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <h3 className="text-2xl md:text-3xl font-semibold uppercase text-white">
              Notre manifeste
            </h3>

            <p className="text-lg leading-relaxed text-white/90">
              Chez ARMH Consulting, nous faisons des projets le moteur de votre croissance :
              des actions sur-mesure, pensées pour renforcer la visibilité de vos destinations
              et générer un impact concret sur les marchés francophones.
            </p>

            <p className="text-lg leading-relaxed text-white/90">
              Nous croyons aux partenariats solides, construits dans la durée, fondés sur la
              confiance, la transparence et la co-construction avec les destinations,
              les institutions et les acteurs du tourisme.
            </p>

            <p className="text-lg leading-relaxed text-white/90">
              Et parce que l’avenir du secteur se joue maintenant, nous plaçons la durabilité
              au cœur de chaque décision, en défendant un tourisme responsable, respectueux
              des territoires, des communautés locales et des ressources, pour créer ensemble
              une valeur qui dure.
            </p>

          </div>
        </Container>
      </Section>


      {/* CTA PRINCIPAL */}
      <Section
        className="py-32"
        backgroundImage="/assets/images/realisation/hero.jpg"
      >
        <Container>
          <div className="text-center space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Parlons de votre projet
            </h2>

            <p className="text-lg max-w-2xl mx-auto">
              Vous êtes un acteur du tourisme et souhaitez renforcer
              votre présence B2B sur les marchés francophones ?
              Construisons ensemble un projet sur mesure.
            </p>

            <ButtonCTA href="/contact">
              Parlons de votre projet →
            </ButtonCTA>
          </div>
        </Container>
      </Section>      
    </>
  );
}

