import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    num: "1",
    title: "Diagnostic",
    items: [
      "Comprendre votre contexte, vos objectifs et vos marchés cibles",
      "Analyser l'existant (actions B2B, visibilité, partenaires, ressources)",
    ],
  },
  {
    num: "2",
    title: "Co.design",
    items: [
      "Co-construire avec vous un plan d'actions B2B adapté à vos enjeux.",
      "Prioriser les marchés, les formats (workshops, roadshows, campagnes) et les partenaires.",
    ],
  },
  {
    num: "3",
    title: "Déploiement",
    items: [
      "Mettre en œuvre les actions : prospection, événements, campagnes, formations.",
      "Coordonner les partenaires impliqués et assurer le suivi opérationnel.",
    ],
  },
  {
    num: "4",
    title: "Reporting & optimisation",
    items: [
      "Mesurer les résultats : leads générés, contacts touchés, actions réalisées.",
      "Ajuster et optimiser les dispositifs pour les prochaines campagnes.",
    ],
  },
];

export default function PartnerProcess() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={i} delay={i * 0.15}>
          <div className="flex flex-col gap-4 h-full">
            {/* Step header */}
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-4 text-white text-center">
              <span className="text-sm uppercase tracking-widest text-white/60 block mb-1">
                Étape {step.num}
              </span>
              <p className="font-bold text-lg md:text-xl">{step.title}</p>
            </div>

            {/* Step content */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white flex-1">
              <ul className="space-y-4">
                {step.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-white/80 leading-relaxed">
                    <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-white/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}