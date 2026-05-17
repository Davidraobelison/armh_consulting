import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeKitProEmailProps {
  prenom: string;
  besoin: string;
}

const baseUrl = process.env.APP_URL ? `https://${process.env.APP_URL}` : "";

const BESOIN_LABELS: Record<string, string> = {
  devis: "devis client",
  programmation: "programmation",
  formation: "formation",
  decouverte: "découverte produit",
  groupe: "groupe",
  "lune-de-miel": "lune de miel",
  famille: "famille",
  autre: "accompagnement",
};

export function WelcomeKitProEmail({ prenom, besoin }: WelcomeKitProEmailProps) {
  const besoinLabel = BESOIN_LABELS[besoin] ?? "votre besoin";

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#eaf2fb] font-sans">
          <Preview>
            ARMH Consulting - Votre demande Kit Pro Sun Siyam a bien été reçue
          </Preview>

          <Container className="mx-auto py-8 px-4 max-w-[600px]">

            {/* Header */}
            <Section className="bg-[#0d3b6e] rounded-t-xl py-6 px-8 text-center">
              <Img
                src={`${baseUrl}/assets/images/logo/logo.webp`}
                width="160"
                height="50"
                alt="ARMH Consulting"
                className="mx-auto"
              />
            </Section>

            {/* Accent stripe — gold Sun Siyam */}
            <Section className="bg-[#C9A96E] py-[3px]" />

            {/* Body */}
            <Section className="bg-white rounded-b-xl px-8 py-8 border border-[#c5ddf4] border-t-0">

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Bonjour <strong>{prenom}</strong>,
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Nous avons bien reçu votre demande de Kit Pro{" "}
                <strong>Sun Siyam Resorts</strong> concernant{" "}
                <strong>{besoinLabel}</strong>.
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Notre équipe B2B va étudier votre profil et reviendra vers vous
                rapidement pour vous transmettre le Kit Pro le plus adapté à votre
                activité et à vos clients.
              </Text>

              {/* Sun Siyam highlight box */}
              <Section className="bg-[#fdf8f0] border border-[#C9A96E] rounded-xl px-6 py-5 my-6">
                <Text className="text-[#8B6A3E] text-[12px] font-bold uppercase tracking-widest m-0 mb-2">
                  Sun Siyam Resorts
                </Text>
                <Text className="text-[#0d2a4a] text-[14px] leading-[24px] m-0">
                  6 resorts · 3 collections · Maldives &amp; Sri Lanka
                  <br />
                  Représentation francophone exclusive par ARMH Consulting
                </Text>
              </Section>

              <Section className="text-center my-8">
                <Button
                  className="bg-[#0d3b6e] rounded-lg text-white text-[15px] no-underline text-center px-8 py-3 font-semibold"
                  href="https://armh-consulting.com/partenaires/sun-siyam"
                >
                  Découvrir la collection Sun Siyam →
                </Button>
              </Section>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                À très bientôt,
                <br />
                <strong>L'équipe ARMH Consulting</strong>
              </Text>

              <Hr className="border-[#c5ddf4] my-6" />

              <Section className="bg-[#f4f9fe] rounded-lg px-4 py-3">
                <Text className="text-[#7aadce] text-[12px] text-center leading-[20px] m-0">
                  ARMH Consulting · Représentation officielle Sun Siyam Resorts - marchés francophones
                  <br />
                  Ce message a été envoyé suite à votre demande sur armhconsulting.com
                </Text>
              </Section>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WelcomeKitProEmail;
