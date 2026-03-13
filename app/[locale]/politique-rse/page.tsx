import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { generateSeoMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  generateSeoMetadata({
    title: "Politique RSE",
    path: "/politique-rse",
  });

const sections = [
  {
    number: "01",
    title: "Notre engagement RSE",
    content: `Chez ARMH Consulting, la Responsabilité Sociétale des Entreprises (RSE) n'est pas un outil de communication — c'est une conviction profonde qui oriente chacune de nos décisions. En tant que cabinet de conseil spécialisé dans le tourisme B2B francophone, nous avons la responsabilité d'influencer positivement les pratiques de notre secteur.

Notre fondatrice, Rina Andria, a bâti ARMH Consulting sur des valeurs d'authenticité, d'équité et de durabilité. Ces valeurs se traduisent concrètement dans notre façon de travailler avec nos partenaires, les destinations que nous représentons et les équipes que nous formons.`,
  },
  {
    number: "02",
    title: "Tourisme responsable & durable",
    content: `Le tourisme est l'un des secteurs les plus impactants sur les plans environnemental, social et culturel. ARMH Consulting s'engage à promouvoir uniquement des pratiques touristiques responsables auprès de ses partenaires et clients.

Cela signifie que nous encourageons activement nos partenaires hôteliers, DMC et tours-opérateurs à adopter des certifications environnementales reconnues, à mettre en valeur les communautés locales dans leur offre touristique, à réduire leur empreinte carbone et à développer des produits qui respectent les patrimoines naturels et culturels des destinations.

Nous intégrons systématiquement des critères de durabilité dans nos recommandations stratégiques et nos formations.`,
  },
  {
    number: "03",
    title: "Inclusion & diversité",
    content: `ARMH Consulting croit profondément en la diversité comme source de richesse et d'innovation. En tant qu'entreprise fondée et dirigée par une femme issue de la diaspora malgache, nous incarnons nous-mêmes cette diversité.

Nous favorisons l'inclusion dans nos recrutements, nos collaborations et nos partenariats. Nous refusons toute forme de discrimination dans notre activité et veillons à ce que nos partenaires partagent ces valeurs. Nous accordons une attention particulière à la représentation équitable des destinations et des acteurs du tourisme du Sud global dans nos programmes et événements.`,
  },
  {
    number: "04",
    title: "Développement des compétences locales",
    content: `L'un de nos axes RSE prioritaires est le renforcement des capacités des acteurs locaux du tourisme, notamment dans les destinations émergentes. À travers nos programmes de formation, nous transmettons des savoir-faire en développement commercial B2B, en communication destination et en stratégie de distribution.

Nous collaborons avec des organismes de formation et des écoles de tourisme pour co-construire des contenus pédagogiques ancrés dans les réalités du marché. Notre ambition est de contribuer à l'émergence d'une nouvelle génération de professionnels du tourisme capables de valoriser leur territoire à l'international.`,
  },
  {
    number: "05",
    title: "Éthique des affaires & transparence",
    content: `ARMH Consulting s'engage à exercer son activité dans le respect des règles éthiques les plus strictes. Nous pratiquons une totale transparence vis-à-vis de nos clients sur nos méthodes, nos tarifs et nos résultats. Nous refusons tout conflit d'intérêts et déclarons systématiquement nos partenariats commerciaux.

Nos contrats sont rédigés en toute clarté, sans clauses abusives. Nous respectons scrupuleusement la confidentialité des données de nos clients et partenaires, conformément au Règlement Général sur la Protection des Données (RGPD).`,
  },
  {
    number: "06",
    title: "Réduction de notre empreinte environnementale",
    content: `En tant que cabinet de conseil, notre impact environnemental direct est limité, mais nous veillons à le minimiser encore davantage. Nous privilégions les réunions en visioconférence pour réduire les déplacements, optons pour des prestataires engagés dans des démarches écoresponsables pour nos événements, et limitons l'impression papier au strict nécessaire.

Pour nos déplacements professionnels inévitables, nous favorisons les transports à faible émission carbone et compensons nos émissions via des programmes certifiés de reforestation ou de soutien aux énergies renouvelables.`,
  },
];

export default function PolitiqueRSE() {
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
                Politique RSE
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Notre engagement pour un tourisme B2B responsable, inclusif et durable.
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
            {sections.map((sec, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  {/* Header de section */}
                  <div className="bg-white/10 border-b border-white/10 px-8 py-5 flex items-center gap-5">
                    <span className="text-3xl font-light text-white/20 tabular-nums shrink-0">
                      {sec.number}
                    </span>
                    <h2 className="text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
                      {sec.title}
                    </h2>
                  </div>
                  {/* Corps */}
                  <div className="px-8 py-6">
                    {sec.content.split("\n\n").map((para, j) => (
                      <p key={j} className="text-white/75 text-base leading-relaxed mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Date de mise à jour */}
            <Reveal delay={0.5}>
              <p className="text-white/30 text-sm text-center pt-4">
                Politique RSE — ARMH Consulting · Dernière mise à jour : janvier 2025
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}