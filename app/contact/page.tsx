import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
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
      {/* HERO */}
      <Hero
        title="CONTACT"
        subtitle="Parlons de votre projet"
        backgroundImage="/assets/images/contact/hero.jpg"
      />

      {/* INTRO */}
      <Section>
        <Container>
          <p className="text-lg text-gray-700 max-w-4xl">
            Vous avez un projet, une question ou souhaitez en savoir plus
            sur l’accompagnement proposé par ARMH Consulting ?
            N’hésitez pas à nous contacter.
          </p>
        </Container>
      </Section>

      {/* INFOS + FORM */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* INFOS */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Coordonnées
              </h2>

              <div className="space-y-2 text-lg text-gray-700">
                <p><strong>ARMH Consulting</strong></p>
                <p>Tourisme · Marketing · Hôtellerie</p>
                <p>📍 Madagascar / International</p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:contact@armh-consulting.com"
                    className="underline hover:text-blue-600"
                  >
                    contact@armh-consulting.com
                  </a>
                </p>
              </div>
            </div>

            {/* FORM */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Envoyer un message
              </h2>

              <ContactUsForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
