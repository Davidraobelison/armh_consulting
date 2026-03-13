import { generateSeoMetadata } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Reveal from "@/components/ui/Reveal";
import PartnerCategories from "./_components/PartnerCategories";
import PartnerForm from "./_components/PartnerForm";
import PartnerBenefits from "./_components/PartnerBenefits";
import PartnerProcess from "./_components/PartnerProcess";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Partenariats",
    path: "/partenaire",
  });

export default function PartenairePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-40 relative h-auto min-h-auto w-full"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-8 text-white">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-light tracking-wide">
                Partenariats : le hub B2B de ARMH Consulting
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide uppercase">
                Co-construire des dispositifs B2B durables sur les marchés francophones
              </h3>
            </Reveal>

            <Reveal delay={0.4}>
              <span className="block text-base md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Chez ARMH Consulting, un partenariat n&apos;est ni une simple prestation
                ni un contrat de visibilité. C&apos;est une relation de confiance, construite
                dans la durée, où nous co-concevons avec vous des dispositifs B2B
                sur-mesure pour les marchés francophones. Ensemble, nous partageons
                les risques, les objectifs et les résultats, dans une logique de{" "}
                <strong>transparence, de durabilité et de progrès continu.</strong>
              </span>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="pt-4">
                <ButtonCTA href="#formulaire" variant="secondary">
                  Devenir partenaire
                </ButtonCTA>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── AVEC QUI TRAVAILLONS-NOUS ─── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold uppercase text-white">
                Avec qui travaillons-nous ?
              </h2>
            </Reveal>
          </div>
          <PartnerCategories />
        </Container>
      </Section>

      {/* ─── CE QUE VOUS Y GAGNEZ ─── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold uppercase text-white">
                Ce que vous y gagnez
              </h2>
            </Reveal>
          </div>
          <PartnerBenefits />
        </Container>
      </Section>

      {/* ─── COMMENT TRAVAILLONS-NOUS ENSEMBLE ─── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold uppercase text-white">
                Comment travaillons-nous ensemble ?
              </h2>
            </Reveal>
          </div>
          <PartnerProcess />
        </Container>
      </Section>

      {/* ─── CTA + FORMULAIRE ─── */}
      <Section
        className="py-32"
        backgroundImage="/assets/images/contact/2.webp"
        overlay
        id="formulaire"
      >
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <Reveal>
              <div className="text-center space-y-4 text-white">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Devenons partenaires
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Vous êtes un acteur du tourisme et souhaitez accélérer votre
                  développement B2B sur les marchés francophones ? Construisons
                  ensemble un partenariat durable, mêlant représentation, actions
                  terrain et accompagnement stratégique.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <PartnerForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
