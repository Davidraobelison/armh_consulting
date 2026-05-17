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
} from "@react-email/components";

interface KitProEmailTemplateProps {
  prenom: string;
  nom: string;
  societe: string;
  fonction: string;
  email: string;
  telephone: string;
  ville: string;
  profil: string;
  destination: string;
  besoin: string;
  volume: string;
  message: string;
}

const baseUrl = process.env.APP_URL ? `https://${process.env.APP_URL}` : "";

const PROFIL_LABELS: Record<string, string> = {
  agence: "Agence de voyages",
  to: "Tour-opérateur (TO)",
  reseau: "Réseau",
  independant: "Indépendant",
  conciergerie: "Conciergerie",
  mice: "MICE",
  autre: "Autre",
};
const DESTINATION_LABELS: Record<string, string> = {
  maldives: "Maldives",
  "sri-lanka": "Sri Lanka",
  "les-deux": "Maldives & Sri Lanka",
};
const BESOIN_LABELS: Record<string, string> = {
  devis: "Devis client",
  programmation: "Programmation",
  formation: "Formation",
  decouverte: "Découverte produit",
  groupe: "Groupe",
  "lune-de-miel": "Lune de miel",
  famille: "Famille",
  autre: "Autre",
};
const VOLUME_LABELS: Record<string, string> = {
  ponctuel: "Ponctuel",
  regulier: "Régulier",
  programmation: "Programmation",
  qualifier: "À qualifier",
};

export function KitProEmailTemplate({
  prenom, nom, societe, fonction, email, telephone,
  ville, profil, destination, besoin, volume, message,
}: KitProEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#eaf2fb] font-sans text-[#0d2a4a]">
          <Preview>
            Demande Kit Pro Sun Siyam — {prenom} {nom} · {societe}
          </Preview>

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
                  Nouvelle demande Kit Pro Sun Siyam reçue
                </Text>
              </Section>

              {/* Accent stripe — gold Sun Siyam */}
              <Section className="bg-[#C9A96E] py-[3px]" />

              {/* Content */}
              <Section className="py-6 px-8">

                {/* Badge destination */}
                <Section className="mb-4">
                  <Text className="inline-block bg-[#C9A96E] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full m-0">
                    Sun Siyam Resorts · {DESTINATION_LABELS[destination] ?? destination}
                  </Text>
                </Section>

                <Heading className="text-[#0d3b6e] text-[18px] font-bold mb-4 mt-0">
                  Demande de {prenom} {nom}
                </Heading>

                {/* Coordonnées */}
                <Section className="rounded-lg overflow-hidden mb-5 border border-[#c5ddf4]">
                  <InfoRow label="Prénom & Nom" value={`${prenom} ${nom}`} />
                  <InfoRow label="Société / Agence" value={societe} shaded />
                  {fonction && <InfoRow label="Fonction" value={fonction} />}
                  <InfoRow label="Email" value={email} link={`mailto:${email}`} shaded={!!fonction} />
                  {telephone && <InfoRow label="Téléphone" value={telephone} shaded={!fonction} />}
                  {ville && <InfoRow label="Ville / Pays" value={ville} shaded={!!telephone} />}
                </Section>

                {/* Qualification */}
                <Section className="rounded-lg overflow-hidden mb-5 border border-[#c5ddf4]">
                  <InfoRow label="Profil" value={PROFIL_LABELS[profil] ?? profil} />
                  <InfoRow label="Destination travaillée" value={DESTINATION_LABELS[destination] ?? destination} shaded />
                  <InfoRow label="Besoin principal" value={BESOIN_LABELS[besoin] ?? besoin} />
                  <InfoRow label="Volume / Fréquence de vente" value={VOLUME_LABELS[volume] ?? volume} shaded />
                </Section>

                {/* Message libre */}
                {message && (
                  <Section className="bg-[#eaf2fb] border-l-4 border-[#C9A96E] px-5 py-4 rounded-r-lg mb-6">
                    <Text className="text-[#C9A96E] text-[11px] font-bold uppercase tracking-widest m-0 mb-2">
                      Message / brief libre
                    </Text>
                    <Text className="text-[#0d2a4a] text-[15px] leading-[26px] m-0 whitespace-pre-wrap">
                      {message}
                    </Text>
                  </Section>
                )}

                {/* Reply CTA */}
                <Section className="text-center mt-6">
                  <Link
                    href={`mailto:${email}`}
                    className="bg-[#0d3b6e] text-white text-[14px] font-semibold px-8 py-3 rounded-lg no-underline inline-block"
                  >
                    Répondre à {prenom} →
                  </Link>
                </Section>
              </Section>

              <Hr className="border-[#c5ddf4] mx-8" />

              <Section className="px-8 py-4 bg-[#f4f9fe]">
                <Text className="text-[#7aadce] text-[11px] text-center m-0">
                  Demande reçue via le formulaire Kit Pro Sun Siyam · armhconsulting.com
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
  label, value, shaded, link,
}: {
  label: string;
  value: string;
  shaded?: boolean;
  link?: string;
}) {
  return (
    <Section className={`px-4 py-3 ${shaded ? "bg-[#eaf2fb]" : "bg-white"}`}>
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

export default KitProEmailTemplate;
