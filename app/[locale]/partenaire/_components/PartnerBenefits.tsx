import Reveal from "@/components/ui/Reveal";

const benefits = [
  {
    category: "Destinations & institutions",
    items: [
      "Présence renforcée sur les marchés français & francophones.",
      "Dispositifs B2B structurés (workshops, roadshows, campagnes de prospection)",
      "Visibilité coordonnée avec les acteurs privés du territoire.",
    ],
  },
  {
    category: "Hôtels & Groupes hôteliers",
    items: [
      "Développement des ventes sur des marchés ciblés.",
      "Mise en relation avec TO, agences, réseaux de distribution.",
      "Participation à des opérations mutualisées (campagnes, sales blitz, workshops).",
    ],
  },
  {
    category: "DMC & Prestataires locaux",
    items: [
      "Accès facilité aux prescripteurs (TO, agences, réseaux).",
      "Mise en avant dans des programmes de destination ou d'itinéraires.",
      "Structuration d'offres prêtes à vendre pour le marché francophone",
    ],
  },
  {
    category: "Tours Opérateurs & Agences",
    items: [
      "Contenus, formations et outils pour mieux vendre les destinations partenaires.",
      "Accompagnement sur les lancements de produits / nouveautés.",
      "Mise en réseau avec des hôtels, DMC, institutions locales.",
    ],
  },
  {
    category: "Organismes de formation",
    items: [
      "Co-construction de modules sur le tourisme durable et le B2B.",
      "Interventions d'experts et cas concrets issus des projets ARMH.",
      "Passerelle entre formation et marché (stages, projets, études de cas)",
    ],
  },
];

export default function PartnerBenefits() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {benefits.map((col, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className=" backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full text-white">
            <p className="text-sm uppercase tracking-widest text-white/90 mb-5 font-medium">
              {col.category}
            </p>
            <ul className="space-y-4">
              {col.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-base text-white/80 leading-relaxed">
                  <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-white/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}