import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Reveal from "@/components/ui/Reveal";
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import ContactUsForm from "./_components/ContactForm";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Contact",
    path: "/contact",
  });

export default function Contact() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Section
        backgroundImage="/assets/images/contact/2.webp"
        overlay
        className="py-40 relative h-auto min-h-auto w-full"
      >
        <Container>
          <div className="text-center max-w-4xl mt-16 mx-auto space-y-8 text-white">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-light tracking-wide">
                CONTACTEZ-NOUS
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide uppercase">
                Une question, un projet ou une demande d&apos;information ?
              </h3>
            </Reveal>

            <Reveal delay={0.4}>
              <span className="block text-base md:text-xl opacity-90">
                Écrivez-nous via le formulaire ci-dessous, échangeons sur vos
                besoins et trouvons la meilleure manière de vous accompagner.{" "}
                <strong>Nous vous répondons dans les meilleurs délais.</strong>
              </span>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── CATÉGORIES DE DEMANDE ─── */}
      <Section
        backgroundImage="/assets/images/others/img5.webp"
        overlay
        className="py-10"
      >
        <Container>
          <div className="grid gap-6 md:grid-cols-3">

            {/* PARTENARIATS */}
            <Reveal delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col items-center justify-between gap-6 h-full text-white text-center min-h-[280px]">
                <div className="flex flex-col items-center gap-4 flex-1 justify-center">
                  <p className="text-sm font-semibold tracking-widest uppercase text-white/50">
                    Partenariats
                  </p>
                  <p className="font-bold text-xl leading-snug">
                    Vous souhaitez développer un projet de partenariat B2B ?
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Accéder à notre formulaire dédié pour nous présenter votre projet
                  </p>
                </div>
                <ButtonCTA href="/partenaire" variant="secondary">
                  Découvrir la page Partenariats
                </ButtonCTA>
              </div>
            </Reveal>

            {/* DEMANDE GÉNÉRALE */}
            <Reveal delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col items-center justify-center gap-4 h-full text-white text-center min-h-[280px]">
                <p className="text-sm font-semibold tracking-widest uppercase text-white/50">
                  Demande Générale
                </p>
                <p className="font-bold text-xl leading-snug">
                  Vous avez une question générale ?
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  Écrivez-nous via le formulaire de contact ci-dessous
                </p>
              </div>
            </Reveal>

            {/* PRESSE / INTERVENTION / COLLABORATION */}
            <Reveal delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col items-center justify-center gap-4 h-full text-white text-center min-h-[280px]">
                <p className="text-sm font-semibold tracking-widest uppercase text-white/50">
                  Presse / Intervention / Collaboration
                </p>
                <p className="font-bold text-xl leading-snug">
                  Vous souhaitez nous solliciter pour une intervention, un échange
                  ou une collaboration ?
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  Précisez votre demande dans le formulaire
                </p>
              </div>
            </Reveal>

          </div>
        </Container>
      </Section>

      {/* ─── FORMULAIRE + COORDONNÉES ─── */}
      <Section
        className="py-32"
        backgroundImage="/assets/images/contact/2.webp"
        overlay
      >
        <Container>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* FORMULAIRE */}
            <div className="md:col-span-8">
              <Reveal delay={0.2}>
                <ContactUsForm />
              </Reveal>
            </div>

            {/* COORDONNÉES */}
            <div className="md:col-span-4 text-white">
              <Reveal>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">

                  {/* Header band — cohérent avec les formulaires */}
                  <div className="bg-white/10 border-b border-white/10 px-6 py-5">
                    <h2 className="text-lg text-center font-semibold uppercase tracking-widest text-white">
                      Coordonnées directes
                    </h2>
                  </div>

                  <div className="px-6 py-6 space-y-5 text-white/90 text-base">

                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="mt-1 shrink-0 w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Siège social</p>
                        <p>3 rue du Jardinet</p>
                        <p>77310 PRINGY</p>
                      </div>
                    </div>

                    <div className="border-t border-white/10" />

                    <div className="flex items-start gap-4">
                      <FaEnvelope className="mt-1 shrink-0 w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">E-mail</p>
                        <a
                          href="mailto:armh.consulting@gmail.com"
                          className="underline underline-offset-4 hover:text-white transition break-all"
                        >
                          armh.consulting@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-white/10" />

                    <div className="flex items-start gap-4">
                      <FaPhone className="mt-1 shrink-0 w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Téléphone</p>
                        <a
                          href="tel:+33613452051"
                          className="hover:underline hover:text-white transition"
                        >
                          +33 6 13 45 20 51
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-white/10" />

                    <div className="flex items-center gap-4 pt-1">
                      <a
                        href="https://www.facebook.com/profile.php?id=100011643994062"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <FaFacebook className="w-7 h-7 hover:text-blue-400 transition" />
                      </a>
                      <a
                        href="https://fr.linkedin.com/company/armhconsultingofficiel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <FaLinkedin className="w-7 h-7 hover:text-blue-400 transition" />
                      </a>
                      <a
                        href="https://www.instagram.com/rina_andria_pro/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                      >
                        <FaInstagram className="w-7 h-7 hover:text-pink-500 transition" />
                      </a>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}