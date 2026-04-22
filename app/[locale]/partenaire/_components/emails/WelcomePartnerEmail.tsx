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

interface WelcomePartnerEmailProps {
  nom: string;
  typePartenariat: string;
}

const baseUrl = process.env.APP_URL
  ? `https://${process.env.APP_URL}`
  : '';

export function WelcomePartnerEmail({ nom, typePartenariat }: WelcomePartnerEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#eaf2fb] font-sans">
          <Preview>ARMH Consulting — Votre demande de partenariat a bien été reçue</Preview>

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

            {/* Accent stripe */}
            <Section className="bg-[#1e7abf] py-[3px]" />

            {/* Body */}
            <Section className="bg-white rounded-b-xl px-8 py-8 border border-[#c5ddf4] border-t-0">

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Bonjour <strong>{nom}</strong>,
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Nous avons bien reçu votre demande concernant un partenariat de type{' '}
                <strong>{typePartenariat}</strong> et nous vous en remercions.
              </Text>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                Notre équipe va étudier votre projet avec attention et reviendra
                vers vous dans les meilleurs délais pour en discuter.
              </Text>

              <Section className="text-center my-8">
                <Button
                  className="bg-[#0d3b6e] rounded-lg text-white text-[15px] no-underline text-center px-8 py-3 font-semibold"
                  href="https://armh-consulting.com/partenaire"
                >
                  En savoir plus sur nos partenariats →
                </Button>
              </Section>

              <Text className="text-[16px] leading-[28px] text-[#0d2a4a]">
                À bientôt,
                <br />
                <strong>L'équipe ARMH Consulting</strong>
              </Text>

              <Hr className="border-[#c5ddf4] my-6" />

              <Section className="bg-[#f4f9fe] rounded-lg px-4 py-3">
                <Text className="text-[#7aadce] text-[12px] text-center leading-[20px] m-0">
                  ARMH Consulting · Partenaire de représentation France pour BBVoyage
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

WelcomePartnerEmail.PreviewProps = {
  nom: 'Jean Dupont',
  typePartenariat: 'Représentation marchés francophones',
} as WelcomePartnerEmailProps;

export default WelcomePartnerEmail;