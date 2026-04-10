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
} from '@react-email/components';

interface WelcomeEmailProps {
  nom: string;
}

const baseUrl = process.env.APP_URL

export function WelcomeEmail({ nom }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#f9f9f9] font-sans">
          <Preview>
            ARMH Consulting — Nous avons bien reçu votre message
          </Preview>

          <Container className="mx-auto py-8 px-4 max-w-[600px]">

            {/* Header avec logo */}
            <Section className="bg-[#1a1a1a] rounded-t-lg py-6 px-8 text-center">
              <Img
                src={`${baseUrl}/assets/images/logo/logo.webp`}
                width="160"
                height="50"
                alt="ARMH Consulting"
                className="mx-auto"
              />
            </Section>

            {/* Body */}
            <Section className="bg-white rounded-b-lg px-8 py-8 border border-[#e0e0e0] border-t-0">

              <Text className="text-[16px] leading-[28px] text-[#1a1a1a]">
                Bonjour <strong>{nom}</strong>,
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#1a1a1a]">
                Nous avons bien reçu votre message et nous vous en remercions.
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#1a1a1a]">
                Notre équipe reviendra vers vous dans les meilleurs délais pour
                répondre à votre demande.
              </Text>

              <Section className="text-center my-8">
                <Button
                  className="bg-[#1a1a1a] rounded-md text-white text-[15px] no-underline text-center px-8 py-3 font-semibold"
                  href="https://armhconsulting.com"
                >
                  Découvrir ARMH Consulting →
                </Button>
              </Section>

              <Text className="text-[16px] leading-[28px] text-[#1a1a1a]">
                À bientôt,
                <br />
                <strong>L'équipe ARMH Consulting</strong>
              </Text>

              <Hr className="border-[#e0e0e0] my-6" />

              <Text className="text-[#999] text-[12px] text-center leading-[20px]">
                ARMH Consulting · Partenaire de représentation France pour BBVoyage
                <br />
                Ce message a été envoyé suite à votre demande sur armhconsulting.com
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  nom: 'Jean Dupont',
} as WelcomeEmailProps;

export default WelcomeEmail;