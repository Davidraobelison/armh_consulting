import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Mentions légales",
    path: "/mentions-legales",
  });

const articles = [
  {
    number: "01",
    title: "Éditeur du site",
    content: [
      { label: "Raison sociale", value: "ARMH Consulting" },
      { label: "Forme juridique", value: "Entreprise individuelle" },
      { label: "Dirigeante", value: "Rina Andriafehivolarisoa" },
      { label: "Siège social", value: "3 rue du Jardinet, 77310 PRINGY, France" },
      { label: "Email", value: "armh.consulting@gmail.com" },
      { label: "Téléphone", value: "+33 6 13 45 20 51" },
    ],
  },
  {
    number: "02",
    title: "Hébergement",
    content: [
      { label: "Hébergeur", value: "Vercel Inc." },
      { label: "Adresse", value: "340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis" },
      { label: "Site web", value: "https://vercel.com" },
    ],
  },
  {
    number: "03",
    title: "Propriété intellectuelle",
    text: `L'ensemble du contenu présent sur le site armh-consulting.com — textes, images, graphismes, logos, icônes, vidéos et tout autre élément — est la propriété exclusive d'ARMH Consulting ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.

Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de l'un quelconque des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'ARMH Consulting.

Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`,
  },
  {
    number: "04",
    title: "Protection des données personnelles (RGPD)",
    text: `Conformément au Règlement Général sur la Protection des Données (RGPD) n°2016/679 du 27 avril 2016 et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données personnelles.

Les données collectées via les formulaires de contact et de partenariat du présent site sont utilisées exclusivement dans le cadre du traitement de votre demande et du suivi de la relation commerciale. Elles ne sont en aucun cas cédées ou vendues à des tiers.

Pour exercer vos droits ou pour toute question relative au traitement de vos données, vous pouvez contacter ARMH Consulting à l'adresse suivante : armh.consulting@gmail.com

Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr.`,
  },
  {
    number: "05",
    title: "Cookies",
    text: `Le site armh-consulting.com est susceptible d'utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site.

Conformément à la réglementation en vigueur, votre consentement est recueilli avant le dépôt de tout cookie non essentiel. Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur ou via notre gestionnaire de consentement.

Les cookies strictement nécessaires au fonctionnement du site sont déposés sans consentement préalable, conformément aux exemptions prévues par la CNIL.`,
  },
  {
    number: "06",
    title: "Responsabilité",
    text: `ARMH Consulting s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations mises en ligne.

ARMH Consulting décline toute responsabilité pour tout dommage, direct ou indirect, résultant de l'accès au site ou de l'utilisation des informations qu'il contient. Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers sur lesquels ARMH Consulting n'exerce aucun contrôle.`,
  },
  {
    number: "07",
    title: "Droit applicable & juridiction",
    text: `Les présentes mentions légales sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut d'accord amiable, les tribunaux français seront seuls compétents.

Pour tout litige de consommation, vous pouvez également recourir à la médiation via la plateforme européenne de règlement en ligne des litiges accessible à l'adresse : https://ec.europa.eu/consumers/odr`,
  },
];

export default function MentionsLegales() {
  return (
    <>
      {/* HERO */}
      <Section
        className="py-40"
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5 mt-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
                ARMH Consulting
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white uppercase">
                Mentions légales
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
                Informations légales relatives au site armh-consulting.com
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CONTENU */}
      <Section
        backgroundImage="/assets/images/others/bg_image_principale.webp"
        overlay
        className="py-20"
      >
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-white/10 border-b border-white/10 px-8 py-5 flex items-center gap-5">
                    <span className="text-3xl font-light text-white/20 tabular-nums shrink-0">
                      {article.number}
                    </span>
                    <h2 className="text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
                      {article.title}
                    </h2>
                  </div>

                  {/* Corps — tableau ou texte */}
                  <div className="px-8 py-6">
                    {"content" in article && article.content ? (
                      <div className="space-y-3">
                        {article.content.map((row, j) => (
                          <div key={j} className="flex flex-col sm:flex-row sm:gap-4">
                            <span className="text-white/40 text-sm uppercase tracking-widest shrink-0 sm:w-40">
                              {row.label}
                            </span>
                            <span className="text-white/85 text-base">
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      "text" in article && article.text?.split("\n\n").map((para, j) => (
                        <p key={j} className="text-white/75 text-base leading-relaxed mb-4 last:mb-0">
                          {para}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Date */}
            <Reveal delay={0.6}>
              <p className="text-white/30 text-sm text-center pt-4">
                Mentions légales — ARMH Consulting · Dernière mise à jour : janvier 2025
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}