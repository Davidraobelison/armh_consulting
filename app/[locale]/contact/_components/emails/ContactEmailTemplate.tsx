import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  nom: string;
  entreprise: string;
  email: string;
  objet: string;
  provenance: string;
  message: string;
}

const baseUrl = process.env.APP_URL

export function ContactEmailTemplate({
  nom,
  entreprise,
  email,
  objet,
  provenance,
  message,
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#eaf2fb] font-sans text-[#0d2a4a]">
          <Preview>Nouveau message de {nom} - {objet}</Preview>

          <Container className="p-5 mx-auto max-w-[600px]">
            <Section className="bg-white rounded-xl overflow-hidden border border-[#c5ddf4]">

              {/* Header */}
              <Section className="bg-[#0d3b6e] py-6 px-8">
                <Img
                  src={`${baseUrl}/assets/images/logo/logo.webp`}
                  width="130"
                  height="40"
                  alt="ARMH Consulting"
                />
                <Text className="text-[#a8d0f0] text-[12px] m-0 mt-2 tracking-wide">
                  Nouveau message reçu via le formulaire de contact
                </Text>
              </Section>

              {/* Accent stripe */}
              <Section className="bg-[#1e7abf] py-[3px]" />

              {/* Content */}
              <Section className="py-6 px-8">
                <Heading className="text-[#0d3b6e] text-[18px] font-bold mb-4 mt-0">
                  Message de {nom}
                </Heading>

                {/* Info rows */}
                <Section className="rounded-lg overflow-hidden mb-6 border border-[#c5ddf4]">
                  <InfoRow label="Nom & prénom" value={nom} />
                  <InfoRow label="Entreprise" value={entreprise} shaded />
                  <InfoRow label="Email" value={email} link={`mailto:${email}`} />
                  <InfoRow label="Objet" value={objet} shaded />
                  <InfoRow label="Provenance" value={provenance} />
                </Section>

                {/* Message block */}
                <Section className="bg-[#eaf2fb] border-l-4 border-[#1e7abf] px-5 py-4 rounded-r-lg">
                  <Text className="text-[#1e7abf] text-[11px] font-bold uppercase tracking-widest m-0 mb-2">
                    Message
                  </Text>
                  <Text className="text-[#0d2a4a] text-[15px] leading-[26px] m-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </Section>

                {/* Reply CTA */}
                <Section className="text-center mt-8">
                  <Link
                    href={`mailto:${email}`}
                    className="bg-[#0d3b6e] text-white text-[14px] font-semibold px-8 py-3 rounded-lg no-underline inline-block"
                  >
                    Répondre à {nom} →
                  </Link>
                </Section>
              </Section>

              <Hr className="border-[#c5ddf4] mx-8" />

              <Section className="px-8 py-4 bg-[#f4f9fe]">
                <Text className="text-[#7aadce] text-[11px] text-center m-0">
                  Message envoyé depuis le formulaire de contact · armhconsulting.com
                </Text>
              </Section>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

function InfoRow({
  label,
  value,
  shaded,
  link,
}: {
  label: string;
  value: string;
  shaded?: boolean;
  link?: string;
}) {
  return (
    <Section className={`px-4 py-3 ${shaded ? 'bg-[#eaf2fb]' : 'bg-white'}`}>
      <Text className="text-[#1e7abf] text-[11px] font-bold m-0 mb-1 uppercase tracking-wide">
        {label}
      </Text>
      {link ? (
        <Link href={link} className="text-[#0d3b6e] text-[14px] no-underline font-medium">
          {value}
        </Link>
      ) : (
        <Text className="text-[#0d2a4a] text-[14px] m-0">{value}</Text>
      )}
    </Section>
  );
}

ContactEmailTemplate.PreviewProps = {
  nom: 'Jean Dupont',
  entreprise: 'Agence Voyage Paris',
  email: 'jean.dupont@agence.com',
  objet: 'Partenariat',
  provenance: 'LinkedIn',
  message: "Bonjour, je souhaite discuter d'un partenariat potentiel pour des voyages en Inde.",
} as ContactEmailTemplateProps;

export default ContactEmailTemplate;