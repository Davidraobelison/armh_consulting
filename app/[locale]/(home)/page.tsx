import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import HeroCinematic from "@/components/ui/HeroCinematic";
import StatsCounter from "@/components/ui/StatsCounter";

export default async function Home() {
  const t = await getTranslations("home");
  const tGeneral = await getTranslations("general");

  return (
    <>
      {/* ── HERO CINÉMATIQUE ── */}
      <HeroCinematic
        title={t("hero.title")}
        subtitle={t.rich("hero.subtitle", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
        description={t.rich("hero.description", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      />

      {/* ── ADN ── */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        className="py-5"
        overlay
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8 space-y-4">
            <Reveal>
              <h3 className="mt-0 text-xl md:text-2xl font-medium tracking-wide uppercase text-white">
                {t("dna.title")}
              </h3>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-white/75 text-xl leading-relaxed">
                {t.rich("dna.intro", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-16 md:grid-cols-3 text-center">
            {/* PROJETS */}
            <Link href="/projects">
              <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
                <div className="space-y-6">
                  <Reveal>
                    <h3 className="text-2xl font-semibold uppercase text-white">
                      {t("dna.projects.title")}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <h4 className="text-lg md:text-xl font-medium text-white/80">
                      {t("dna.projects.description")}
                    </h4>
                  </Reveal>
                </div>
                <Reveal delay={0.6}>
                  <div className="flex justify-center">
                    <ButtonCTA href="/projects" variant="secondary">
                      {t("dna.projects.cta")}
                    </ButtonCTA>
                  </div>
                </Reveal>
              </div>
            </Link>

            {/* PARTENARIATS */}
            <Link href="/partenaire">
              <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
                <div className="space-y-6">
                  <Reveal>
                    <h3 className="text-2xl font-semibold uppercase text-white">
                      {t("dna.partners.title")}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <h4 className="text-lg md:text-xl font-medium text-white/80">
                      {t("dna.partners.description")}
                    </h4>
                  </Reveal>
                </div>
                <Reveal delay={0.7}>
                  <div className="flex justify-center">
                    <ButtonCTA href="/partenaire" variant="secondary">
                      {t("dna.partners.cta")}
                    </ButtonCTA>
                  </div>
                </Reveal>
              </div>
            </Link>

            {/* DURABILITÉ */}
            <Link href="/">
              <div className="flex flex-col justify-between h-full px-6 pt-5 pb-5 space-y-10">
                <div className="space-y-6">
                  <Reveal>
                    <h3 className="text-2xl font-semibold uppercase text-white">
                      {t("dna.sustainability.title")}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <h4 className="text-lg md:text-xl font-medium text-white/80">
                      {t("dna.sustainability.description")}
                    </h4>
                  </Reveal>
                </div>
                <Reveal delay={0.8}>
                  <div className="flex justify-center">
                    <ButtonCTA href="/durabilite" variant="secondary">
                      {t("dna.sustainability.cta")}
                    </ButtonCTA>
                  </div>
                </Reveal>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── ENGAGEMENT RINA ── */}
      <Section
        className="py-32"
        backgroundImage="/assets/images/others/img5.webp"
        overlay
      >
        <Container>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <Image
                src="/assets/images/logo/Rina Andria.webp"
                alt="Rina Andria"
                width={280}
                height={280}
                className="object-cover rounded-full shadow-xl"
              />
              <p className="text-2xl text-white italic tracking-wide text-center">
                Rina Andria
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-white">
              <Reveal>
                <h3 className="text-2xl md:text-3xl font-semibold uppercase">
                  {t("engagement.title")}
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  {t("engagement.paragraph1")}
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  {t("engagement.paragraph2")}
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  {t("engagement.paragraph3")}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}

      {/* <StatsCounter /> */}

      <Section
        className="py-32"
        backgroundImage="/assets/images/contact/2.webp"
        overlay
      >
        <Container>
          <div className="text-center space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold">
              {t("finalCta.title")}
            </h2>
            <Reveal delay={0.2}>
              <p className="text-xl max-w-2xl mx-auto">
                {t("finalCta.description")}
              </p>
            </Reveal>
            <ButtonCTA href="/contact">{t("finalCta.cta")}</ButtonCTA>
          </div>
        </Container>
      </Section>
    </>
  );
}